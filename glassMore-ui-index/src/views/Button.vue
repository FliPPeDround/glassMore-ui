/* eslint-disable no-lone-blocks */
<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">输入框</h3>
      <div class="card">
        <p>基本使用</p>
        <pre><code> &lt;gl-button&gt; 普通按钮 &lt;/gl-button&gt;</code></pre>
      </div>
      <div class="card">
        <p>禁用</p>
        <pre><code> &lt;gl-button disabled&gt; 禁用按钮 &lt;/gl-button&gt;</code></pre>
      </div>
      <div class="card">
        <p>矩形按钮</p>
        <pre><code> &lt;gl-button rect&gt; 矩形按钮 &lt;/gl-button&gt;</code></pre>
      </div>
      <div class="card">
        <p>圆形按钮</p>
        <pre><code> &lt;gl-button circle&gt; G &lt;/gl-button&gt;</code></pre>
      </div>
      <div class="card">
        <p>图标按钮</p>
        <pre><code> &lt;gl-button icon="gl-icon-like" circle&gt;&lt;/gl-button&gt;</code></pre>
      </div>
      <gl-button class="push-comps" @click="pushComps" icon="el-icon-download" rect>添加到项目中</gl-button>
    </div>
    <div class="show">
      <h4>Input</h4>
      <p>基本使用</p>
      <gl-button>普通按钮</gl-button>
      <p>禁用</p>
      <gl-button disabled>禁用按钮</gl-button>
      <p>矩形按钮</p>
      <gl-button rect>矩形按钮</gl-button>
      <p>图标按钮</p>
      <gl-button icon="el-icon-female" rect>Female</gl-button>
      <p>圆形按钮</p>
      <gl-button circle>G</gl-button>
      <p>图标按钮</p>
      <gl-button icon="el-icon-female" circle></gl-button>
    </div>
  </div>
</template>
<script setup>
import glButton from './../components/glassMoreComps/gl-button.vue'
import { pushComponent } from './../util/postCompsName'
const pushComps = () => {
  pushComponent('Button')
}
</script>
<style scoped>
  .input-page {
    width: 100%;
    height: 100%;
    display: flex;
    border-top: 1px solid #fff;
    border-top-right-radius: 50px;
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
  .att::-webkit-scrollbar-track{
    display: none;
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
  }
  .show::-webkit-scrollbar{
    width: 8px;
  }
  .show::-webkit-scrollbar-track{
    display: none;
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
    margin-right: 50px;
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
