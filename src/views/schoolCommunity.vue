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
            <div>主题列表</div>
            <div class="post-class1">置顶主题</div>
            <div class="line"></div>

            <div class="post-item">
                <div class="avatar"></div>
                <div class="post-name-box">
                    <div class="post-class-id1">讨论</div>
                    <div class="post-name">平台规则/进站必看!</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        查看:
                    </div>
                    <div class="ohter-info2">100</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        回复:
                    </div>
                    <div class="ohter-info2">1</div>
                </div>
            </div>
            <div class="post-class2">普通主题</div>
            <div class="line"></div>
            <div v-for="entry in Posts">
                <div class="post-item">
                    <div class="avatar"></div>
                    <div class="post-name-box">
                        <div v-if="entry.postClass == '讨论'">
                            <div class="post-class-id1">讨论</div>
                        </div>
                        <div v-if="entry.postClass == '资源'">
                            <div class="post-class-id2">资源</div>
                        </div>
                        <div v-if="entry.postClass == '分享'">
                            <div class="post-class-id3">分享</div>
                        </div>
                        <div v-if="entry.postClass == '求助'">
                            <div class="post-class-id4">求助</div>
                        </div>
                        <div class="post-name">
                            <router-link :to="{ path: '/community/Page', query: { PostId: entry.id } }"
                                :class="{ 'navc': true, 'red': param === 'isCommunity', 'post-name-go': true }">
                                {{entry.postName}}
                            </router-link>
                        </div>

                    </div>
                    <div class="ohter-info-box">
                        <div class="ohter-info1">
                            查看:
                        </div>
                        <div class="ohter-info2">{{ entry.view_number }}</div>
                    </div>
                    <div class="ohter-info-box">
                        <div class="ohter-info1">
                            回复:
                        </div>
                        <div class="ohter-info2">{{ entry.replies_number }}</div>
                    </div>
                </div>
            </div>

            <div class="post-item">
                <div class="avatar"></div>
                <div class="post-name-box">
                    <div class="post-class-id1">讨论</div>
                    <div class="post-name">如果观点并非本文最新提出的，我们应使用“We  confirm  that.”来表明我们对这一观点的认同</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        查看:
                    </div>
                    <div class="ohter-info2">10</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        回复:
                    </div>
                    <div class="ohter-info2">5</div>
                </div>
            </div>
            <div class="post-item">
                <div class="avatar"></div>
                <div class="post-name-box">
                    <div class="post-class-id1">讨论</div>
                    <div class="post-name">本平台创建の100周年庆</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        查看:
                    </div>
                    <div class="ohter-info2">9999999</div>
                </div>
                <div class="ohter-info-box">
                    <div class="ohter-info1">
                        回复:
                    </div>
                    <div class="ohter-info2">10086</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.post-name-go{
    text-decoration: none;
}
.ohter-info-box {
    display: flex;
    align-items: center
}

.ohter-info1 {
    padding-right: 10px;
    font-size: 12px;
    color: #a0afce;
}

.ohter-info2 {
    padding-right: 10px;
    font-size: 12px;
    color: #000101;
}

.post-name {
    text-decoration: none;
    text-align: start;
    width: 500px;
    margin-left: 10px;
    font-weight: bold;
}

.post-class-id1 {
    border-radius: 2px;
    margin-left: 10px;
    padding-top: 2px;
    width: 30px;
    font-size: 12px;
    height: 20px;
    color: white;
    background: #2175f3;
    border-color: #0c5cd5;
}

.post-class-id2 {
    border-radius: 2px;
    margin-left: 10px;
    padding-top: 2px;
    width: 30px;
    font-size: 12px;
    height: 20px;
    color: black;
    background: #ffeb3b;
    border-color: #ffe608;
}

.post-class-id3 {
    border-radius: 2px;
    margin-left: 10px;
    padding-top: 2px;
    width: 30px;
    font-size: 12px;
    height: 20px;
    color: white;
    background: #4caf50;
    border-color: #3d8b40;
}

.post-class-id4 {
    border-radius: 2px;
    margin-left: 10px;
    padding-top: 2px;
    width: 30px;
    font-size: 12px;
    height: 20px;
    color: white;
    background: #d32f2f;
    border-color: #ab2424;
}

.post-name-box {
    display: flex;
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

.post-class2 {
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

.post-item {
    margin-top: 10px;
    border-radius: 8px 8px 0px 0px;
    padding: 10px;
    width: 910px;
    margin-left: 10px;
    display: flex;
    border-bottom: 1px solid rgb(239, 239, 239);
}

.post-item:hover {
    background: rgb(239, 239, 239);
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
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isCommunity',
            userToken: '',
            Posts: []
        }
    },
    async mounted() {
        this.getCookie()
        await this.getPosts()
    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getPosts() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/posts/getPosts'
            })
            this.Posts = res.data.result;
        }
    }
}
</script>