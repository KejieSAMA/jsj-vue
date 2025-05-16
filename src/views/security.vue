<template>
    <div class="security-audit">
        <!-- 异常主题审计 -->
        <el-card class="audit-section">
            <template #header>
                <div class="section-header">
                    <span class="title">异常主题审计（近期检测到{{ abnormalTopics.length }}条异常）</span>
                    <el-button type="primary" size="small">导出报告</el-button>
                </div>
            </template>

            <el-table :data="abnormalTopics" style="width: 100%">
                <el-table-column prop="title" label="主题标题" width="300">
                    <template #default="{ row }">
                        <router-link :to="`/topic/${row.id}`" class="danger-link">
                            {{ row.title }}
                            <el-icon>
                                <Warning />
                            </el-icon>
                        </router-link>
                    </template>
                </el-table-column>
                <el-table-column prop="abnormalType" label="异常类型" width="150">
                    <template #default="{ row }">
                        <el-tag :type="getAbnormalTagType(row.abnormalType)">
                            {{ row.abnormalType }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="author" label="作者" width="120" />
                <el-table-column prop="reportCount" label="举报次数" width="100" sortable />
                <el-table-column prop="lastOperation" label="最后操作时间" width="180" />
                <el-table-column label="操作" width="200">
                    <template #default="{ row }">
                        <el-button size="small" @click="handleViewDetail(row)">详情</el-button>
                        <el-button size="small" :type="row.status === '已处理' ? 'success' : 'danger'"
                            @click="toggleTopicStatus(row)">
                            {{ row.status === '已处理' ? '✔ 已处理' : '标记处理' }}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!-- 异常用户审计 -->
        <el-card class="audit-section">
            <template #header>
                <div class="section-header">
                    <span class="title">异常用户行为（近期检测到{{ abnormalUsers.length }}条异常）</span>
                    <el-button type="primary" size="small">导出报告</el-button>
                </div>
            </template>

            <el-table :data="abnormalUsers" style="width: 100%">
                <el-table-column prop="username" label="用户名" width="200">
                    <template #default="{ row }">
                        <span class="danger-text">
                            {{ row.username }}
                            <el-tag v-if="row.isNew" size="mini" effect="dark">新注册</el-tag>
                        </span>
                    </template>
                </el-table-column>
                <el-table-column prop="behavior" label="异常行为" width="220">
                    <template #default="{ row }">
                        <el-tooltip :content="row.description">
                            <span class="behavior-text">{{ row.behavior }}</span>
                        </el-tooltip>
                    </template>
                </el-table-column>
                <el-table-column prop="count" label="发生次数" width="120" sortable />
                <el-table-column prop="lastOccurrence" label="最后发生时间" width="180" />
                <el-table-column label="风险等级" width="120">
                    <template #default="{ row }">
                        <el-progress :percentage="row.riskLevel * 20" :format="() => riskLevelMap[row.riskLevel]"
                            :color="riskLevelColors[row.riskLevel]" :show-text="false" />
                        <span :style="{ color: riskLevelColors[row.riskLevel] }">
                            {{ riskLevelMap[row.riskLevel] }}
                        </span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template #default="{ row }">
                        <el-button size="small" @click="handleUserAction(row, 'ban')" v-if="row.riskLevel > 3">
                            封禁
                        </el-button>
                        <el-button size="small" :type="row.status === '已处理' ? 'success' : 'warning'"
                            @click="toggleUserStatus(row)">
                            {{ row.status === '已处理' ? '已处理' : '标记' }}
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Warning } from '@element-plus/icons-vue'

// 异常主题数据
const abnormalTopics = ref([
    {
        id: 101,
        title: "敏感政治内容讨论",
        author: "user123",
        abnormalType: "敏感内容",
        reportCount: 8,
        lastOperation: "2024-03-25 14:30",
        status: "待处理",
        details: "检测到敏感关键词：​***"
    },
    {
        id: 102,
        title: "高频修改测试主题",
        author: "editor01",
        abnormalType: "高频修改",
        reportCount: 3,
        lastOperation: "2024-03-25 10:15",
        status: "待处理",
        details: "1小时内修改12次"
    },
    {
        id: 103,
        title: "虚假交易信息发布",
        author: "trader99",
        abnormalType: "违规交易",
        reportCount: 15,
        lastOperation: "2024-03-24 18:20",
        status: "已处理",
        details: "检测到虚拟货币交易信息"
    }
])

// 异常用户数据
const abnormalUsers = ref([
    {
        id: 201,
        username: "hacker_001",
        behavior: "高频登录失败",
        description: "24小时内尝试登录失败45次",
        count: 45,
        lastOccurrence: "2024-03-25 15:00",
        riskLevel: 5,
        isNew: true,
        status: "待处理"
    },
    {
        id: 202,
        username: "spam_user",
        behavior: "批量删除操作",
        description: "1小时内删除38个主题",
        count: 38,
        lastOccurrence: "2024-03-25 11:30",
        riskLevel: 4,
        status: "待处理"
    },
    {
        id: 203,
        username: "content_farmer",
        behavior: "高频内容修改",
        description: "30分钟内修改个人资料9次",
        count: 9,
        lastOccurrence: "2024-03-24 22:15",
        riskLevel: 3,
        status: "已处理"
    }
])

// 风险等级配置
const riskLevelMap = {
    1: "低风险",
    2: "普通风险",
    3: "中度风险",
    4: "高度风险",
    5: "严重风险"
}

const riskLevelColors = {
    1: "#67C23A",
    2: "#E6A23C",
    3: "#F56C6C",
    4: "#F56C6C",
    5: "#FF0000"
}

// 操作方法
const getAbnormalTagType = (type) => {
    const typeMap = {
        '敏感内容': 'danger',
        '高频修改': 'warning',
        '违规交易': 'danger',
        '用户举报': 'info'
    }
    return typeMap[type] || 'info'
}

const toggleTopicStatus = (row) => {
    row.status = row.status === '待处理' ? '已处理' : '待处理'
}

const toggleUserStatus = (row) => {
    row.status = row.status === '待处理' ? '已处理' : '待处理'
}

const handleViewDetail = (row) => {
    ElMessage.warning(`异常详情：${row.details || '暂无详细描述'}`)
}

const handleUserAction = (row, action) => {
    if (action === 'ban') {
        ElMessageBox.confirm(`确认封禁用户 ${row.username}?`, '警告', {
            confirmButtonText: '确认封禁',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(() => {
            ElMessage.success(`用户 ${row.username} 已封禁`)
        })
    }
}
</script>

<style scoped>
.security-audit {
    padding: 20px;
}

.audit-section {
    margin-bottom: 24px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

    &:last-child {
        margin-bottom: 0;
    }
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    .title {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
    }
}

.danger-link {
    color: #f56c6c;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
        text-decoration: underline;
    }

    .el-icon {
        margin-left: 4px;
    }
}

.behavior-text {
    cursor: help;
    border-bottom: 1px dotted #999;
}

:deep(.el-table) {
    --el-table-header-bg-color: #f8f9fa;
    --el-table-row-hover-bg-color: #f5f6fa;

    .warning-row {
        background: #fdf6ec;
    }

    .danger-row {
        background: #fef0f0;
    }
}

:deep(.el-card__header) {
    background: #f8f9fa;
    border-bottom: 1px solid #eee;
}
</style>