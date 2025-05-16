<template>
    <div class="user-management">
        <!-- 操作工具栏 -->
        <div class="toolbar">
            <div class="search-area">
                <el-input v-model="searchKeyword" placeholder="搜索用户ID/昵称/邮箱" clearable @keyup.enter="handleSearch"
                    class="search-input">
                    <template #prefix>
                        <el-icon>
                            <Search />
                        </el-icon>
                    </template>
                </el-input>

                <el-select v-model="filterStatus" placeholder="全部状态" clearable class="status-filter">
                    <el-option v-for="status in statusOptions" :key="status.value" :label="status.label"
                        :value="status.value" />
                </el-select>

                <el-select v-model="filterRole" placeholder="全部角色" clearable class="role-filter">
                    <el-option v-for="role in roleOptions" :key="role.value" :label="role.label" :value="role.value" />
                </el-select>
            </div>

            <div class="action-area">
                <el-button type="primary" @click="handleCreate">
                    <el-icon>
                        <User />
                    </el-icon> 新建用户
                </el-button>
                <el-dropdown @command="handleBatchCommand">
                    <el-button :disabled="selectedIds.length === 0">
                        批量操作<el-icon>
                            <ArrowDown />
                        </el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="enable">启用选中用户</el-dropdown-item>
                            <el-dropdown-item command="disable">禁用选中用户</el-dropdown-item>
                            <el-dropdown-item command="delete" divided>删除用户</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>

        <!-- 用户数据表格 -->
        <el-table :data="users" v-loading="loading" @selection-change="handleSelectionChange" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="id" label="用户ID" width="120" sortable />

            <el-table-column label="用户信息" min-width="220">
                <template #default="{ row }">
                    <div class="user-info">
                        <el-avatar :src="row.avatar" :size="40" />
                        <div class="user-meta">
                            <div class="username">{{ row.nickname }}</div>
                            <div class="email">{{ row.email }}</div>
                        </div>
                    </div>
                </template>
            </el-table-column>

            <el-table-column prop="role" label="角色" width="120">
                <template #default="{ row }">
                    <el-tag :type="roleTagType(row.role)">
                        {{ roleMap[row.role] }}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="status" label="状态" width="100">
                <template #default="{ row }">
                    <el-tag :type="row.status === 'active' ? 'success' : 'danger'" effect="plain">
                        {{ statusMap[row.status] }}
                    </el-tag>
                </template>
            </el-table-column>

            <el-table-column prop="createdAt" label="注册时间" width="180" sortable>
                <template #default="{ row }">
                    {{ formatDate(row.createdAt) }}
                </template>
            </el-table-column>

            <el-table-column prop="lastLogin" label="最后登录" width="180">
                <template #default="{ row }">
                    {{ row.lastLogin ? formatDate(row.lastLogin.time) : '从未登录' }}<br>
                    <span class="ip-info">{{ row.lastLogin?.ip }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="180" fixed="right">
                <template #default="{ row }">
                    <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
                    <el-dropdown trigger="click" @command="handleSingleCommand(row)">
                        <el-button link type="primary">
                            更多<el-icon>
                                <ArrowDown />
                            </el-icon>
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :command="row.status === 'active' ? 'disable' : 'enable'">
                                    {{ row.status === 'active' ? '禁用账户' : '启用账户' }}
                                </el-dropdown-item>
                                <el-dropdown-item command="resetPassword">重置密码</el-dropdown-item>
                                <el-dropdown-item command="delete" divided>删除账户</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页控件 -->
        <div class="pagination">
            <el-pagination v-model:current-page="currentPage" :page-sizes="[10, 20, 50, 100]" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
                @current-change="handlePageChange" />
        </div>

        <!-- 用户编辑对话框 -->
        <el-dialog v-model="dialogVisible" :title="dialogTitle" width="600px">
            <el-form :model="form" label-width="80px">
                <el-form-item label="用户头像">
                    <avatar-upload v-model="form.avatar" />
                </el-form-item>
                <el-form-item label="用户昵称">
                    <el-input v-model="form.nickname" />
                </el-form-item>
                <el-form-item label="登录邮箱">
                    <el-input v-model="form.email" type="email" />
                </el-form-item>
                <el-form-item label="用户角色">
                    <el-select v-model="form.role">
                        <el-option v-for="role in roleOptions" :key="role.value" :label="role.label"
                            :value="role.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="账户状态">
                    <el-switch v-model="form.status" active-value="active" inactive-value="disabled" />
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="submitForm">保存</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Search, User, ArrowDown } from '@element-plus/icons-vue'
import dayjs from 'dayjs'
//import AvatarUpload from '@/components/AvatarUpload.vue'

