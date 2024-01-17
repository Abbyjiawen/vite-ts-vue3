import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { setupStore } from "@/store";
import axios from 'axios'

const app = createApp(App)
app.provide('$axios', axios)

app.use(router);
setupStore(app);
app.use(ElementPlus);
app.mount('#app')
