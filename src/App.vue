<script setup>
/* import HeaderTop from './components/HeaderTop.vue'; */
</script>


<template>
  <!-- 
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <HeaderTop /> -->
  <main>
    <router-view/>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin: 0px;
    background-color: #f3f3f3;
}

main {
  display: flex;
  /* margin: 50px 182px; */
  flex-direction: column;
}</style>
