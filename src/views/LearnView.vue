<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
import CETInco from "@/icon/CET.vue"
import ReadIcon from "@/icon/ReadIcon.vue"
import paperIcon from "@/icon/paper.vue"
import dictationIcon from "@/icon/dictation.vue"
import dictationWord from "@/icon/dictationWord.vue"
import spellingWord from "@/icon/SpellingWord.vue"
import LSWRIcon from "@/icon/LSWR.vue"
import oneDayIcon from "@/icon/OneDay.vue"
import newEn from "@/icon/NewEn.vue"
import quickCheck from "@/icon/quickCheck.vue"
import translate from "@/icon/translate.vue"
import readSelect from "@/icon/ReadSelect.vue"
import senFill from "@/icon/ReadSenFill.vue"

</script>

<template>
    <HeaderTop :param="param" />
    <div class=""></div>
    <div class="Item">
        <!-- <div class="Elcarousel">
        </div> -->
        <div class="item-box">
            <div class="itemBox-Font-size">精选推荐>></div>
            <div class="itemBox-left">
                <div href="" @click="test2">
                    <CETInco />
                    四六级课
                </div>
                <div href="" @click="test2">
                    <ReadIcon />
                    爱阅读
                </div>
                <div href="" @click="test2">
                    <paperIcon />
                    真题查询
                </div>
                <div href="" @click="test2">
                    <oneDayIcon />
                    每日一句
                </div>
                <div href="" @click="test2">
                    <LSWRIcon />
                    听说读写
                </div>
                <div href="" @click="test2">
                    <dictationIcon />
                    每日听力
                </div>
            </div>
            <div class="itemBox-Font-size">英语学习>></div>
            <div class="itemBox-left">
                <router-link href="" class="learnEnBox" :to="{ path: '/learnNew' }">
                    <newEn />
                    新词学习
                </router-link>
                <router-link href="" class="learnEnBox" :to="{ path: '/learn' }" @click="test">
                    <quickCheck />
                    快速自检
                </router-link>
                <router-link href="" class="learnEnBox" :to="{ path: '/learn/queryEn' }">
                    <translate />
                    单词查询
                </router-link>
            </div>
            <div class="itemBox-Font-size">专项训练>></div>
            <div class="itemBox-left">
                <router-link href="" class="learnEnBox" :to="{ path: '/learn/ReadSenSelect' }">
                    <readSelect />
                    读句选词
                </router-link>
                <router-link href="" class="learnEnBox" :to="{ path: '/learn/ReadSen' }">
                    <senFill />
                    读句填空
                </router-link>
                <router-link href="" class="learnEnBox" :to="{ path: '/learn/wordSpelling' }">
                    <dictationWord />
                    全拼默写
                </router-link>
                <router-link href="" class="learnEnBox" :to="{ path: '/learn/wordSpellingIncomplete' }">
                    <spellingWord />
                    填空拼写
                </router-link>
            </div>
            <!--  <div class="itemBox-Font-size">英语学习</div>
            <div class="learnEn">
                <router-link href="" class="learnEn-item" :to="{ path: '/learnNew' }">新词学习
                </router-link>
                <a href="" class="learnEn-item" @click="test">
                    快速自检
                </a>
                <router-link href="" class="learnEn-item" :to="{ path: '/learn/queryEn' }">单词查询
                </router-link>
            </div> -->
            <!-- <div class="itemBox-Font-size">专项训练</div>
            <div class="itemBox-right"></div> -->
        </div>
        <!-- <div class="Item-title">英语学习</div>
        <div class="learnEn"> 
            <router-link href="" class="learnEn-item" :to="{
                path: '/learnNew'
            }">新词学习
            </router-link>
            <a href="" class="learnEn-item"  @click="test">
                快速自检
            </a>
            <router-link href="" class="learnEn-item" :to="{
                path: '/learn/queryEn'
            }">单词查询
            </router-link>
        </div>
        <div class="Item-title">专项训练</div>
        <div class="learnEn"> 
            <a href="" class="learnEn-item" @click="test">
                单词训练
            </a>
            <router-link href="" class="learnEn-item" :to="{
                path: '/learn/wordSpelling'
            }">全拼默写
            </router-link>
            <router-link href="" class="learnEn-item" :to="{
                path: '/learn/wordSpellingIncomplete'
            }">填空拼写
            </router-link>
            <a href="" class="learnEn-item"  @click="test">
                中文选词
            </a>
        </div> -->
    </div>
</template>

<style scoped>
.Elcarousel {
    height: 380px;
    border: 1px solid rgb(178, 177, 177);
    background-image: url("../assets/back.jpg");
    background-position-y: -300px;
    background-size: 1380px;
}

.itemBox-Font-size {
    margin: 15px 0px;
    font-size: 22px;
}

.itemBox-left>div {
    display: flex;
    margin: 0px 50px;
    flex-direction: column;
    align-items: center;
}

.learnEnBox {
    display: flex;
    margin: 0px 50px;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
}

.itemBox-left {
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid rgb(178, 177, 177);
    display: flex;
    height: 120px;
    width: 100%;
    background-color: white;
    justify-content: flex-start;
    align-items: center;
}

.itemBox-right {
    border: 1px dashed rgb(178, 177, 177);
    height: 100px;
    width: 100px;
    background-color: white;
}

.item-box {
    padding: 20px 20px;
    margin: 0px 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: white;
    box-shadow: 0px 0px 36px 0px rgb(164, 164, 164);
}

.Item-title {
    margin: 20px;
    font-size: 20px;
    color: red;
}

.Item {
    display: flex;
    flex-direction: column;
}

.learnEn {
    border-bottom: 1px dashed rgb(178, 177, 177);
    display: flex;

}

.learnEn-item {
    text-decoration: none;
    margin: 10px;
    width: 100px;
    padding: 20px;
    color: black;
    border-radius: 8px;
    background-color: rgba(175, 228, 246, 0.6);
}

.learnEn-item:hover {

    background-color: rgba(167, 214, 230, 0.8);
}

.learnEn-item-admin {
    text-decoration: none;
    margin: 10px;
    width: 100px;
    padding: 20px;
    color: black;
    border-radius: 8px;
    background-color: rgba(65, 187, 227, 0.2);
}

.learnEn-item-admin:hover {

    background-color: rgba(6, 152, 201, 0.5);
}
</style>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            param: 'isLearnView',
            userToken: ''
        }
    },
    mounted() {
        this.getCookie()
    },
    methods: {
        test2(){
            alert('该功能正在收集数据中,将尽快完成')
        },
        test() {
            alert('该功能正在debug中,将尽快完成')
        },
        getCookie() {
            this.userToken = localStorage.getItem('userToken')
        },
        async getM() {
            const res = await axios({
                method: 'post',
                url: 'http://localhost:8000/enData/getWordMasteredLimit',
                headers: {
                    authorization: this.userToken
                }
            })
            console.log(res)
        }
    }
}
</script>