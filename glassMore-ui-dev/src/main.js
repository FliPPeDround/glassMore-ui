import { createApp } from 'vue'
import App from './App.vue'
import GlDialog from './components/gl-dialog.vue'
import './assets/fonts/iconfont.css'
const app = createApp(App)

app.component('gl-dialog', GlDialog)
app.mount("#app")
