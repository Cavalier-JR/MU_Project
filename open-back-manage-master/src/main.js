import {createApp} from 'vue'
import App from './App.vue'

//导入路由
import router from './router/index'

//全局导入Element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/font/TheFont.css'

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#app')
