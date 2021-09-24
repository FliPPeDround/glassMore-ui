import { createApp } from 'vue'
import Home from './Home.vue'
import ElementPlus from 'element-plus'

const app = createApp(Home)

app.use(ElementPlus)
createApp(Home).mount('#app')
