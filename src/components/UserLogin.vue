<script setup>

import accoutIcon from '../icon/account.vue'
import password from '../icon/password.vue'
import LoginAccout from '../icon/Login.vue'

import backIcon from "@/icon/back.vue"
</script>

<template>
    <div class="user-item">
        <form action="" class="login-view">
            <div class="reg-title">
                <div style="width: 100px;">Accout Login</div>
                <LoginAccout />
            </div>
            <div>
                <div class="tip">Accout*(必填)</div>
                <div class="fillBox">
                    <accoutIcon />
                    <input type="text" v-model="user_name" name="usename" placeholder="请输入账号名" class="input-item">
                </div>
            </div>
            <div>
                <div class="tip">password*(必填)</div>
                <div class="fillBox">
                    <password />
                    <input type="password" v-model="user_pwd" name="pwd" placeholder="请输入密码" class="input-item">
                </div>
            </div>
            <button @click="UserLogin" class="login-button" type='button'>确定登录</button>
        </form>
        <a href="" @click="goRegisterView" class="regOrLogin">没账号?!点击注册</a>
        <div class="back">
            <backIcon />
            <router-link style="text-decoration: none;" href="" :class="{ 'navc': true, 'red': param === 'isLearnView' }" :to="{
                        path: '/'
                    }">返回主页</router-link>
        </div>
    </div>
</template>
<style scoped>

.back{
    padding: 5px 0px;
    margin: 0px auto;
    width: 160px;
    display: flex;
    justify-content: center;
}
.regOrLogin {
    text-decoration: none;
}

.reg-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 28px;
}

.fillBox {
    display: flex;
    align-items: center
}

.tip {
    padding-left: 18px;
    font-size: 12px;
}

.user-item>a {
    padding: 10px;
}

.login-button {
    margin-top: 20px;
    width: 220px;
    height: 36px;
    background-color: #df2d2d;
    color: white;
    border-radius: 14px;
    border: none;
}

.input-item {
    background: none;
    width: 200px;
    padding: 5px;
    border: none;
    border-bottom: 1.5px solid rgba(34, 34, 34, 0.7);
}

.input-item:focus {
    outline: none;
}

.login-view {
    margin: 50px;
}

.login-view>div {
    line-height: 28px;
    margin: 10px 0px;
    text-align: left;
}

.user-item {
    background: linear-gradient(30deg, rgb(255, 182, 193, 0.6), #87CEFA);
    border-radius: 20px 20px 10px 10px;
    margin: 100px auto;
}
</style>
<script>

import axios from 'axios'

export default {
    data() {
        return {
            /* username: "xiaojie99",
            user_pwd: "123456", */
            user_name: "",
            user_pwd: ""
        }
    },

    created() {
        this.userState()
    },
    methods: {
        userState() {
            // eslint-disable-next-line no-constant-condition
            if (localStorage.getItem('userToken')) {
                alert('您已登录')
                this.$router.push('/')
                setTimeout(function () {
                    window.location.reload();
                }, 100);
            }
        },
        goRegisterView() {
            this.$router.push('/pc/register')
        },
        async UserLogin() {
            await axios({
                method: 'post',
                url: 'http://localhost:8000/users/login',
                data: {
                    user_name: this.user_name,
                    password: this.user_pwd
                }
            }).then((res) => {
                if (res.code == 400) return;

                if (res.data.message == "用户登录成功") {
                    alert('恭喜登录成功!')
                    localStorage.setItem('userToken', res.data.result.token)
                    this.$router.push('/')
                    setTimeout(function () {
                        window.location.reload();
                    }, 100);
                } else {
                    alert(res.data.message)
                    localStorage.setItem('userToken', '')
                    window.location.reload();
                }
            })
        }
    }
}
</script>