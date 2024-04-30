<script setup>

import HeaderTop from "@/components/HeaderTop.vue";

import backIcon from "@/icon/back.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Item">
        <div class="item-top">
            <div v-if="to == 'en'" @click="changeTo" class="changeBox">中=>英</div>
            <div v-else @click="changeTo" class="changeBox">英=>中</div>
            <div @click="fanyi" class="changeBox">立即翻译</div>
        </div>

        <div class="item-list">
            当前由传统机器翻译 · 通用领域模型为您翻译
        </div>
        <div class="item-bottom">
            <div>
                <textarea type="text" v-model="inputValue" placeholder="请输入要查询的单词(或者进行长句翻译"
                    class="input-box"></textarea>
            </div>
            <div class="getInfo">
                {{ test }}
            </div>
        </div>
        <div class="back">
            <backIcon />
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isLearnView' }" :to="{
        path: '/learn'
    }">返回</router-link>
        </div>
        <!-- <div class="youdao">{{ youdao }}</div> -->
    </div>

</template>

<style scoped>
.back {
    margin: 0px auto;
    width: 160px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
}

.item-list {
    text-align: left;
    margin: 6px 4px;
    width: 330px;
}

.item-top {
    display: flex;
    flex-direction: row;
}

.item-bottom {
    display: flex;
    flex-direction: row;
}

.changeBox {
    margin: 0px 10px;
    width: 100px;
    border-radius: 5px;
    padding: 6px;
    border: 1px solid black;
}

.changeBox:hover {
    background: rgb(188, 188, 188);
}

.Item {
    display: flex;
    margin: 50px 152px;
    flex-direction: column;
}

.getInfo {
    display: flex;
    width: 500px;
    padding: 10px;
    height: 160px;
    border-radius: 0px 10px 10px 0px;
    border: 1px solid rgba(200, 200, 200, 0.6);
    background: rgba(200, 200, 200, 0.6);
    font-size: 20px;
    font-weight: bold;
}

.input-box {
    resize: none;
    display: flex;
    width: 500px;
    height: 160px;
    padding: 10px;
    border: 1px solid rgb(169, 168, 168);
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
    font-weight: bold;
}

.youdao {
    width: 500px;
    height: 160px;
    padding: 10px;
    border-bottom: 1px solid rgb(169, 168, 168);
    border-radius: 10px 10px 10px 10px;
    font-size: 20px;
    font-weight: bold;
}



.input-box:focus {
    outline: 1px solid #4395ff;
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isLearnView',
            userToken: '',
            test: '',
            inputValue: '',
            to: 'en',
            youdao: ''
        }
    },
    mounted() {
    },
    methods: {
        isWord(text) {
            const pattern = /^[a-zA-Z'-]+$/;
            return text.match(pattern) !== null;
        },
        async fanyi() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/learn/translate',
                data: {
                    "q": this.inputValue,
                    "to": this.to
                }
            })
            this.test = res.data.trans_result[0].dst
            /* console.log(res) */
            /* if (this.isWord(this.inputValue)) {
                const resYoudao = await axios({
                    method: 'get',
                    url: `https://dict.youdao.com/suggest?q=${this.inputValue}&num=1&doctype=json`
                })
                console.log(resYoudao)
            } */
        },
        changeTo() {
            if (this.to == 'en') {
                alert('当前英文翻译中文')
                this.to = 'zh'
            } else {
                alert('当前中文翻译英文')
                this.to = 'en'
            }
        }
    }
}
</script>