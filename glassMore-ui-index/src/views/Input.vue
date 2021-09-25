<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">输入框</h3>
      <div class="card">
        <p>基本使用</p>
        <pre><code> &lt;gl-input placeholder="请输入文本" v-model="value" /&gt;</code></pre>
      </div>
      <div class="card">
        <p>禁用</p>
        <pre><code> &lt;gl-input placeholder="请输入文本" disabled /&gt;</code></pre>
      </div>
      <div class="card">
        <p>图标</p>
        <pre><code> &lt;gl-input placeholder="请输入文本" icon="el-icon-search" /&gt;</code></pre>
      </div>
      <div class="card">
        <p>密码</p>
        <pre><code> &lt;gl-input placeholder="请输入密码" type="password" v-model="password" /&gt;</code></pre>
      </div>
      <div class="card">
        <p>可清空</p>
        <pre><code> &lt;gl-input placeholder="请输入文本" v-model="msg.data" clearable /&gt;</code></pre>
      </div>
      <div class="pushInput" @click="pushInput">添加到项目中</div>
    </div>
    <div class="show">
      <h4>Input</h4>
      <p>基本使用</p>
      <glInput placeholder="请输入文本"/>
      <p>禁用</p>
      <glInput placeholder="请输入文本" disabled/>
      <p>图标</p>
      <glInput placeholder="请输入搜索内容" icon="el-icon-search"/>
      <p>密码</p>
      <glInput placeholder="请输入密码" type="password" v-model="msg.password"/>
      <p>可清空</p>
      <glInput placeholder="请输入文本" v-model="msg.data" clearable/>
    </div>
  </div>
</template>
<script setup>
import glInput from './../components/glassMoreComps/gl-input.vue'
import { reactive } from 'vue'
const msg = reactive({
  data: '便随风消逝',
  password: '当你凝视深渊的时候.....'
})
const pushInput = async () => {
  const data = {
    compName: 'input'
  }

  const res = await fetch('/addMoudle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  })
  console.log(res)
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
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .show {
    padding: 10px 20px;
    width: 35%;
    height: 100%;
  }
  p {
    margin-left: 10px;
  }
  .pushInput {
    align-self: flex-end;
    margin-right: 50px;
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
  }
</style>
