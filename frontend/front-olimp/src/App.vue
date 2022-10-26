<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.app{
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  background-image: url(./assets/images/bg.jpg)
}
</style>
