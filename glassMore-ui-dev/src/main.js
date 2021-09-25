import { createApp } from 'vue'
import App from './App.vue'
import GlDialog from './components/gl-dialog.vue'
import glModal from './components/gl-modal.vue'
import './assets/fonts/iconfont.css'
const app = createApp(App)

app.component('gl-dialog', GlDialog)
app.component('gl-modal', glModal)
app.mount("#app")
