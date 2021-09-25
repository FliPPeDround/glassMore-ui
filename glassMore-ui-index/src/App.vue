<template>
  <div class="container">
    <componentNav class="nav"/>
    <componentShow class="show"/>
  </div>
</template>
<script setup>
import componentNav from './components/indexComps/page-component__nav.vue'
import componentShow from './components/indexComps/page-component__show.vue'
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, #BFE9FF, #FF6E7F);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 80vw;
  height: 80vh;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  border-radius: 50px;
}
.nav {
  width: 20%;
  background: rgba(255, 255, 255, 0.8);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.show {
  width: 80%
}
</style>
