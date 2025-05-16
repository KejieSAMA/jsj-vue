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
                这是一个公告示例
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
            <div class="post-toolbar">
                <div class="post-stats">
                    <span class="view-count">👁️ {{ PostInfo.viewCount || 0 }} 浏览</span>
                    <span class="reply-count">💬 {{ PostInfo.commentCount || 0 }} 回复</span>
                </div>
                <button class="favorite-btn" :class="{ 'favorited': isFavorited }" @click="toggleFavorite">
                    {{ isFavorited ? '★ 已收藏' : '☆ 收藏主题' }}
                </button>
            </div>
            <div class="PostInfo">
                <!-- 新增元信息 -->
                <div class="post-meta">
                    <span class="author">作者：{{ PostInfo.author }}</span>
                    <span class="post-time">发布于 {{ PostInfo.createTime }}</span>
                </div>

                <!-- 使用渲染后的Markdown内容 -->
                <div class="markdown-content" v-html="compiledMarkdown"></div>

                <!-- 新增互动统计 -->
                <div class="action-stats">
                    <span class="like-stat">👍 {{ PostInfo.likeCount || 0 }} 点赞</span>
                    <span class="collect-stat">⭐ {{ PostInfo.collectCount || 0 }} 收藏</span>
                </div>
            </div>

            <div class="post-class1">回复栏=></div>
            <div class="comments-section">
                <!-- 主评论 -->
                <div v-for="comment in comments" :key="comment.id" class="comment-item">
                    <div class="comment-main">
                        <!-- 头像区域 -->
                        <div class="avatar-box">
                            <img :src="comment.avatar" class="comment-avatar">
                            <div v-if="comment.replies.length" class="reply-badge">
                                {{ comment.replies.length }}回复
                            </div>
                        </div>

                        <!-- 内容区域 -->
                        <div class="content-box">
                            <!-- 用户信息行 -->
                            <div class="user-info">
                                <span class="username">{{ comment.username }}</span>
                                <span class="user-tag" v-if="comment.isVIP">高级粉丝</span>
                                <span class="time">{{ comment.time }}</span>
                                <span class="ip-location">IP属地：模拟</span>
                                <button class="report-btn">举报</button>
                            </div>

                            <!-- 评论内容 -->
                            <div class="comment-content">
                                {{ comment.content }}
                            </div>

                            <!-- 互动操作 -->
                            <div class="action-bar">
                                <button @click="handleLike(comment)" class="like-btn">
                                    <span>👍</span>
                                    {{ comment.likes || 0 }}
                                </button>
                                <button class="reply-btn">回复</button>
                                <button class="delete-btn">删除</button>
                                <span class="device-info">来自{{ comment.device || '网页端' }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- 子评论 -->
                    <div v-for="reply in comment.replies" :key="reply.id" class="sub-comment">
                        <div class="sub-content">
                            <span class="reply-to">回复</span>
                            <span class="sub-username">{{ reply.username }}</span>
                            <span class="sub-content-text">{{ reply.content }}</span>
                            <div class="sub-action">
                                <span class="sub-time">{{ reply.time }}</span>
                                <span class="sub-ip">IP属地：模拟</span>
                                <button class="sub-report">举报</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="reply-box">
                <textarea v-model="replyContent" placeholder="输入你的回复..." class="reply-input"></textarea>
                <button @click="Reply" :disabled="isReplying" class="reply-button">
                    <span v-if="isReplying">发布中...</span>
                    <span v-else>发表回复</span>
                </button>
            </div>
        </div>
    </div>
    <transition name="fade">
        <div v-if="showSuccessPopup" class="center-popup success">
            <div class="popup-content">
                ✅ {{ popupMessage }}
            </div>
        </div>
    </transition>

    <transition name="fade">
        <div v-if="showErrorPopup" class="center-popup error">
            <div class="popup-content">
                ❌ {{ popupMessage }}
                <button @click="showErrorPopup = false">关闭</button>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.PostInfo {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    position: relative;
    padding: 24px;
    margin: 20px;
    border-radius: 12px;
    min-height: 300px;
    text-align: start;
    text-indent: 2em;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-x: auto;
}

.post-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;
}

