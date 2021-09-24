<template>
  <body>
      <comp-list class="list"/>
      <comp-attribute class="attribute"/>
      <comp-display class="display"/>
  </body>
</template>

<script>
import compList from './components/compList.vue'
import compAttribute from './components/compAttribute.vue'
import compDisplay from './components/compDisplay.vue'
export default {
  name: 'Home',
  props: {
    
  },
  components:{
    compList,
    compDisplay,
    compAttribute
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

body{
  position: fixed;
  top:0;
  left:0;
  margin:0;
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #8dbceb, #9caaee, #cba4eb, #f39ad4, #f0869f);
}

.list{
  width: 20vw;
  height: 100vh;
  background-color: white;
   background: rgba( 255, 255, 255, 0.7 );
}
.attribute{
  width: 50vw;
  height: 100vh;
  background: rgba( 255, 255, 255, 0.4 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
}
.display{
  width: 30vw;
  height: 100vh;
  background: rgba( 255, 255, 255, 0.1 );
}


</style>
