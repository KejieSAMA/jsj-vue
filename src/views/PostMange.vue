<template>
    <div class="topic-management">
        <!-- 操作工具栏 -->
        <div class="toolbar">
            <div class="left-actions">
                <el-input v-model="searchKeyword" placeholder="搜索主题名称/作者" class="search-input" clearable
                    @keyup.enter="handleSearch">
                    <template #prefix>
                        <el-icon>
                            <Search />
                        </el-icon>
                    </template>
                </el-input>

                <el-select v-model="filterSection" placeholder="全部版块" class="section-filter">
                    <el-option v-for="section in sections" :key="section.value" :label="section.label"
                        :value="section.value" />
                </el-select>

                <el-select v-model="filterStatus" placeholder="全部状态" class="status-filter">
                    <el-option v-for="status in statusOptions" :key="status.value" :label="status.label"
                        :value="status.value" />
                </el-select>
            </div>

            <div class="right-actions">
                <el-button type="primary" @click="handleCreate">
                    <el-icon>
                        <Plus />
                    </el-icon> 新建主题
                </el-button>
                <el-button :disabled="selectedIds.length === 0" @click="handleBatchDelete">
                    <el-icon>
                        <Delete />
                    </el-icon> 批量删除
                </el-button>
            </div>
        </div>

        <!-- 数据表格 -->
        <el-table v-loading="loading" :data="topics" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="title" label="主题名称" min-width="200">
                <template #default="{ row }">
                    <router-link :to="`/topic/${row.id}`" class="topic-title">
                        {{ row.title }}
                        <el-tag v-if="row.isTop" size="small" effect="dark" type="warning">置顶</el-tag>
                        <el-tag v-if="row.isFeatured" size="small" effect="dark" type="success">精华</el-tag>
                    </router-link>
                </template>
            </el-table-column>

            <el-table-column prop="section" label="所属版块" width="150">
                <template #default="{ row }">
                    <el-tag>{{ getSectionLabel(row.section) }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="author" label="作者" width="120" />

            <el-table-column prop="viewCount" label="浏览" sortable width="100">
                <template #default="{ row }">
                    <span class="count">{{ row.viewCount | formatNumber }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="commentCount" label="评论" sortable width="100">
                <template #default="{ row }">
                    <span class="count">{{ row.commentCount | formatNumber }}</span>
                </template>
            </el-table-column>

            <el-table-column prop="createTime" label="发布时间" sortable width="180">
                <template #default="{ row }">
                    {{ row.createTime | formatDateTime }}
                </template>
            </el-table-column>

            <el-table-column prop="lastReply" label="最后回复" width="180">
                <template #default="{ row }">
                    {{ row.lastReply.time | formatDateTime }}<br>
                    <span class="subtext">by {{ row.lastReply.user }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="180" fixed="right">
                <template #default="{ row }">
                    <el-button size="small" @click="handleEdit(row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页控件 -->
        <div class="pagination">
            <el-pagination v-model:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                @current-change="handlePageChange" />
        </div>

        <!-- 编辑对话框 -->
        <el-dialog v-model="dialogVisible" :title="dialogTitle" width="600px">
            <el-form :model="form" label-width="80px">
                <el-form-item label="主题标题">
                    <el-input v-model="form.title" />
                </el-form-item>
                <el-form-item label="所属版块">
                    <el-select v-model="form.section">
                        <el-option v-for="section in sections" :key="section.value" :label="section.label"
                            :value="section.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="状态设置">
                    <el-checkbox v-model="form.isTop">置顶主题</el-checkbox>
                    <el-checkbox v-model="form.isFeatured">设为精华</el-checkbox>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search, Delete, Plus } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

// 模拟数据
const mockTopics = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `深入探讨Vue3生态发展（${i + 1}）`,
    section: ['tech', 'resource', 'qna'][i % 3],
    author: `用户${String(i + 1).padStart(3, '0')}`,
    viewCount: Math.floor(Math.random() * 10000),
    commentCount: Math.floor(Math.random() * 500),
    createTime: new Date(Date.now() - i * 3600000),
    lastReply: {
        time: new Date(Date.now() - i * 1800000),
        user: `用户${String((i + 5) % 100).padStart(3, '0')}`
    },
    isTop: i % 7 === 0,
    isFeatured: i % 5 === 0
}))

