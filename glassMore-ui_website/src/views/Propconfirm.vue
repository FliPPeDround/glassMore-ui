<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">气泡框</h3>
      <div class="card">
        <p>使用方法</p>
        <p><pre><code> &lt;gl-popconfirm &gt; &lt;gl-popconfirm/&gt;</code></pre></p>
      </div>
      <div class="card">
        <p>自定义</p>
        <p><pre><code> &lt;gl-popconfirm title="你不要过来啊" &gt; &lt;gl-popconfirm/&gt;</code></pre></p>
      </div>
      <div class="card">
        <p>回调函数</p>
        <p><pre><code> &lt;gl-popconfirm @confirm = 'get' &gt; &lt;gl-popconfirm/&gt;</code></pre></p>
      </div>
      <gl-button class="push-comps" @click="pushComps" icon="el-icon-download" rect>添加到项目中</gl-button>
    </div>
    <div class="show">
      <h4>Popconfirm</h4>
      <p>基本使用</p>
      <gl-popconfirm></gl-popconfirm>
      <p>自定义</p>
      <gl-popconfirm title="你不要过来啊" cancel= "算了" confirm = "确定" >确定要这样吗？</gl-popconfirm>
    </div>
  </div>
</template>
<script setup>
import glPopconfirm from './../components/glassMoreComps/gl-popconfirm.vue'
import glButton from './../components/glassMoreComps/gl-button.vue'
import { pushComponent } from './../util/postCompsName'
const pushComps = () => {
  pushComponent('Propconfirm')
}
</script>
<style scoped>
   textarea {
       width: 90%;
   }
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
