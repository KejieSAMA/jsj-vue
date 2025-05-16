<template>
    <div class="data-dashboard">
        <!-- 数据筛选工具栏 -->
        <div class="toolbar">
            <el-radio-group v-model="timeRange" @change="handleTimeChange">
                <el-radio-button label="7d">最近7天</el-radio-button>
                <el-radio-button label="30d">最近30天</el-radio-button>
                <el-radio-button label="90d">最近90天</el-radio-button>
            </el-radio-group>

            <el-date-picker v-model="customDateRange" type="daterange" range-separator="-" start-placeholder="开始日期"
                end-placeholder="结束日期" @change="handleCustomDateChange" />
        </div>

        <!-- 关键指标卡片 -->
        <div class="metric-cards">
            <el-row :gutter="20">
                <el-col :span="6">
                    <metric-card title="总访问量" :value="totalVisits" icon="User" color="#2175f3" trend="12%" />
                </el-col>
                <el-col :span="6">
                    <metric-card title="独立访客" :value="uniqueVisitors" icon="UserFilled" color="#4caf50" trend="+5.2%" />
                </el-col>
                <el-col :span="6">
                    <metric-card title="平均停留时间" :value="avgDuration" icon="Clock" color="#ff9800" suffix="秒" />
                </el-col>
                <el-col :span="6">
                    <metric-card title="跳出率" :value="bounceRate" icon="CloseBold" color="#ff4d4f" suffix="%" />
                </el-col>
            </el-row>
        </div>

        <!-- 数据可视化区域 -->
        <div class="visualization">
            <el-row :gutter="20">
                <!-- 访问趋势图表 -->
                <el-col :span="16">
                    <div class="chart-container">
                        <h3>访问趋势</h3>
                        <div ref="trendChart" class="chart"></div>
                    </div>
                </el-col>

                <!-- 设备分布图表 -->
                <el-col :span="8">
                    <div class="chart-container">
                        <h3>设备分布</h3>
                        <div ref="deviceChart" class="chart"></div>
                    </div>
                </el-col>
            </el-row>

            <!-- 地域分布图表 -->
            <div class="chart-container">
                <h3>地域分布 Top10</h3>
                <div ref="geoChart" class="chart"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import * as echarts from 'echarts'
import { Clock, User, CloseBold } from '@element-plus/icons-vue'
import MetricCard from '@/views/MetricCard.vue'
const chartInstances = {
  trend: null,
  device: null,
  geo: null
}
// 模拟数据生成
const generateMockData = () => ({
    // 访问趋势数据（最近30天）
    trend: Array.from({ length: 30 }, (_, i) => ({
        date: dayjs().subtract(30 - i, 'day').format('MM-DD'),
        visits: Math.floor(Math.random() * 1000 + 500),
        visitors: Math.floor(Math.random() * 800 + 300),
        duration: Math.floor(Math.random() * 300 + 60), // 添加停留时间
        bounced: Math.random() > 0.8 // 添加跳出率标记
    })),

    // 设备分布
    devices: [
        { name: '桌面端', value: 65 },
        { name: '移动端', value: 30 },
        { name: '平板', value: 5 }
    ],

    // 地域分布
    geo: [
        { name: '北京', value: 1234 },
        { name: '上海', value: 987 },
        { name: '广东', value: 876 },
        { name: '浙江', value: 765 },
        { name: '江苏', value: 654 },
        { name: '四川', value: 543 },
        { name: '湖北', value: 432 },
        { name: '福建', value: 321 },
        { name: '山东', value: 210 },
        { name: '其他', value: 987 }
    ]
})

// 组件状态
const timeRange = ref('30d')
const customDateRange = ref([])
const mockData = ref(generateMockData())

// 计算属性
const totalVisits = computed(() =>
    mockData.value.trend.reduce((sum, item) => sum + item.visits, 0)
)

const uniqueVisitors = computed(() =>
    Math.max(...mockData.value.trend.map(item => item.visitors))
)

const avgDuration = computed(() =>
    (mockData.value.trend.reduce((sum, item) => sum + item.duration, 0) / 30).toFixed(1)
)

const bounceRate = computed(() =>
    ((mockData.value.trend.filter(item => item.bounced).length / 30) * 100).toFixed(1)
)

// ECharts实例
let trendChart = null
let deviceChart = null
let geoChart = null

// 初始化图表
const initCharts = () => {
  try {
    // 清理旧实例
    disposeCharts()

    // 初始化新实例
    chartInstances.trend = echarts.init(trendChartRef.value)
    chartInstances.device = echarts.init(deviceChartRef.value)
    chartInstances.geo = echarts.init(geoChartRef.value)

    // 设置图表配置（保持原有配置）
    chartInstances.trend.setOption({/*...*/})
    chartInstances.device.setOption({/*...*/})
    chartInstances.geo.setOption({/*...*/})
  } catch (error) {
    console.error('图表初始化失败:', error)
  }
}

// 安全的销毁方法
const disposeCharts = () => {
  Object.values(chartInstances).forEach(instance => {
    try {
      instance?.dispose?.()
    } catch (e) {
      console.warn('图表销毁异常:', e)
    }
  })
  chartInstances.trend = null
  chartInstances.device = null
  chartInstances.geo = null
}

// 修改生命周期钩子
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  disposeCharts()
})

// 优化resize处理
const handleResize = () => {
  Object.values(chartInstances).forEach(instance => {
    try {
      instance?.resize?.()
    } catch (e) {
      console.warn('图表resize失败:', e)
    }
  })
}

// 生命周期
onMounted(() => {
    initCharts()
    window.addEventListener('resize', handleResize)
})


// 时间范围变化处理
const handleTimeChange = (range) => {
    // 实际应调用API获取数据
    mockData.value = generateMockData()
    initCharts()
}
</script>

<style scoped>
.data-dashboard {
    padding: 24px;
    background: #fff;
    border-radius: 8px;
}

.toolbar {
    margin-bottom: 24px;
    display: flex;
    gap: 16px;
}

.chart-container {
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);

    h3 {
        margin: 0 0 16px;
        color: #333;
    }

    .chart {
        height: 400px;
    }
}

.metric-cards {
    margin-bottom: 24px;
}

.chart-container {
  position: relative;
  width: 100%;
  min-height: 400px; /* 保障最小高度 */
}

.chart {
  width: 100% !important; /* 强制宽度 */
  height: 400px !important; /* 强制高度 */
}
</style>