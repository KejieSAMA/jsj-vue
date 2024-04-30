<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import backIcon from "@/icon/back.vue"
</script>

<template>
    <HeaderTop :param="param" />
    <div class="Item">
        <div class="box">
            <div v-if="resWord[index].data && resWord[index].data.entries && resWord[index].data.entries.length > 0"
                class="box-item">
                <div v-for="entry in resWord[index].data.entries" :key="entry.explain">
                    <div>{{ resWord[index].data.sentence }}</div>
                    <div>{{ resWord[index].data.chineseTranslation }}</div>
                    <div>{{ entry.explain }}</div>
                    <div class="selectWords">
                        <button @click="confirmWord(resWord[index].data.othereWord[0].en)">{{
        resWord[index].data.othereWord[0].en }}</button>
                        <button @click="confirmWord(resWord[index].data.othereWord[1].en)">{{
        resWord[index].data.othereWord[1].en }}</button>
                        <button @click="confirmWord(resWord[index].data.othereWord[2].en)">{{
        resWord[index].data.othereWord[2].en }}</button>
                        <button @click="confirmWord(resWord[index].data.othereWord[3].en)">{{
        resWord[index].data.othereWord[3].en }}</button>
                    </div>
                    <input type="text" v-model="inputValue" placeholder="您当前选择了" class="custom-input" readonly>
                </div>
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
            <backIcon />
            <router-link href="" :class="{ 'navc': true, 'red': param === 'isLearnView' }" :to="{
        path: '/learn'
    }">返回</router-link>
        </div>
    </div>
</template>

<style scoped>
.selectWords {
    display: flex;
    justify-content: center
}

.selectWords>button {
    width: 120px;
    height: 56px;
    font-size: 16px;
    margin: 5px 5px;
}

.confirm_button {
    display: flex;
    justify-content: center
}

.back {
    margin: 0px auto;
    width: 160px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
}

.custom-input {
    border-radius: 5px;
    margin-top: 10px;
    padding: 5px;
    border-width: 0;
    border-bottom: 1px solid #ccc;
    background-color: #f2f2f2;
    color: #333;
    font-size: 14px;
    outline: none;
}

.navc {
    text-decoration: none;
}

.learn {
    width: 100px;
}

.en {
    font-size: 20px;
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
            inputValue: ''
        }
    },
    mounted() {
        this.getWord()
    },
    methods: {
        confirmWord(word) {
            this.inputValue = word;
        },
        shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        },
        replacedSentence(sentence, word) {
            return sentence.replace(word, "_____");
        },
        async getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getWord() {
            await this.getCookie()
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/enData/getWordMasteredLimit',
                headers: {
                    authorization: this.userToken
                }
            })
            this.resWord = res.data.message;
            for (var i = 0; i < this.resWord.length; i++) {
                const res = await this.getInfo(this.resWord[i].word)
                this.resWord[i].data = res.endata
                this.resWord[i].data.sentence = res.dataRes[0].sentence
                this.resWord[i].data.chineseTranslation = res.dataRes[0].chineseTranslation
                const arrWord = [
                    { en: res.otherWordRes[0].En },
                    { en: res.otherWordRes[1].En },
                    { en: res.otherWordRes[2].En },
                    { en: this.resWord[i].word }
                ]
                /* this.resWord[i].data.othereWord = [
                    { en: res.otherWordRes[0].dataValues.En },
                    { en: res.otherWordRes[1].dataValues.En },
                    { en: res.otherWordRes[2].dataValues.En },
                    { en: this.resWord[i].word }
                ] */
                const shuffleArray = this.shuffleArray(arrWord)
                console.log(shuffleArray);
                this.resWord[i].data.othereWord = shuffleArray;
            }

        },
        async LearnEn() {
            if (this.inputValue.toLowerCase() == this.resWord[this.index].word.toLowerCase()) {
                alert('填写正确,请继续')
                this.index++;
                this.inputValue = ''
            } else {
                alert(`填写错误,该单词为{ ${this.resWord[this.index].word} }已被标注为掌握失败!请重新学习!`)
                await axios({
                    method: 'post',
                    url: 'http://localhost:8000/learn/userNoLearn',
                    data: {
                        userId: this.resWord[this.index].userId,
                        wordId: this.resWord[this.index].wordId,
                        word: this.resWord[this.index].word
                    }
                })
                this.index++;
                this.inputValue = ''
            }
            if (this.index > this.resWord.length - 1) {
                alert('您已完成本轮所有单词的拼写!')
                this.index = 0;
            }
        },
        changeAddIndex() {
            // 检查是否达到数组边界
            if (this.index < this.resWord.length - 1) {
                this.index++;
            } else {
                // 如果已经到达数组末尾，则将索引重置为0
                this.index = 0;
            }
        },
        changeReduceIndex() {
            // 检查是否达到数组边界
            if (this.index != 0) {
                this.index--;
            } else {
                // 如果已经到达数组末尾，则将索引重置为length-1
                this.index = this.resWord.length - 1;
            }
        },
        async getInfo(q) {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/learn/query',
                data: {
                    q: q,
                    num: 1
                }
            })
            const obj = {
                endata: res.data.enData.data,
                dataRes: res.data.dataRes,
                otherWordRes: res.data.otherWordRes
            }
            return obj
        }
    }
}
</script>