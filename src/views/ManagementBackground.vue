<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { ChartPie, Notebook, Users, User2, ShieldCheck, Database } from 'lucide-vue-next'

// 导航菜单配置
const menuItems = ref([
  { id: 1, name: '管理后台首页', icon: ChartPie, path: '/management' },
  { id: 2, name: '论坛主题管理', icon: Notebook, path: '/management/topics' },
  { id: 3, name: '平台用户管理', icon: Users, path:  '/management/users' },
  { id: 4, name: '数据面板管理', icon: Database, path: '/management/DataPanel' },
  { id: 5, name: '安全审计管理', icon: ShieldCheck, path: '/management/security' },
  { id: 6, name: '个人中心', icon: User2, path: '/management/user-profile' }
])

const activeMenu = ref(1)

const route = useRoute()
</script>

<template>
  <div class="admin-container">
    <div class="sidebar">
      <nav>
        <ul>
          <li 
            v-for="item in menuItems" 
            :key="item.id"
            :class="{ active: route.path === item.path }"
            @click="$router.push(item.path)"
          >
            <component :is="item.icon" class="menu-icon" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </nav>
    </div>
    
    <div class="content-area">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.admin-container {
  display: flex;
  min-height: 100vh;
  background: #f5f6fa;
}

.sidebar {
  width: 240px;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px 0;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.logo-area {
  padding: 0 20px 20px;
  border-bottom: 1px solid #34495e;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  padding: 14px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

nav li:hover {
  background: #34495e;
}

nav li.active {
  background: #2175f3;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.content-area {
  flex: 1;
  padding: 24px;
}

.content-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.search-bar {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

.search-bar input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-btn {
  background: #2175f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.topic-list {
  border: 1px solid #eee;
  border-radius: 6px;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.topic-title {
  font-weight: 500;
  color: #2c3e50;
}

.topic-author,
.topic-time {
  color: #7f8c8d;
  font-size: 0.9em;
}

.topic-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.edit-btn {
  background: #4CAF50;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
}
</style>