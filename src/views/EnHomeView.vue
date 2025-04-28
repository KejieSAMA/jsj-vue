<script setup>

import HeaderTop from "@/components/HeaderTop.vue";
</script>

<template>
  <HeaderTop :param="param" />
  <!-- <button class="chushihua" @click="LoadWord">词库初始化</button> -->
  <div class="Item">
    <div class="App-name">基于云计算的在线教育资源共享平台的设计与实现</div>
    <div class="App-introduce">基于Vue搭建的校园平台</div>
    <div class="App-introduce2">易学易用与他人共同学习</div>
  </div>
</template>

<style scoped>
.chushihua {
  width: 200px;
}

.App-introduce {
  margin-top: 20px;
  font-size: 28px;
}

.App-introduce2 {
  margin-top: 20px;
  font-size: 28px;
}

.App-name {
  margin-top: 100px;
  font-size: 60px;
}

.Item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Item>div {
  width: 1000px;
}
</style>

<script>

import axios from 'axios'
import { data } from '../assets/word'
export default {
  data() {
    return {
      param: 'isHome'
    }
  },
  methods: {
    async LoadWord() {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8000/enData/addEnDatas',
        data: data
      })
    }
  }
}
</script>