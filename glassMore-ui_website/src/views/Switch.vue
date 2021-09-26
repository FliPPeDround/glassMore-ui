/* eslint-disable no-lone-blocks */
<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">开关</h3>
      <div class="card">
        <p>基本使用</p>
        <pre><code> &lt;gl-switch&gt;  &lt;/gl-switch&gt;</code></pre>
      </div>
      <div class="card">
        <p>禁用</p>
        <pre><code> &lt;gl-switch disabled&gt;  &lt;/gl-switch&gt;</code></pre>
      </div>
      <div class="card">
        <p>自定义背景</p>
        <pre><code> &lt;gl-switch active-color="pink" inactive-color="green"&gt;  &lt;/gl-switch&gt;</code></pre>
      </div>
      <gl-button
        class="push-comps"
        @click="pushComps"
        icon="el-icon-download"
        rect
        >添加到项目中</gl-button
      >
    </div>
    <div class="show">
      <h4>Switch</h4>
      <p>基本使用</p>
      <gl-switch></gl-switch>
      <p>禁用</p>
      <gl-switch disabled></gl-switch>
      <p>自定义背景</p>
      <gl-switch active-color="#00BFFF" inactive-color="#F08080"></gl-switch>
    </div>
  </div>
</template>
<script setup>
import glButton from './../components/glassMoreComps/gl-button.vue'
import glSwitch from './../components/glassMoreComps/gl-switch.vue'
import { pushComponent } from './../util/postCompsName'
const pushComps = () => {
  pushComponent('Switch')
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
.att::-webkit-scrollbar {
  width: 8px;
}
.att::-webkit-scrollbar-track {
  display: none;
}
.att::-webkit-scrollbar-thumb {
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
.show::-webkit-scrollbar {
  width: 8px;
}
.show::-webkit-scrollbar-track {
  display: none;
}
.show::-webkit-scrollbar-thumb {
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
