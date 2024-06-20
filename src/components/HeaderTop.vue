<template>
    <div class="item">
        <a class="logoBlock">
        </a>
        <!-- class="navc" -->
        <div>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isHome' }" :to="{
                path: '/'
            }">首页</router-link>
        </div>
        <!-- <div>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isCinemaView' }" :to="{
                path: '/'
            }">训练</router-link>
        </div> -->
        <div>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isCommunity' }" :to="{
                path: '/community'
            }">社区</router-link>
        </div>
        <div>
        </div>
        <div v-if="!userToken">
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isLogin' }" :to="{
                path: '/pc/login'
            }">登录</router-link>
        </div>
        <div v-else class="LoginStats">
            <div>
                <router-link href="" :class="{ 'navc': true, 'red': param === 'isLearnView' }" :to="{
                path: '/learn'
            }">学习</router-link>
            </div>
            <div>
                <router-link href="" :class="{ 'navc': true, 'red': param === 'isEnList' }" :to="{
                path: '/enList'
            }">词库</router-link>
            </div>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isUserHomePage' }" :to="{
                path: '/homepage'
            }">个人</router-link>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isshopPage' }" :to="{
                path: '/shopPage'
            }">商城</router-link>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isshopCartPage' }" :to="{
                path: '/shopCartPage'
            }">购物车</router-link>

            <div class="userItem">
                <div class="userImg"></div>
                <button @click="UserOut" class="navcUserOut">注销</button>
            </div>
        </div>

        <!-- <div v-if="!userToken">
            <router-link href="" class="navcLogin" :to="{
                path: '/pc/login'
            }">Login</router-link>
        </div>
        <div v-else>
            <div class="userItem">
                <div class="userImg"></div>
                <button @click="UserOut" class="navcUserOut">注销</button>
            </div>
        </div> -->
        <!-- <router-link :to="{
            path: '/file/movieInfo',
            query: {
                testInfo: 123456
            }
        }">Home</router-link> -->
    </div>
    <div class="line"></div>
</template>

<style scoped>
.LoginStats {
    display: flex;
}

.line {
    background: rgb(88, 88, 88, 0.5);
    width: 100%;
    height: 10px;
}

.logoBlock {
    margin-left: 300px;
}

.item {
    display: flex;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #d8d8d8;
    background-color: white;
}

.logo {
    height: 95%;
}

.city {
    display: inline-block;
    text-align: center;
    margin: 0px 8px;
    height: 100%;
    font-size: 16px;
    margin-top: 28px;
}

.navc {
    text-decoration: none;
    text-align: center;
    display: inline-block;
    height: 60px;
    line-height: 65px;
    font-size: 18px;
    width: 70px;
    color: #333;
}


.navcLogin {
    text-decoration: none;
    text-align: center;
    display: inline-block;
    height: 80px;
    line-height: 80px;
    font-size: 18px;
    margin-left: 550px;
    width: 64px;
    color: #333;
}

.navcUserOut {
    display: inline-block;
    height: 30px;
    font-size: 18px;
    width: 64px;
    color: red;
    border-radius: 5px;
    border: 0.5px solid black;
}

.userItem {
    display: flex;
    margin-left: 500px;
    align-items: center;
}

.userImg {
    margin: 0px 20px;
    margin-top: 1px;
    /* border: 1px solid hsl(0, 0%, 0%, 50%); */
    width: 80px;
    height: 60px;
}

.navc:hover {
    color: red;
}

.red {
    background-color: #ef4238;
    color: white;
}

.red:hover {
    color: white;
}
</style>

<script>
export default {
    props: ['param'],
    data() {
        return {
            userToken: '',
        }
    },
    mounted() {
        this.getCookie()

    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        UserOut() {
            localStorage.setItem('userToken', '')
            alert('成功注销账号')
            this.$router.push('/')
            setTimeout(function () {
                window.location.reload();
            }, 100);
        }
    }
}
</script>