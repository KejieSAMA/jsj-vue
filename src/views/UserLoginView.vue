<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import UserLogin from '../components/UserLogin.vue'
</script>

<template>
    <!-- <HeaderTop :param="param"/> -->
    <UserLogin/>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      param: 'isLogin'
    }
  }
}
</script>