// 模拟数据
const mockUsers = [
    // 1. 活跃管理员
    {
        id: 1001,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        nickname: "管理员账号",
        email: "admin@example.com",
        role: "admin",
        status: "active",
        createdAt: "2025-01-15T08:30:00Z",
        lastLogin: {
            time: "2025-03-20T14:22:35Z",
            ip: "192.168.1.100",
            device: "MacOS Chrome"
        }
    },

    // 2. 禁用编辑账号
    {
        id: 1002,
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        nickname: "被封禁的账号",
        email: "editor.li@example.com",
        role: "editor",
        status: "disabled",
        createdAt: "2025-06-01T10:15:00Z",
        lastLogin: {
            time: "2025-03-19T09:45:00Z",
            ip: "106.120.180.25",
            device: "Windows Edge"
        }
    },

    // 3. 新注册未登录用户
    {
        id: 1025,
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        nickname: "未激活账号",
        email: "new.user@example.com",
        role: "user",
        status: "active",
        createdAt: "2024-03-20T10:00:00Z",
        lastLogin: null
    },

    // 4. 高频登录用户
    {
        id: 1015,
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        nickname: "活跃账号",
        email: "active.user@example.com",
        role: "user",
        status: "active",
        createdAt: "2025-01-01T16:30:00Z",
        lastLogin: {
            time: "2025-03-20T15:01:17Z",
            ip: "220.181.38.148",
            device: "Android App"
        }
    },

    // 5. 异常登录用户
    {
        id: 1018,
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        nickname: "异常账号",
        email: "alert.user@example.com",
        role: "user",
        status: "active",
        createdAt: "2025-01-15T12:00:00Z",
        lastLogin: {
            time: "2025-03-20T12:30:45Z",
            ip: "34.105.93.201", // 海外IP示例
            device: "Linux Firefox"
        }
    },

    // 6. 长期未活跃用户
    {
        id: 1005,
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        nickname: "Inactive_User",
        email: "old.user@example.com",
        role: "user",
        status: "active",
        createdAt: "2022-01-20T09:00:00Z",
        lastLogin: {
            time: "2025-04-01T08:00:00Z",
            ip: "192.168.1.50",
            device: "iPad Safari"
        }
    }
]
onMounted(() => {
    loadData()
})
// 组件状态
const loading = ref(false)
const users = ref([])
const total = ref(0)
const currentPage = ref(1)
const pageSize = ref(20)
const searchKeyword = ref('')
const filterStatus = ref('')
const filterRole = ref('')
const selectedIds = ref([])
const dialogVisible = ref(false)
const form = ref({})
const isEditMode = ref(false)

// 字典映射
const roleMap = {
    admin: '管理员',
    editor: '编辑',
    user: '普通用户'
}

const statusMap = {
    active: '正常',
    disabled: '已禁用'
}

// 选项配置
const roleOptions = [
    { value: 'admin', label: '管理员' },
    { value: 'editor', label: '编辑' },
    { value: 'user', label: '普通用户' }
]

const statusOptions = [
    { value: 'active', label: '正常' },
    { value: 'disabled', label: '已禁用' }
]

// 方法
const loadData = async () => {
    loading.value = true
    try {
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 500))

        let filtered = mockUsers.filter(user => {
            const matchSearch = [user.id, user.nickname, user.email]
                .some(field => field.toString().includes(searchKeyword.value.toLowerCase()))
            const matchStatus = filterStatus.value ? user.status === filterStatus.value : true
            const matchRole = filterRole.value ? user.role === filterRole.value : true
            return matchSearch && matchStatus && matchRole
        })

        // 添加分页处理
        total.value = filtered.length
        const start = (currentPage.value - 1) * pageSize.value
        users.value = filtered.slice(start, start + pageSize.value)

    } catch (error) {
        console.error('加载数据失败:', error)
    } finally {
        loading.value = false
    }
}

const handleSearch = () => {
    currentPage.value = 1
    loadData()
}

const handleSelectionChange = (selection) => {
    selectedIds.value = selection.map(user => user.id)
}

const handleBatchCommand = (command) => {
    ElMessageBox.confirm(`确认要执行批量${command}操作?`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
    }).then(() => {
        // 调用批量操作API
        loadData()
        ElMessage.success('操作成功')
    })
}

const handleCreate = () => {
    isEditMode.value = false
    form.value = {
        avatar: '',
        nickname: '',
        email: '',
        role: 'user',
        status: 'active'
    }
    dialogVisible.value = true
}

const handleEdit = (user) => {
    isEditMode.value = true
    form.value = { ...user }
    dialogVisible.value = true
}

const submitForm = () => {
    dialogVisible.value = false
    loadData()
    ElMessage.success(isEditMode.value ? '用户信息已更新' : '新用户已创建')
}

const formatDate = (date) => dayjs(date).format('YYYY-MM-DD HH:mm')

const roleTagType = (role) => ({
    admin: 'danger',
    editor: 'warning',
    user: 'success'
}[role])
</script>

<style scoped>
.user-management {
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

.search-area {
    display: flex;
    gap: 12px;
    flex: 1;
    max-width: 800px;
}

.search-input {
    width: 280px;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .user-meta {
        line-height: 1.4;

        .username {
            font-weight: 500;
            color: #333;
        }

        .email {
            font-size: 0.9em;
            color: #666;
        }
    }
}

.ip-info {
    font-size: 0.8em;
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

    th {
        font-weight: 600;
    }
}
</style>