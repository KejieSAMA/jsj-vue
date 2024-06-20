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
            <div v-if="OrderInfo.length === 0">
                订单为空
            </div>
            <div v-else>
                <div v-for="(item, index) in OrderInfo" :key="index">
                    <!-- 在这里展示订单内容，例如 -->
                    <div class="orderInfo-box">
                        <div>{{ item.Name }}</div>
                        <div>价格:{{ item.Price }}</div>
                        <div>数量:{{ item.num }}</div>
                        <div>总价:{{ parseFloat(item.Price) * item.num }}</div>
                        <div class="addCart-box">
                            <div class="addCart" @click="delOrder(item.userId, item.productId, item.num)">删除</div>
                        </div>
                    </div>
                    <!-- 其他订单信息 -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.addCart-box {
    margin-top: 5px;
    width: 100px;
    color: #fff;
    background-image: linear-gradient(-48deg, #ff6a9c, #fe8574);
    box-shadow: 0 3px 4px 0 #fdb8cc;
}

.addCart {
    width: 100px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    border-radius: 3px;
    cursor: pointer;
}

.orderInfo-box {
    margin-top: 10px;
    padding: 5px;
    border: 0.5px solid gray;
    align-items: flex-start;
    display: flex;
    width: 500px;
    flex-direction: column;
    background: white;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .1);
}

.commoditys-Item {
    width: 1000px;
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
            param: 'isshopCartPage',
            userToken: '',
            OrderInfo: [],
        }
    },
    async mounted() {
        await this.getCookie()
        await this.getUserOrderInfo()
    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getUserOrderInfo() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/commodity/getUserOrderList',
                headers: {
                    authorization: this.userToken
                },
            })
            this.OrderInfo = res.data.result
            console.log(res.data.result)
        },
        async delOrder(userId, productId, num) {
            const result = confirm("是否继续执行删除该订单的操作？");
            if (result) {
                const res = await axios({
                    method: 'post',
                    url: 'http://localhost:8000/commodity/inventoryChanges',
                    data: {
                        "flag": 0,
                        "id": productId,
                        "num": num
                    }
                })
                await axios({
                    method: 'post',
                    url: 'http://localhost:8000/commodity/delUserOrder',
                    data: {
                        "userId": userId,
                        "productId": productId,
                    }
                })
                alert('删除订单成功')
                window.location.reload();
            } else {
                // 用户选择了取消，不执行任何操作
            }
        },
        test(id, productId, num) {
            // 在这里编写删除订单的逻辑
            console.log('要删除的订单ID：', id);
            console.log('要删除的产品ID：', productId);
            console.log('要删除的数量：', num);
            // 这里可以调用后端接口或其他方法来删除订单
        }
    }
}
</script>