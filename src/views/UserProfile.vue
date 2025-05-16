<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { Lock, Smartphone, Mail, Shield, LogOut, User, SmartphoneCharging } from 'lucide-vue-next'

// 用户数据
const user = ref({
    avatar: '@/assets/avatar.png',
    username: '开发者小明',
    mobile: '13800138000',
    email: 'dev@example.com',
    gender: 'male',
    createdAt: '2025-04-15T08:23:45Z',
    lastLogin: {
        time: '2025-04-01T14:30:00Z',
        ip: '192.168.1.100',
        device: 'MacOS Chrome'
    },
    securityLevel: 85,
    twoFactorAuth: true
})

// 安全日志
const securityLogs = ref([
    { id: 1, type: '密码修改', time: '2023-11-15T09:12:34Z', ip: '192.168.1.1', device: 'iPhone Safari' },
    { id: 2, type: '新设备登录', time: '2023-11-20T15:30:00Z', ip: '106.120.180.25', device: 'Windows Chrome' }
])

// 登录设备
const loginDevices = ref([
    { id: 1, os: 'MacOS', browser: 'Chrome 119', ip: '192.168.1.100', current: true },
    { id: 2, os: 'Windows 11', browser: 'Edge 118', ip: '106.120.180.25', lastActive: '2025-04-20T15:30:00Z' }
])

// 表单数据
const form = ref({
    mobile: user.value.mobile,
    email: user.value.email,
    gender: user.value.gender,
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

// 日期格式化
const formatDate = (date) => {
    if (!date) return '无记录'
    return dayjs(date).isValid()
        ? dayjs(date).format('YYYY-MM-DD HH:mm')
        : '无效日期'
}

// 安全等级计算
const securityScore = computed(() => {
    let score = 80
    if (user.value.twoFactorAuth) score += 15
    if (form.value.newPassword.length >= 8) score += 5
    return Math.min(score, 100)
})

// 头像上传
const handleAvatarUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
        user.value.avatar = e.target.result
    }
    reader.readAsDataURL(file)
}

// 提交表单
const updateProfile = () => {
    console.log('更新资料:', form.value)
}

// 登出操作
const handleLogout = () => {
    console.log('用户登出')
}
</script>

<template>
    <div class="profile-container">
        <!-- 账户概览 -->
        <div class="profile-card">
            <div class="profile-header">
                <div class="avatar-section">
                    <div class="avatar-wrapper">
                        <img :src="user.avatar" class="avatar">
                        <input type="file" @change="handleAvatarUpload" accept="image/*">
                        <div class="upload-mask">更换头像</div>
                    </div>
                    <div class="user-info">
                        <h2>{{ user.username }}</h2>
                        <p class="security-level">
                            <Shield class="icon" />
                            安全等级: {{ securityScore }}%
                        <div class="progress-bar">
                            <div class="progress" :style="{ width: securityScore + '%' }"></div>
                        </div>
                        </p>
                    </div>
                </div>
                <div class="last-login">
                    <p>最后登录: {{ formatDate(user.lastLogin.time) }}</p>
                    <p>IP地址: {{ user.lastLogin.ip }}</p>
                    <p>设备信息: {{ user.lastLogin.device }}</p>
                </div>
            </div>
        </div>

        <!-- 账户设置 -->
        <div class="settings-grid">
            <!-- 基本信息 -->
            <div class="settings-card info-card">
                <div class="card-header">
                    <User class="header-icon" />
                    <h3>基本信息设置</h3>
                    <div class="decorative-line"></div>
                </div>

                <div class="form-container">
                    <!-- 手机号输入 -->
                    <div class="form-item">
                        <div class="input-group">
                            <Smartphone class="input-icon" />
                            <div class="input-wrapper">
                                <label>手机号码</label>
                                <input type="tel" v-model="form.mobile" placeholder="请输入11位手机号" class="modern-input">
                            </div>
                        </div>
                        <span class="input-hint">仅用于安全验证，不会对外公开</span>
                    </div>

                    <!-- 邮箱输入 -->
                    <div class="form-item">
                        <div class="input-group">
                            <Mail class="input-icon" />
                            <div class="input-wrapper">
                                <label>电子邮箱</label>
                                <input type="email" v-model="form.email" placeholder="name@example.com"
                                    class="modern-input">
                            </div>
                        </div>
                        <span class="input-hint">重要通知将发送至该邮箱</span>
                    </div>

                    <!-- 性别选择 -->
                    <div class="form-item">
                        <div class="input-group">
                            <User class="input-icon" />
                            <div class="input-wrapper">
                                <label>性别</label>
                                <div class="gender-select">
                                    <button :class="{ active: form.gender === 'male' }" @click="form.gender = 'male'">
                                        <span class="gender-icon">♂</span> 男
                                    </button>
                                    <button :class="{ active: form.gender === 'female' }"
                                        @click="form.gender = 'female'">
                                        <span class="gender-icon">♀</span> 女
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 保存按钮 -->
                    <button class="save-btn gradient-btn">
                        <span>保存更改</span>
                        <div class="hover-effect"></div>
                    </button>
                </div>
            </div>

            <!-- 安全设置 -->
            <div class="settings-card">
                <h3>
                    <Lock class="icon" /> 安全设置
                </h3>
                <div class="security-item">
                    <div class="security-meta">
                        <h4>两步验证</h4>
                        <span :class="user.twoFactorAuth ? 'enabled' : 'disabled'">
                            {{ user.twoFactorAuth ? '已启用' : '未启用' }}
                        </span>
                    </div>
                    <button class="toggle-btn">
                        {{ user.twoFactorAuth ? '关闭' : '启用' }}
                    </button>
                </div>

                <div class="security-item">
                    <h4>登录设备管理</h4>
                    <div v-for="device in loginDevices" :key="device.id" class="device-item">
                        <SmartphoneCharging class="device-icon" />
                        <div class="device-info">
                            <p>{{ device.os }} · {{ device.browser }}</p>
                            <small>{{ device.ip }} · {{ device.current ? '当前设备' : formatDate(device.lastActive)
                                }}</small>
                        </div>
                        <button v-if="!device.current" class="revoke-btn">注销</button>
                    </div>
                </div>
            </div>

            <!-- 安全日志 -->
            <div class="settings-card">
                <h3>
                    <Shield class="icon" /> 安全日志
                </h3>
                <div v-for="log in securityLogs" :key="log.id" class="log-item">
                    <div class="log-type">{{ log.type }}</div>
                    <div class="log-details">
                        <p>{{ formatDate(log.time) }}</p>
                        <p>{{ log.ip }} · {{ log.device }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.profile-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 2rem;
    margin-bottom: 2rem;
}

