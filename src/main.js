import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'

// 导入视图组件
import HomeView from './views/HomeView.vue'     //添加主页视图
import LoginView from './views/LoginView.vue'   //添加登录视图
import ChatView from './views/ChatView.vue'
import ImageView from './views/ImageView.vue'
import VoiceView from './views/VoiceView.vue'  // 添加语音视图


// 创建路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    // { path: '/image', redirect: '/image' },
    { path: '/chat', name: 'chat', component: ChatView },
    { path: '/image', name: 'image', component: ImageView },
    { path: '/voice', name: 'voice', component: VoiceView },  // 添加语音路由
    // 其他路由...
  ]
})

// 创建 Pinia 状态管理
const pinia = createPinia()

// 创建应用实例
const app = createApp(App)

// 使用插件
app.use(router)
app.use(pinia)

// 挂载应用
app.mount('#app')