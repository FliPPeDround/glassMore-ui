<template>
  <div class="container">
    <componentNav class="nav"/>
    <componentAtt class="att"/>
    <componentShow class="show"/>
  </div>
</template>
<script setup>
import componentNav from './components/indexComps/page-component__nav.vue'
import componentAtt from './components/indexComps/page-component__attributes.vue'
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
  background: #FFF;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.att {
  width: 55%;
  background: rgba(255, 255, 255, 0.3);
}
.show {
  width: 25%
}
</style>
