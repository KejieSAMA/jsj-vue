<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
import anIcon from "@/icon/anIcon.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Community-item">
        <div class="announcement">
            <anIcon />
            <div class="anInfo">
                欢迎加入 "校英智学"平台 平台将不定期开展各种活动
            </div>
        </div>
        <div class="posts-box">
            <div class="Post-name-box">
                <div v-if="PostInfo.postClass == '讨论'">
                    <div class="post-class-id1">讨论</div>
                </div>
                <div v-if="PostInfo.postClass == '资源'">
                    <div class="post-class-id2">资源</div>
                </div>
                <div v-if="PostInfo.postClass == '分享'">
                    <div class="post-class-id3">分享</div>
                </div>
                <div v-if="PostInfo.postClass == '求助'">
                    <div class="post-class-id4">求助</div>
                </div>
                <div class="Post-name">
                    {{ PostInfo.postName }}
                </div>
            </div>
            <div class="post-class1">主题信息</div>
            <div class="line"></div>
            <div class="PostInfo">
                <div>
                    {{ PostInfo.postContent }}
                </div>
            </div>
            <div class="post-class1">回复栏</div>
            <div class="line"></div>
        </div>
    </div>
</template>

<style scoped>
.PostInfo {
    
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    min-height: 300px;
    text-align: start;
    text-indent: 2em
}

.Post-name-box {
    display: flex;
    align-items: center;
}

.Post-name {
    margin-left: 20px;
    font-size: 28px;
}

.posts-box {
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.2);
    background: white;
    width: 950px;
    height: 100%;
    padding: 10px;
    margin-left: 250px;
    display: flex;
    flex-direction: column;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 2px solid lightblue;
    background: url("../assets/userAvatar.png");
    background-size: 100%;
}

.post-class1 {
    color: red;
    font-size: 12px;
    font-weight: bold;
    padding: 0px 5px;
    width: 300px;
    text-align: start;
}


.line {
    border-radius: 2px;
    background: rgba(41, 39, 39, 0.5);
    width: 100%;
    height: 4px;
    margin: 5px 0px;
}

.anInfo {
    margin-left: 20px;
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
    height: 80px;
    border: 2px solid lightblue;
    border-radius: 10px;
    background: white;
}

.Community-item {
    flex-direction: column;
    display: flex;
    width: 100%;
    background: rgb(173, 216, 230, 0.25);
    height: 1000px;
}


.post-class-id1 {
    border-radius: 4px;
    margin-left: 10px;
    padding-top: 2px;
    width: 40px;
    font-size: 16px;
    height: 26px;
    color: white;
    background: #2175f3;
    border-color: #0c5cd5;
}

.post-class-id2 {
    border-radius: 4px;
    margin-left: 10px;
    padding-top: 2px;
    width: 40px;
    font-size: 16px;
    height: 26px;
    color: black;
    background: #ffeb3b;
    border-color: #ffe608;
}

.post-class-id3 {
    border-radius: 4px;
    margin-left: 10px;
    padding-top: 2px;
    width: 40px;
    font-size: 16px;
    height: 26px;
    color: white;
    background: #4caf50;
    border-color: #3d8b40;
}

.post-class-id4 {
    border-radius: 4px;
    margin-left: 10px;
    padding-top: 2px;
    width: 40px;
    font-size: 16px;
    height: 26px;
    color: white;
    background: #d32f2f;
    border-color: #ab2424;
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isCommunity',
            userToken: '',
            PostId: 1,
            PostInfo: {}
        }
    },
    async mounted() {
        await this.getCookie()
        await this.getPostsInfo()
    },
    methods: {
        async getCookie() {
            this.PostId = this.$route.query.PostId;
            this.userToken = localStorage.getItem('userToken')
        },
        async getPostsInfo() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/posts/getPostInfo',
                data: {
                    id: this.PostId
                }
            })
            this.PostInfo = res.data.result[0]
        }
    }
}
</script>