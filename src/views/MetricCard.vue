<template>
    <el-card class="metric-card">
      <div class="content">
        <div class="icon" :style="{ backgroundColor: color }">
          <component :is="icon" />
        </div>
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="value">
            {{ value }}<span v-if="suffix">{{ suffix }}</span>
          </div>
          <div v-if="trend" class="trend" :style="{ color: trendColor }">
            {{ trend }}
          </div>
        </div>
      </div>
    </el-card>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    title: String,
    value: [Number, String],
    icon: Object,
    color: String,
    trend: String,
    suffix: String
  })
  
  const trendColor = computed(() => 
    props.trend?.startsWith('+') ? '#4caf50' : '#ff4d4f'
  )
  </script>
  
  <style scoped>
  .metric-card {
    :deep(.el-card__body) {
      padding: 20px;
    }
  
    .content {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  
    .icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      
      svg {
        width: 24px;
        height: 24px;
      }
    }
  
    .info {
      flex: 1;
      
      .title {
        color: #666;
        font-size: 14px;
        margin-bottom: 4px;
      }
      
      .value {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        
        span {
          font-size: 14px;
          margin-left: 4px;
        }
      }
      
      .trend {
        font-size: 12px;
        margin-top: 4px;
      }
    }
  }
  </style>