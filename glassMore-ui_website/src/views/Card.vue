<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">卡片</h3>
      <div class="card">
        <p>基本使用</p>
        <pre><code> &lt;gl-card&gt; 每个人都不得不面对这些问题。&lt;/gl-card&gt;</code></pre>
      </div>
      <div class="card">
        <p>hover:shadow</p>
        <pre><code> &lt;gl-card shadow="hover"&gt; 每个人都不得不面对这些问题。&lt;/gl-card&gt;</code></pre>
      </div>
      <div class="card">
        <p>hover:always</p>
        <pre><code> &lt;gl-card shadow="always"&gt; 每个人都不得不面对这些问题。&lt;/gl-card&gt;</code></pre>
      </div>
      <gl-button class="push-comps" @click="pushComps" icon="el-icon-download" rect>添加到项目中</gl-button>
    </div>
    <div class="show">
      <h4>Card</h4>
      <p>基本使用</p>
      <gl-card>每个人都不得不面对这些问题。</gl-card>
      <p>hover:shadow</p>
      <gl-card shadow="hover">每个人都不得不面对这些问题。</gl-card>
      <p>hover:always</p>
      <gl-card shadow="always">每个人都不得不面对这些问题。</gl-card>
    </div>
  </div>
</template>
<script setup>
import glCard from './../components/glassMoreComps/gl-card.vue'
import glButton from './../components/glassMoreComps/gl-button.vue'
import { pushComponent } from './../util/postCompsName'
const pushComps = () => {
  pushComponent('Card')
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
