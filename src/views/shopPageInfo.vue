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
        <div>
            <div class="address">腾讯 > 星瞳爱你哟 > {{ CommunityInfo.Name }}</div>
            <div class="item-box">
                <div class="item-img"></div>
                <div class="item-info">
                    <div class="c-name">{{ CommunityInfo.Name }}</div>
                    <div class="c-info">{{ CommunityInfo.Info }}</div>
                    <div class="c-price">售价: ￥{{ CommunityInfo.Price }}</div>
                    <div class="c-ip">
                        <div class="c-ip-box">IP:</div>
                        <div>{{ CommunityInfo.IP }}</div>
                    </div>
                    <div class="c-brand">
                        <div class="c-brand-box">品牌方:</div>
                        <div>{{ CommunityInfo.brand }}</div>
                    </div>
                    <div class="c-brand">
                        <div class="c-brand-box">库存:</div>
                        <div>{{ CommunityInfo.inventory - CommunityInfo.soldQuantity }}</div>
                    </div>
                    <div class="c-brand">
                        <div class="c-brand-box">数量:</div>
                        <div class="buy-box">
                            <button class="buy-button-box" @click="reduceQuantity">-</button>
                            <div>{{ quantity }}</div>
                            <button class="buy-button-box" @click="addQuantity">+</button>
                        </div>
                    </div>
                    <div class="addCart-box">
                        <div class="addCart" @click="addCart">加入购物车</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.addCart-box {
    margin-top: 50px;
    width: 240px;
    color: #fff;
    background-image: linear-gradient(-48deg, #ff6a9c, #fe8574);
    box-shadow: 0 3px 4px 0 #fdb8cc;
}

.addCart {
    width: 240px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 50px;
    border-radius: 3px;
    cursor: pointer;
}

.buy-button-box {
    font-size: 16px;
}

.buy-box {
    align-items: center;
    border: 1px solid black;
    padding: 5px;
    background: white;
    width: 150px;
    justify-content: space-around;
    display: flex;
}

.c-brand-box {
    font-size: 16px;
    float: left;
    width: 60px;
    margin-right: 10px;
    color: #999;
}

.c-brand {
    align-items: center;
    padding-left: 17px;
    margin-bottom: 16px;
    height: 14px;
    display: flex;
}

.c-ip-box {
    font-size: 16px;
    float: left;
    width: 60px;
    margin-right: 10px;
    color: #999;
}

.c-ip {
    align-items: center;
    padding-left: 17px;
    margin-bottom: 16px;
    height: 14px;
    display: flex;
}

.c-price {
    display: flex;
    align-items: center;
    color: red;
    padding-left: 17px;
    margin-bottom: 16px;
    width: 360px;
    background: #fff7f9;
    padding-top: 0;
    height: 41px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .1);
}

.c-info {
    line-height: 19px;
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
}

.c-name {
    margin-top: 9px;
    line-height: 32px;
    font-size: 22px;
    margin-bottom: 7px;
    font-weight: 560;
}

.item-info {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .1);
    padding-left: 20px;
    background: white;
    width: 600px;
    margin-left: 50px;
    text-align: left;
}

.item-box {
    display: flex;
}

.item-img {
    box-shadow: 2px 4px 8px rgba(0, 0, 0, .1);
    margin-left: 150px;
    width: 400px;
    height: 400px;
    background: url('../assets/cImg.png');
    background-size: contain;
}

.address {
    color: gray;
    font-size: 12px;
    margin-left: 150px;
    margin-bottom: 20px;
    text-align: left
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
            CommunityInfo: {},
            id: this.$route.query.id,
            quantity: 0
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
                url: 'http://localhost:8000/commodity/getCommodityId',
                data: {
                    id: this.id
                }
            })
            this.CommunityInfo = res.data.result[0]
            console.log(res.data.result[0])
        },
        reduceQuantity() {
            if (this.quantity >= 1) {
                this.quantity--
            } else {
                alert('不能更少了!');
            }
        },
        addQuantity() {
            this.quantity++
        },
        async addCart() {
            if (this.quantity == 0) {
                alert("请先选择数量")
            } else {
                var result = confirm("是否继续执行加入购物车操作？");
                if (result) {
                    const res = await axios({
                        method: 'post',
                        url: 'http://localhost:8000/commodity/inventoryChanges',
                        data: {
                            "flag": 1,
                            "id": this.id,
                            "num": this.quantity
                        }
                    })
                    await axios({
                        method: 'post',
                        url: 'http://localhost:8000/commodity/addOrder',
                        headers: {
                            authorization: this.userToken
                        },
                        data: {
                            "productId": this.id,
                            "Name": this.CommunityInfo.Name,
                            "Price": this.CommunityInfo.Price,
                            "num": this.quantity
                        }
                    })
                    alert('加入购物车成功')
                    window.location.reload();
                } else {
                    // 用户选择了取消，不执行任何操作
                }
            }
        }
    }
}
</script>