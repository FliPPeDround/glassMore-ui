<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">卡片</h3>
      <div class="card">
        <p>基本使用</p>
        <pre><code>
          &lt;gl-dialog v-model="visible"&gt;&lt;/gl-dialog&gt;
        </code></pre>
      </div>
      <gl-button class="push-comps" @click="pushComps" icon="el-icon-download" rect>添加到项目中</gl-button>
    </div>
    <div class="show">
      <h4>Card</h4>
      <p>基本使用</p>
      <gl-button rect @click="visible01 = true">Dialog</gl-button>
      <gl-dialog v-model="visible01">每个人都不得不面对这些问题。</gl-dialog>
    </div>
  </div>
</template>
<script setup>
import glDialog from './../components/glassMoreComps/gl-dialog.vue'
import glButton from './../components/glassMoreComps/gl-button.vue'
import { ref } from 'vue'
import { pushComponent } from './../util/postCompsName'
const visible01 = ref(false)
const pushComps = () => {
  pushComponent('Dialog')
}
</script>
<style scoped>
  .input-page {
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #fff;
    border-top-right-radius: 40px;
  }
  .att {
    width: 65%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .att::-webkit-scrollbar{
    width: 8px;
  }
  .att::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .att-title {
    align-self: flex-start;
    margin-left: 20px;
  }

  .card {
    margin-top: 20px;
    width: 90%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .show {
    padding: 0 20px;
    width: 35%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .show::-webkit-scrollbar{
    width: 8px;
  }
  .show::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  p {
    margin-left: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
  .push-comps {
    align-self: flex-end;
    margin-right: 40px;
    margin-top: 5vw;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
  }
  pre {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
</style>
