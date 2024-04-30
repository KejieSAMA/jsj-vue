<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Item">
        <div class="hightLight" @click="changeHight">高亮已学习过的单词</div>
        <div class="tip">点击单词查询单词详细信息</div>
        <div class="box">
            <div v-for="entry in enList" :key="entry.id">
                <div v-if="hight == true && entry.hight == true" class="en-box-true"
                    @click="redirectToWebsite(entry.En)">{{ entry.id }}.{{ entry.En }}</div>
                <div v-else class="en-box" @click="redirectToWebsite(entry.En)">{{ entry.id }}.{{ entry.En }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tip {
    margin: 0 10px;
    width: 200px;
}

.hightLight {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background-color: rgba(225, 50, 50, 0.8);
    color: white;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hightLight:hover {

    background-color: rgba(238, 40, 40, 1);
}

.Item {
    display: flex;
    flex-direction: column;
    margin: 50px 182px;
}

.box {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
}

.en-box {
    width: 120px;
    height: 35px;
    border-radius: 3px;
    background-color: rgb(221, 221, 221);
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.en-box-true {
    width: 120px;
    height: 35px;
    border-radius: 3px;
    background-color: rgb(245, 62, 62, 0.8);
    color: white;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.en-box:hover {
    background-color: rgb(179, 176, 176);
}

.en-box-true:hover {

    background-color: rgb(237, 53, 53);
}
</style>

<script>


import axios from 'axios'

export default {
    data() {
        return {
            param: 'isEnList',
            userToken: '',
            enList: [{}],
            hight: false,
        }
    },
    mounted() {
        this.getCookie()
        this.getInfo()
        this.getM()
    },
    methods: {
        redirectToWebsite(word) {
            window.location.href = `https://fanyi.baidu.com/mtpe-individual/multimodal?query=${word}&lang=en2zh`; // 将链接替换为你要跳转的网页地址
        },
        changeHight() {
            if (this.hight == false) {
                this.hight = true
            } else {
                this.hight = false
            }
        },
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        getIndex(str) {
            for (let i = 0; i < this.enList.length; i++) {
                if (this.enList[i].En == str) {
                    return i
                }
            }
            return -1
        },
        async getInfo() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/enData/getList',
            })
            this.enList = res.data.result
            return res.data.result
        },
        async getM() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/enData/getWordMastered',
                headers: {
                    authorization: this.userToken
                }
            })
            for (let i = 0; i < res.data.message.length; i++) {
                const index = this.getIndex(res.data.message[i].word)
                if (index != -1) {
                    this.enList[index].hight = true
                }
            }
        }
    }
}
</script>