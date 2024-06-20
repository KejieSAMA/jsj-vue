<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
import anIcon from "@/icon/anIcon.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Home-item">
        <div class="announcement">
            <anIcon />
            <div class="anInfo">
                简易的商城系统......
            </div>
        </div>
        <div class="commoditys-Item">
            <div v-for="entry in CommunityInfo" :key="entry.id">
                <router-link :class="{ 'navc': true, 'red': param === 'isshopPage' }" :to="{
        path: '/shopPageInfo',
        query: { id: entry.id }
    }">

                    <div class="item-box">
                        <div class="item-img"></div>
                        <div class="item-name">{{ entry.Name }}</div>
                        <div class="item-price">￥{{ entry.Price }}</div>
                    </div>
                </router-link>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div class="item-name">bilibiliGoods 星星向龙系列 2233 2024拜年纪纪念套票</div>
                <div class="item-price">￥29</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
            <div class="item-box">
                <div class="item-img"></div>
                <div>商品信息</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navc {
    text-decoration: none; /* 取消链接文本的下划线 */
    color: black;
}
.item-price {
    color: red;
    font-size: 17px;
    text-align: left;
    margin: 7px;
}

.item-name {
    font-size: 16px;
    text-align: left;
    margin: 7px;
}

.item-img {
    width: 100%;
    height: 300px;
    background: url('../assets/cImg.png');
    background-size: contain;
}

.item-box {
    width: 270px;
    height: 360px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    background: white;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .1);
}

.commoditys-Item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.anInfo {
    margin-left: 10px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    border-left: 2px solid lightblue;
    height: 100%;
}

.announcement {
    width: 500px;
    padding-left: 10px;
    display: flex;
    align-items: center;
    margin: 20px 300px;
    height: 50px;
    border: 2px solid lightblue;
    border-radius: 10px;
    background: white;
}

.Home-item {
    flex-direction: column;
    display: flex;
    width: 100%;
    background: rgb(173, 216, 230, 0.25);
    height: 1000px;
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isshopPage',
            userToken: '',
            CommunityInfo: [],
        }
    },
    async mounted() {
        await this.getCookie()
        await this.getCommInfo()
    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getCommInfo() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/commodity/getCommodityList',
            })
            this.CommunityInfo = res.data.result
            console.log(res.data.result)
        }
    }
}
</script>