<template>
  <el-row>
    <el-col>
      <h3 class="titile">基本组件</h3>
      <el-menu>
        <el-menu-item
          v-for="(item, index) in compsList" :key="index"
          :index="Number(index)+1"
          @click="selectComp(item.name)"
        >
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
const compsList = [
  {
    name: 'Input 输入框',
    icon: 'el-icon-search'
  },
  {
    name: 'Button 按钮',
    icon: 'el-icon-location-outline'
  },
  {
    name: 'Dilog 对话框',
    icon: 'el-icon-document-copy'
  }
]
const router = useRouter()
const selectComp = (name) => {
  const path = name.split(' ')[0]
  router.push({
    path: `/${path}`
  })
}
</script>

<style>
.titile {
  padding-left: 2vw;
}

</style>