.markdown-content {
    line-height: 1.8;
    font-size: 16px;
    color: #333;
}

.markdown-content :deep(h2) {
    color: #1a365d;
    border-bottom: 2px solid #f0f4f8;
    padding-bottom: 0.5em;
}

.markdown-content :deep(code) {
    background: #f8fafc;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-family: Consolas, Monaco, monospace;
}

.action-stats {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    display: flex;
    gap: 30px;
    color: #888;
    font-size: 14px;
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

.reply-box {
    margin: 20px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.reply-input {
    width: 100%;
    height: 100px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    resize: vertical;
    margin-bottom: 10px;
    font-family: inherit;
}

.reply-button {
    background: #2175f3;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 4px;
    cursor: pointer;
    float: right;
    transition: background 0.3s;
}

.reply-button:hover {
    background: #1a5dc7;
}

/* 弹窗样式 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* 修改以下部分 */
.center-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    min-width: 300px;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.success-popup {
    background: #f0fff4;
    border: 1px solid #68d391;
    color: #2f855a;
}

.error-popup {
    background: #fff5f5;
    border: 1px solid #fc8181;
    color: #c53030;
}

.popup-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.popup-content button {
    padding: 6px 20px;
    background: #fc8181;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
}

/* 评论样例 */
.comment-item {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    margin: 12px 0;
    padding: 16px;
    background: #fff;
    text-align: left;
    /* 强制左对齐 */
}

.avatar-box {
    position: relative;
    margin-right: 12px;

    .comment-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid #f0f0f0;
    }

    .reply-badge {
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border: 1px solid #ffe58f;
        color: #d48806;
        padding: 0 6px;
        border-radius: 9px;
        font-size: 12px;
        line-height: 18px;
    }
}

.comment-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid #f0f0f0;
    background: #fff;
}

.reply-badge {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffd700;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
}

.content-box {
    flex: 1;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.username {
    font-weight: 600;
    font-size: 15px;
    color: #1a1a1a;
}

.user-tag {
    background: #fff7e6;
    color: #fa8c16;
    padding: 2px 6px;
    border-radius: 2px;
    font-size: 12px;
}

.time {
    color: #8c8c8c;
    font-size: 12px;
}

.ip-location {
    margin-left: auto;
    /* IP属地右对齐 */
    color: #999;
    font-size: 12px;
}

.report-btn {
    color: #8c8c8c;
    font-size: 12px;
    border: none;
    background: none;
    cursor: pointer;
}

.comment-content {
    color: #262626;
    line-height: 1.6;
    white-space: pre-wrap;
    padding: 8px 0;
    margin-bottom: 8px;
}

.action-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;

    button {
        padding: 0;
        min-width: auto;
        height: auto;
        line-height: 1;
    }
}

.like-btn,
.reply-btn,
.delete-btn {
    color: #8c8c8c;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
    padding: 4px 8px;
    transition: all 0.2s;
}

.like-btn:hover,
.reply-btn:hover {
    color: #2175f3;
    background: #f0f6ff;
    border-radius: 4px;
}

.delete-btn:hover {
    color: #ff4d4f;
    background: #fff1f0;
}

.device-info {
    margin-left: auto;
    color: #bfbfbf;
    font-size: 12px;
}

/* 子评论样式 */
.sub-comment {
    margin: 8px 0 0 48px;
    padding-left: 12px;
    border-left: 2px solid #f0f0f0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 10px;
        width: 10px;
        height: 10px;
        background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M640 512a32 32 0 0 1-32 32H224a32 32 0 0 1 0-64h384a32 32 0 0 1 32 32z"/></svg>') no-repeat;
        background-size: contain;
    }
}

.sub-content {
    color: #595959;
    font-size: 14px;
}

.reply-to {
    color: #2175f3;
    margin-right: 6px;
}

.sub-action {
    margin-top: 6px;
    display: flex;
    gap: 10px;
    align-items: center;
}

.sub-ip,
.sub-report {
    color: #8c8c8c;
    font-size: 12px;
}

/* 新增工具栏样式 */
.post-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 12px 20px;
    background: #f8fafc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.post-stats {
    display: flex;
    gap: 20px;
    color: #666;
    font-size: 14px;
}

