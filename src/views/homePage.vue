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
        <div class="userInfoBox">
            <div class="avatar">
                <div></div>
            </div>
            <div class="userInfo">
                <div class="userName-box">
                    <div class="userName">{{ userInfo.nick_name }}</div>
                    <router-link to="/edit-profile" class="edit-profile-btn">
                        修改资料
                    </router-link>
                </div>
                <div class="info-box">
                    <div class="info-top">
                        <div class="info-item-box">
                            <div>消息</div>
                            <div>0</div>
                        </div>
                        <div class="info-item-box">
                            <div>获赞</div>
                            <div>0</div>
                        </div>
                        <div class="info-item-box">
                            <div>主题</div>
                            <div>{{ UserPosts.length }}</div>
                        </div>
                        <!-- <div class="info-item-box">
                            <div>已学单词</div>
                            <div>{{ UserCount }}</div>
                        </div> -->
                    </div>
                    <div class="info-bottom">
                        <div>注册时间:{{ userInfo.createdAt }}</div>
                        <div>在线天数: 0 天</div>
                        <div>打卡次数: 0 次</div>
                    </div>
                </div>
            </div>
            <div>
                <div></div>
            </div>
        </div>
        <div class="spaceInfoBox">
            <div class="space-tabs">
                <button @click="activeTab = 'space'" :class="['tab-item', { active: activeTab === 'space' }]">
                    个人空间
                </button>
                <button @click="activeTab = 'posts'" :class="['tab-item', { active: activeTab === 'posts' }]">
                    个人主题 ({{ personalPosts.length }})
                </button>
                <button @click="activeTab = 'favorites'" :class="['tab-item', { active: activeTab === 'favorites' }]">
                    收藏主题 ({{ favoritePosts.length }})
                </button>
            </div>
            <div v-show="activeTab === 'space'" class="spaceItem">
                <div class="Item-left">
                    <div class="small-avatar"></div>
                </div>
                <div class="Item-right">
                    <div class="push-post">
                        <pushIcon />主题发表
                    </div>
                    <select id="format" v-model="selectedFormat" class="PostClass">
                        <option value="讨论">讨论</option>
                        <option value="资源">资源</option>
                        <option value="分享">分享</option>
                        <option value="求助">求助</option>
                    </select>
                    <input class="post-name" type="text" v-model="inputName" placeholder="请输入主题标题">
                    <!-- <input class="post-content" type="text" placeholder="请主题内容"> -->
                    <div contenteditable="true" @input="handleInput" class="user-newPost-content">{{ inputContent }}
                    </div>
                    <button class="publish" @click="PushPost">发表主题</button>
                </div>
            </div>
            <!-- 个人主题列表 -->
            <div v-show="activeTab === 'posts'" class="post-list">
                <div v-for="post in personalPosts" :key="post.id" class="post-item">
                    <div class="post-class" :class="postClassStyle(post.category)">
                        {{ post.category }}
                    </div>
                    <div class="post-content">
                        <h3>{{ post.title }}</h3>
                        <div class="post-meta">
                            <span>回复 {{ post.replies }}</span>
                            <span>查看 {{ post.views }}</span>
                            <span>{{ post.time }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 收藏主题列表 -->
            <div v-show="activeTab === 'favorites'" class="post-list">
                <div v-for="post in favoritePosts" :key="post.id" class="post-item">
                    <div class="post-class" :class="postClassStyle(post.category)">
                        {{ post.category }}
                    </div>
                    <div class="post-content">
                        <h3>{{ post.title }}</h3>
                        <div class="post-meta">
                            <span>作者 {{ post.author }}</span>
                            <span>回复 {{ post.replies }}</span>
                            <span>{{ post.time }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.PostClass {
    padding: 5px;
    width: 65px;
    margin-bottom: 5px;
}

.push-post {
    display: flex;
    width: 100px;
    margin: 10px;
    align-items: center;
}

.publish {
    margin-top: 10px;
    background: lightcoral;
    border-radius: 4px;
    padding: 10px;
    width: 80px;
    color: white;
    text-decoration: none;
}

.user-newPost-content {
    margin-top: 20px;
    width: 1000px;
    min-height: 150px;
    max-height: 300px;
    overflow: auto;
    padding: 12px;
    text-align: start;
    border-radius: 10px;
    background: rgb(241, 243, 251, 0.5);
    border: solid 1px #d3e1f6;
}

.user-newPost-content:focus {
    background-image: linear-gradient(rgb(241, 243, 251, 0.5) 0px, white 100px);
    outline: none;
}

.post-name {
    background: rgb(255, 255, 255, 0.65);
    width: 300px;
    padding: 8px;
    border: 0.5px solid rgb(0, 0, 0, 0.5);

}

.post-name:focus {
    outline: none;
}

.Item-right {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    ;
}

.Item-left {
    border-right: 1px solid lightgray;
}

.spaceItem {
    border-radius: 20px;
    display: flex;
    width: 100%;
    background: white;
    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.2);
}

.small-avatar {
    margin: 10px 20px;
    border-radius: 14px;
    width: 60px;
    height: 60px;
    background: url("../assets/userAvatar.png");
    background-size: 100%;
}

.space-title {
    background: rgb(255, 255, 255, 0.5);
    color: #92d049;
    padding: 15px 15px;
    border-bottom: 2px solid #92d049;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
}

.space-title:hover {
    background: rgb(255, 255, 255, 0.2);
}

.info-bottom {
    padding: 10px;
}

.info-box {
    border-radius: 10px;
    background: white;
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.userName {
    font-size: 28px;
    text-align: left;
}

.info-bottom>div {
    margin: 0px 10px;
    font-size: 16px;
    color: #a0afce;
}

.info-item-box div:first-child {
    font-size: 14px;
    margin: 10px 0px;
    color: #a0afce;
}

.info-item-box {
    margin: 0px 30px;
    padding: 5px;
    display: flex;
    flex-direction: column;
}

.userInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.info-top {
    display: flex;
    border-radius: 0px;
    border-bottom: 1px solid black;
}

.info-bottom {
    display: flex;
}

.spaceInfoBox {
    margin-top: 20px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 280px;
    margin-right: 20px;
}

.userInfoBox {
    width: 1200px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    margin-left: 280px;
    margin-right: 20px;
    background: rgb(255, 255, 255, 0.4);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.avatar {
    width: 230px;
    height: 230px;
    border-radius: 50px;
    border: 2px solid lightblue;
    background: url("../assets/userAvatar.png");
    background-size: 100%;
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

.Home-item {
    flex-direction: column;
    display: flex;
    width: 100%;
    background: rgb(173, 216, 230, 0.25);
    height: 1000px;
}

.userName-box {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
}

.edit-profile-btn {
    background: #2175f3;
    color: white;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.edit-profile-btn:hover {
    background: #1a5dc7;
    transform: translateY(-1px);
}

/* 选项卡样式 */
.space-tabs {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.tab-item {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #666;
  transition: all 0.3s;
}

.tab-item.active {
  color: #2175f3;
  border-bottom: 3px solid #2175f3;
  font-weight: 500;
}

.tab-item:hover {
  background: #f5f8ff;
}

/* 主题列表样式 */
.post-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 16px;
}

.post-item {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.post-item:last-child {
  border-bottom: none;
}

.post-class {
  min-width: 60px;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  margin-right: 16px;
}

.post-class.discuss { background: #2175f3; color: white; }
.post-class.resource { background: #ffeb3b; color: #333; }
.post-class.share { background: #4caf50; color: white; }
.post-class.help { background: #f44336; color: white; }

.post-content {
  flex: 1;
}

.post-content h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  color: #333;
}

.post-meta {
  display: flex;
  gap: 16px;
  color: #666;
  font-size: 14px;
}

.post-meta span {
  display: flex;
  align-items: center;
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            activeTab: 'space',
            selectedFormat: "讨论",
            param: 'isUserHomePage',
            userToken: '',
            inputName: '',
            inputContent: '请输入主题内容',
            userInfo: "",
            UserCount: 0,
            UserPosts: [],
            personalPosts: [
                {
                    id: 1,
                    category: '讨论',
                    title: '关于Vue3的组合式API使用心得',
                    replies: 15,
                    views: 256,
                    time: '2024-03-25'
                },
                {
                    id: 2,
                    category: '资源',
                    title: '前端开发实用工具包分享',
                    replies: 8,
                    views: 189,
                    time: '2024-03-24'
                }
            ],
            // 收藏主题样例数据
            favoritePosts: [
                {
                    id: 101,
                    category: '分享',
                    title: 'TypeScript高级技巧分享',
                    author: '技术达人',
                    replies: 42,
                    views: 789,
                    time: '2024-03-23'
                },
                {
                    id: 102,
                    category: '求助',
                    title: 'Webpack配置优化请教',
                    author: '前端新手',
                    replies: 5,
                    views: 96,
                    time: '2024-03-22'
                }
            ]

        }
    },
    async mounted() {
        await this.getUserInfo()
    },
    methods: {
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        postClassStyle(category) {
            return {
                'discuss': category === '讨论',
                'resource': category === '资源',
                'share': category === '分享',
                'help': category === '求助'
            }
        },
        async PushPost() {
            this.inputContent = document.querySelector('.user-newPost-content').innerText;
            if (this.inputName == '') {
                alert("请填写主题标题")
                return;
            }

            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/posts/pushPost',
                headers: {
                    authorization: this.userToken
                },
                data: {
                    userId: 1,
                    postClass: this.selectedFormat,
                    postName: this.inputName,
                    postContent: this.inputContent,
                    user_comment: ""
                }
            })
            if (res.data.message == "帖子增加成功") {
                alert("帖子增加成功，将在 1 秒后刷新页面")
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
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
            const Posts = await axios({
                method: 'post',
                url: 'http://localhost:8000/posts/getUserPosts',
                data: {
                    userId: this.userInfo.id
                }
            })
            this.UserCount = UserCount.data.result.count
            this.UserPosts = Posts.data.result
            console.log(this.UserPosts)
        }
    }
}
</script>