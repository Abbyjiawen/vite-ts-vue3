import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initRouter } from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' 
import Store from "@/store/index"

let app = createApp(App)
initRouter(app);
app.use(Store);
app.use(ElementPlus);
app.mount('#app')
 