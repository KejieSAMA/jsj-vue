<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import backIcon from "@/icon/back.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Item">
        <div class="box">
            <div v-if="resWord[index]" class="box-item">
                <div class="en">{{ index + 1 }} : {{ resWord[index].En }}</div>
                <div>{{ resWord[index].enClass }}:{{ resWord[index].EnCn }}</div>
                <div class="enSentence">例句: {{ resWord[index].sentence }}</div>
                <div class="enCT">{{ resWord[index].chineseTranslation }}</div>
            </div>
            <div>
                <audio :src="audioFile" controls></audio>
            </div>
            <div class="confirm_button">
                <div>
                    <button @click="changeReduceIndex" class="learn">上一个</button>
                </div>
                <div>
                    <button @click="LearnEn" class="learn">确认学习</button>
                </div>
                <div>
                    <button @click="changeAddIndex" class="learn">下一个</button>
                </div>
            </div>
        </div>
        <div class="back">
            <backIcon/>
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isLearnView' }" :to="{
        path: '/learn'
    }">返回</router-link>
        </div>
    </div>
</template>

<style scoped>
.back{
    margin: 0px auto;
    width: 160px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
}
.confirm_button {
    display: flex;
    justify-content: center
}

.box-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navc {
    text-decoration: none;
}

.learn {
    width: 100px;
    height: 30px;
    border-radius: 6px;
}

.learn:hover {
    background: white;
}

.en {
    font-size: 30px;
}

.box>div>div {
    margin: 10px;
}

.box>div {
    margin: 3px
}

.Item {
    display: flex;
    margin: 50px 182px;
    flex-direction: column;
}

.box {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px block gray;
    border-radius: 8px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
}

.enSentence {
    margin: auto;
    padding: 10px 0px;
    width: 700px;
    border-bottom: 1px dashed gray;
}

.enCT {
    margin: auto;
    padding-bottom: 10px;
    width: 700px;
    border-bottom: 1px dashed gray;
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isLearnView',
            userToken: '',
            resWord: [{}],
            index: 0,
            userId: 0,
            audioFile: '',
            word: ""
        }
    },
    async mounted() {
        await this.getWord()
        this.getAudioFile()
    },
    methods: {
        playAudio() {
            this.$refs.audioPlayer.play();
        },
        pauseAudio() {
            this.$refs.audioPlayer.pause();
        },
        async getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        getAudioFile() {
            this.word = this.resWord[this.index].En
            const testWord = this.word
            this.audioFile = require(`../assets/audio/${testWord}.mp3`);
        },
        async getWord() {
            await this.getCookie()
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/enData/getWord',
                headers: {
                    authorization: this.userToken
                }
            })
            this.userId = res.data.userId
            this.resWord = res.data.message;
        },
        changeAddIndex() {
            // 检查是否达到数组边界
            if (this.index < this.resWord.length - 1) {
                this.index++;
            } else {
                // 如果已经到达数组末尾，则将索引重置为0
                this.index = 0;
            }
            this.getAudioFile()
        },
        changeReduceIndex() {
            // 检查是否达到数组边界
            if (this.index != 0) {
                this.index--;
            } else {
                // 如果已经到达数组末尾，则将索引重置为length-1
                this.index = this.resWord.length - 1;
            }
            this.getAudioFile()
        },
        async LearnEn() {
            if (confirm('您确定记住了该单词了吗?')) {
                // 用户点击了确认按钮
                await axios({
                    method: 'post',
                    url: 'http://localhost:8000/learn/userLean',
                    data: {
                        userId: this.userId,
                        wordId: this.resWord[this.index].id,
                        word: this.resWord[this.index].En
                    }
                })
                this.index++;
            } else {
                // 用户点击了取消按钮
                // 可以选择不执行任何操作或者做一些其他处理
            }
            if (this.index == this.resWord.length) {
                alert('您已完成本次单词的学习，即将跳转到学习页面');
                this.$router.push('/learn');
                return
            }
            this.getAudioFile()
        }
    }
}
</script>