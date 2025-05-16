<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
import anIcon from "@/icon/anIcon.vue"
import pushIcon from "@/icon/push.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Home-item">
        <div class="announcement">
            <anIcon />
            <div class="anInfo">
                这是一个公告示例
            </div>
        </div>
        <!--下方实现修改个人信息-->
        <div class="userInfoBox">
            <div class="form-container">
                <div class="avatar-upload">
                    <div class="avatar-preview" :style="{ backgroundImage: `url(${tempAvatar})` }">
                        <input type="file" @change="handleAvatarChange" accept="image/*" class="avatar-input">
                        <span class="upload-tip">点击更换头像</span>
                    </div>
                </div>

                <div class="form-group">
                    <label>手机号码</label>
                    <input type="tel" v-model="formData.phone" maxlength="11" placeholder="请输入手机号码">
                    <div class="error-tip" v-if="!validPhone">请输入有效的手机号</div>
                </div>

                <div class="form-group">
                    <label>真实姓名</label>
                    <input type="text" v-model="formData.realName" placeholder="请输入真实姓名">
                </div>

                <div class="form-group">
                    <label>性别</label>
                    <select v-model="formData.gender">
                        <option value="male">男</option>
                        <option value="female">女</option>
                        <option value="secret">保密</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>电子邮箱</label>
                    <input type="email" v-model="formData.email" placeholder="请输入邮箱地址">
                    <div class="error-tip" v-if="!validEmail">邮箱格式不正确</div>
                </div>

                <div class="form-group">
                    <label>修改密码</label>
                    <input type="password" v-model="formData.newPassword" placeholder="新密码（留空不修改）">
                    <input type="password" v-model="formData.confirmPassword" placeholder="确认新密码">
                    <div class="error-tip" v-if="formData.newPassword !== formData.confirmPassword">两次密码输入不一致</div>
                </div>

                <button class="submit-btn" @click="handleSubmit">保存修改</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Home-item {
    flex-direction: column;
    display: flex;
    width: 100%;
    background: rgb(173, 216, 230, 0.25);
    height: 1000px;
}
.announcement {
    width: 500px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin: 20px 300px;
    height: 80px;
    border: 2px solid lightblue;
    border-radius: 10px;
    background: white;
}
.anInfo {
    margin-left: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    border-left: 2px solid lightblue;
    height: 100%;
}

.userInfoBox {
    width: 800px;
    margin: 30px auto;
    padding: 30px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.avatar-upload {
    grid-column: 1 / -1;
    text-align: center;
}

.avatar-preview {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #f0f0f0 no-repeat center/cover;
    margin: 0 auto 20px;
    position: relative;
    cursor: pointer;
    border: 2px solid lightblue;
}

.avatar-input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.upload-tip {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #666;
    font-size: 12px;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    color: #2175f3;
    font-weight: 500;
    margin-bottom: 8px;
}

input, select {
    padding: 12px;
    border: 1px solid #d3e1f6;
    border-radius: 6px;
    transition: all 0.3s;
}

input:focus, select:focus {
    border-color: #2175f3;
    box-shadow: 0 2px 8px rgba(33, 117, 243, 0.15);
    outline: none;
}

.error-tip {
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 5px;
    height: 18px;
}

.submit-btn {
    grid-column: 1 / -1;
    background: #2175f3;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

.submit-btn:hover {
    background: #1a5dc7;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 117, 243, 0.3);
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isEditProfile',
            userToken: '',
            userInfo: "",
            UserCount: 0,
            UserPosts: [],
            tempAvatar: require('@/assets/avatar.png'),
            formData: {
                phone: '13800138000',
                realName: '张三',
                gender: 'male',
                email: 'user@example.com',
                newPassword: '',
                confirmPassword: ''
            }
        }
    },
    async mounted() {
        await this.getUserInfo()
    },
    computed: {
        validPhone() {
            return /^1[3-9]\d{9}$/.test(this.formData.phone)
        },
        validEmail() {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)
        }
    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getUserInfo() {
            this.getCookie()
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/users/tokenGetUserInfo',
                headers: {
                    authorization: this.userToken
                },
            })
            this.userInfo = res.data
            this.userInfo.createdAt = (this.userInfo.createdAt).substring(0, 11)
            console.log(this.userInfo)
            const UserCount = await axios({
                method: 'post',
                url: 'http://localhost:8000/learn/userLearned',
                data: {
                    userId: this.userInfo.id
                }
            })
            this.UserCount = UserCount.data.result.count
        },
        handleAvatarChange(e) {
            const file = e.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    this.tempAvatar = e.target.result
                }
                reader.readAsDataURL(file)
            }
        },
        handleSubmit() {
            if (!this.validPhone || !this.validEmail) return
            if (this.formData.newPassword && this.formData.newPassword !== this.formData.confirmPassword) return
            
            // 此处可添加提交逻辑
            console.log('提交数据:', JSON.parse(JSON.stringify(this.formData)))
            alert('修改已保存（模拟）')
        }
    }
}
</script>