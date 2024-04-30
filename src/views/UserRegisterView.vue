<script setup>
import HeaderTop from "@/components/HeaderTop.vue";
import UserRegister from '../components/UserRegister.vue'
</script>

<template>
    <!-- <HeaderTop :param="param"/> -->
    <UserRegister/>
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