.favorite-btn {
    padding: 8px 16px;
    border: 1px solid #2175f3;
    border-radius: 20px;
    background: white;
    color: #2175f3;
    cursor: pointer;
    transition: all 0.3s;
}

.favorite-btn:hover {
    background: #e8f1ff;
}

.favorite-btn.favorited {
    background: #2175f3;
    color: white;
}
</style>

<script>

import axios from 'axios'
import { marked } from 'marked';

export default {
    data() {
        return {
            param: 'isCommunity',
            userToken: '',
            PostId: 1,
            PostInfo: {
                postContent: '',
                viewCount: 0,
                commentCount: 0,
                // 其他需要的字段...
            },
            isFavorited: false, // 新增收藏状态
            replyContent: '',// 新增回复内容绑定
            showSuccessPopup: false,  // 成功弹窗控制
            showErrorPopup: false,    // 失败弹窗控制
            popupMessage: '',
            isReplying: false,
            comments: [
                {
                    id: 1,
                    username: '开发者小明',
                    avatar: require('@/assets/avatar.png'),
                    content: '我的建议是问...',
                    time: '2025-04-15 14:30',
                    likes: 12,
                    isVIP: true,
                    device: 'Android客户端',
                    replies: [
                        {
                            id: 3,
                            username: '测试用户A: ',
                            content: '你别建议了.让我建议建议...',
                            time: '2025-04-15 14:35'
                        }
                    ]
                },
                {
                    id: 2,
                    username: '开发者小凯',
                    avatar: require('@/assets/avatar.png'),
                    content: '楼上在说什么?',
                    time: '2025-04-15 15:30',
                    likes: 1,
                    isVIP: true,
                    device: 'Android客户端',
                    replies: [
                        {
                            id: 4,
                            username: '测试用户B: ',
                            content: '我也不知道,你问问?',
                            time: '2025-04-15 15:35'
                        },
                        {
                            id: 5,
                            username: '测试用户C: ',
                            content: '我也不知道,你问问?',
                            time: '2025-04-15 15:35'
                        }
                    ]
                }
            ]
        }
    },
    async mounted() {
        await this.getCookie()
        await this.getPostsInfo()
    },
    computed: {
        compiledMarkdown() {
            return marked(this.PostInfo.postContent);
        }
    },
    methods: {
        async getCookie() {
            this.PostId = this.$route.query.PostId;
            this.userToken = localStorage.getItem('userToken')
        },
        toggleFavorite() {
            this.isFavorited = !this.isFavorited
            this.showSuccessPopup = true
            this.popupMessage = this.isFavorited ? '成功收藏主题' : '已取消收藏'
            setTimeout(() => this.showSuccessPopup = false, 1500)
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
        },
        async Reply() {
            if (this.isReplying) return;
            this.isReplying = true;
            try {
                if (this.replyContent.length > 500) {
                    this.showErrorPopup = true;
                    this.popupMessage = '回复内容不能超过500字';
                    return;
                }
                if (!this.replyContent.trim()) {
                    this.showErrorPopup = true;
                    this.popupMessage = '回复内容不能为空';
                    return;
                }

                /* const res = await axios.post('http://localhost:8000/posts/reply', {
                    postId: this.PostId,
                    content: this.replyContent,
                    token: this.userToken
                }); */
                const res = {
                    data: {
                        code: 200
                    }
                }
                if (res.data.code === 200) {
                    // 成功处理
                    this.showSuccessPopup = true;
                    this.popupMessage = '回复成功';
                    await this.getPostsInfo(); // 刷新内容
                    this.replyContent = '';     // 清空输入框

                    // 2秒后自动关闭弹窗
                    setTimeout(() => {
                        this.showSuccessPopup = false;
                    }, 2000);
                } else {
                    // 服务端错误
                    this.showErrorPopup = true;
                    this.popupMessage = res.data.message || '回复失败';
                }
            } catch (error) {
                // 网络错误
                this.showErrorPopup = true;
                this.popupMessage = '网络异常，请稍后重试';
            } finally {
                this.isReplying = false;
            }
        },
        handleLike(comment) {
            comment.likes = (comment.likes || 0) + 1
        }
    }
}
</script>