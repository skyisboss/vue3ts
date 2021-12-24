import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from "./router"
import i18n from "./i18n";
import { useNaiveUI } from "./style/naive-ui"
import 'remixicon/fonts/remixicon.css' // 图标字体
import './style/app.scss'
import "../mockjs";

const app = createApp(App)
useNaiveUI(app)

app.use(i18n).use(store).use(router).mount('#app')