.profile-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.avatar-wrapper {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #2175f3;

    input[type="file"] {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
}

.upload-mask {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    padding: 8px;
    font-size: 0.9rem;
    opacity: 0;
    transition: opacity 0.3s;
}

.avatar-wrapper:hover .upload-mask {
    opacity: 1;
}

.settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
}

.settings-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

    h3 {
        margin: 0 0 1.5rem;
        display: flex;
        align-items: center;

        .icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
        }
    }
}

.security-item {
    padding: 1rem 0;
    border-bottom: 1px solid #eee;

    &:last-child {
        border-bottom: none;
    }
}

.device-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;

    .device-icon {
        flex-shrink: 0;
        width: 32px;
        height: 32px;
        color: #2175f3;
    }
}

.revoke-btn {
    margin-left: auto;
    padding: 4px 12px;
    background: #ff4d4f10;
    color: #ff4d4f;
    border: 1px solid #ff4d4f30;
    border-radius: 4px;
}

.security-level {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;

    .progress-bar {
        flex: 1;
        height: 6px;
        background: #eee;
        border-radius: 3px;

        .progress {
            height: 100%;
            background: #2175f3;
            border-radius: 3px;
            transition: width 0.3s;
        }
    }
}

.log-item {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid #eee;

    .log-type {
        width: 100px;
        color: #2175f3;
        font-weight: 500;
    }
}

.save-btn {
    background: #2175f3;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 8px;
    margin-top: 1rem;
}

/* 卡片容器 */
.info-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
  border: 1px solid rgba(33, 117, 243, 0.15);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(33, 117, 243, 0.1);
}

/* 卡片头部 */
.card-header {
  padding: 1.5rem;
  background: rgba(33, 117, 243, 0.05);
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e8f0fe;
}

.header-icon {
  width: 28px;
  height: 28px;
  color: #2175f3;
  flex-shrink: 0;
}

.decorative-line {
  flex: 1;
  height: 2px;
  background: linear-gradient(90deg, #2175f330 0%, transparent 100%);
}

/* 表单容器 */
.form-container {
  padding: 2rem;
}

/* 输入项 */
.form-item {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.input-icon {
  width: 24px;
  height: 24px;
  color: #2175f3;
  flex-shrink: 0;
}

.input-wrapper {
  flex: 1;
}

label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

/* 现代输入框 */
.modern-input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #e0e7ff;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9ff;
}

.modern-input:focus {
  border-color: #2175f3;
  background: white;
  box-shadow: 0 4px 12px rgba(33, 117, 243, 0.15);
}

.input-hint {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #888;
}

/* 性别选择 */
.gender-select {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.gender-select button {
  flex: 1;
  padding: 0.8rem 1rem;
  border: 2px solid #e0e7ff;
  border-radius: 8px;
  background: #f8f9ff;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.gender-select button.active {
  border-color: #2175f3;
  background: rgba(33, 117, 243, 0.05);
  color: #2175f3;
}

.gender-icon {
  font-size: 1.2rem;
  line-height: 1;
}

/* 渐变按钮 */
.gradient-btn {
  position: relative;
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #2175f3 0%, #1a5dc7 100%);
  color: white;
  font-weight: 500;
  overflow: hidden;
  transition: all 0.3s ease;
}

.hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: left 0.5s;
}

.gradient-btn:hover {
  box-shadow: 0 4px 12px rgba(33, 117, 243, 0.3);
}

.gradient-btn:hover .hover-effect {
  left: 100%;
}

</style>