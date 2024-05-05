import {createApp} from 'vue'
import App from './App.vue'

//导入路由
import router from './router/index'

//全局导入Element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/font/TheFont.css'

// 全局导入echarts
import 'echarts'


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.component('v-chart', VueECharts) // register globally (or you can do it locally)
app.mount('#app')
