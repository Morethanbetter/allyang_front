import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

// 设置axios默认配置
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || ""
axios.defaults.timeout = 10000

// 创建 Pinia 状态管理
const pinia = createPinia()

// 创建应用实例
const app = createApp(App)

// 使用插件 - 先使用pinia，再使用router
app.use(pinia)
app.use(router)

// 添加全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.error("Vue Error:", err)
  console.log("Error Info:", info)
  console.log("Component:", vm)
}

// 挂载应用
app.mount("#app")

// 调试信息
console.log("App initialized with router:", router)

