import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import '@/assets/style/common.less'
// 饿了吗
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
