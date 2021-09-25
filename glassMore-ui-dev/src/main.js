// import { createApp } from 'vue'
// import App from './App.vue'


// createApp(App).mount('#app')

import Vue from 'vue'
import App from './App.vue'
// 导入button组件
import glCard from './components/button.vue'
 
Vue.config.productionTip = false
 
// 注册组件
Vue.component(glCard.name, glCard)
 
new Vue({
  render: h => h(App)
}).$mount('#app')
