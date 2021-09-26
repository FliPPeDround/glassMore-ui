<template>
  <div class="input-page">
    <div class="att">
      <h3 class="att-title">工具包</h3>
      <div class="card">
        <p>快速计算VM/VH</p>
         &lt;gl-computer &gt; &lt;gl-computer/&gt;
        <gl-button class="push-comps" @click="pushComps('Computer')" icon="el-icon-download" rect>添加到项目中</gl-button>
      </div>
      <div class="card">
        <p>打字机特效</p>
         &lt;gl-typing &gt; 这里是自定义的文本，默认回显示诗句 &lt;gl-typing/&gt;
        <gl-button class="push-comps" @click="pushComps('Typing')" icon="el-icon-download" rect>添加到项目中</gl-button>
      </div>
    </div>
    <div class="show">
      <h4>Popconfirm</h4>
      <p>暂无演示</p>
    </div>
  </div>
</template>
<script setup>
import glButton from './../components/glassMoreComps/gl-button.vue'
import { ElNotification } from 'element-plus'
const pushComps = async (compName) => {
  const data = {
    compName: compName
  }

  const res = await fetch('/addTools', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: JSON.stringify(data)
  })
  switch (res.status) {
    // eslint-disable-next-line no-lone-blocks
    case 404: {
      ElNotification({
        title: 'Error',
        message: '与服务器连接失败',
        type: 'error'
      })
    }
      break
    // eslint-disable-next-line no-lone-blocks
    case 201: {
      ElNotification({
        title: 'Success',
        message: `${compName}组件已成功添加到项目`,
        type: 'success'
      })
    }
      break
    // eslint-disable-next-line no-lone-blocks
    case 206: {
      ElNotification({
        title: 'Warning',
        message: `${compName}组件已经添加成功`,
        type: 'warning'
      })
    }
      break
  }
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
    display: block;
    align-self: flex-end;
    margin-right: 50px;
    margin-top: 1vw;
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
