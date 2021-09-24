<template>
  <div class="home">
    <el-aside>
      <comp-list/>
    </el-aside>
    <el-main>
      <comp-attribute/>
    </el-main>
    <el-aside>
      <comp-display/>
    </el-aside>
    
  </div>
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

.home{
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
  /* box-shadow: 0 8px 0 0 rgba( 31, 38, 135, 0.37 ); */
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  /* border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );   */
}
.display{
  width: 30vw;
  height: 100vh;
  background: rgba( 255, 255, 255, 0.1 );
}


</style>