// 组件逻辑
const loading = ref(false)
const topics = ref([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(20)
const searchKeyword = ref('')
const filterSection = ref('')
const filterStatus = ref('')
const selectedIds = ref([])
const dialogVisible = ref(false)
const form = ref({})
const isEditMode = ref(false)

// 选项数据
const sections = ref([
    { value: 'tech', label: '技术交流' },
    { value: 'resource', label: '资源分享' },
    { value: 'qna', label: '问答求助' }
])

const statusOptions = ref([
    { value: 'featured', label: '精华主题' },
    { value: 'top', label: '置顶主题' },
    { value: 'normal', label: '普通主题' }
])
const getSectionLabel = (value) => {
    const section = sections.value.find(s => s.value === value)
    return section?.label || value
}

// 过滤器
const filters = {
    formatNumber: (value) => {
        return value > 10000 ? `${(value / 10000).toFixed(1)}w` : value
    },
    formatDateTime: (date) => {
        return dayjs(date).format('YYYY-MM-DD HH:mm')
    }
}

// 初始化加载
onMounted(async () => {
    await loadData()
})

// 加载数据方法
const loadData = async () => {
    loading.value = true
    try {
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 500))

        // 过滤逻辑
        let data = mockTopics
        if (searchKeyword.value) {
            const kw = searchKeyword.value.toLowerCase()
            data = data.filter(t =>
                t.title.toLowerCase().includes(kw) ||
                t.author.toLowerCase().includes(kw)
            )
        }
        if (filterSection.value) {
            data = data.filter(t => t.section === filterSection.value)
        }

        // 分页处理
        total.value = data.length
        const start = (currentPage.value - 1) * pageSize.value
        const end = start + pageSize.value
        topics.value = data.slice(start, end)
    } finally {
        loading.value = false
    }
}

// 表格选择处理
const handleSelectionChange = (selection) => {
    selectedIds.value = selection.map(item => item.id)
}

// 分页处理
const handleSizeChange = (newSize) => {
    pageSize.value = newSize
    loadData()
}

const handlePageChange = (page) => {
    currentPage.value = page
    loadData()
}

// 搜索处理
const handleSearch = () => {
    currentPage.value = 1
    loadData()
}

// 新建主题
const handleCreate = () => {
    isEditMode.value = false
    form.value = {
        title: '',
        section: '',
        isTop: false,
        isFeatured: false
    }
    dialogVisible.value = true
}

// 编辑主题
const handleEdit = (row) => {
    isEditMode.value = true
    form.value = { ...row }
    dialogVisible.value = true
}

// 删除处理
const handleDelete = async (id) => {
    try {
        await ElMessageBox.confirm('确定删除该主题？此操作不可恢复！', '警告', {
            confirmButtonText: '确认删除',
            cancelButtonText: '取消',
            type: 'warning'
        })
        // 执行删除API调用
        ElMessage.success('删除成功')
        loadData()
    } catch (error) {
        // 用户取消
    }
}

// 提交表单
const submitForm = async () => {
    // 这里调用API提交
    dialogVisible.value = false
    ElMessage.success(isEditMode.value ? '修改成功' : '创建成功')
    loadData()
}

// 计算属性
const dialogTitle = computed(() => {
    return isEditMode.value ? '编辑主题' : '新建主题'
})
</script>

<style scoped>
.topic-management {
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.toolbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 12px;
}

.left-actions {
    display: flex;
    gap: 12px;
    flex: 1;
    max-width: 800px;
}

.search-input {
    width: 280px;
}

.count {
    font-family: monospace;
    font-weight: bold;
    color: #2175f3;
}

.topic-title {
    color: #333;
    text-decoration: none;

    &:hover {
        color: #2175f3;
    }

    .el-tag {
        margin-left: 8px;
        vertical-align: middle;
    }
}

.subtext {
    font-size: 12px;
    color: #999;
}

.pagination {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
}

:deep(.el-table) {
    --el-table-header-bg-color: #f8f9fa;
    --el-table-row-hover-bg-color: #f5f6fa;
}

:deep(.el-table th) {
    font-weight: 600;
    color: #1a1a1a;
}
</style>