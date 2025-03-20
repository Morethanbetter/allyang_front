<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo-container">
        <!-- <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2025-03-19_10-50-21-wuVODkD1dWgI0SbYH0P3SO7LR9yg5J.png" alt="DeepSeek Logo" class="logo" /> -->
      </div>
      
      <div class="tabs">
        <button 
          :class="['tab-btn', { active: activeTab === 'verification' }]" 
          @click="activeTab = 'verification'"
        >
          验证码登录
        </button>
        <button 
          :class="['tab-btn', { active: activeTab === 'password' }]" 
          @click="activeTab = 'password'"
        >
          密码登录
        </button>
      </div>
      
      <div class="login-notice">
        您所在地区仅支持手机号/微信/邮箱登录
      </div>
      
      <!-- 验证码登录表单 -->
      <form v-if="activeTab === 'verification'" @submit.prevent="handleVerificationLogin" class="login-form">
        <div class="input-group">
          <div class="phone-input">
            <div class="country-code">+86</div>
            <input 
              type="text" 
              v-model="phone" 
              placeholder="请输入手机号" 
              class="form-input"
            />
          </div>
        </div>
        
        <div class="input-group verification-group">
          <input 
            type="text" 
            v-model="verificationCode" 
            placeholder="请输入验证码" 
            class="form-input"
          />
          <button 
            type="button" 
            @click="sendVerificationCode" 
            class="verification-btn"
            :disabled="cooldown > 0"
          >
            {{ cooldown > 0 ? `${cooldown}秒后重试` : '发送验证码' }}
          </button>
        </div>
        
        <div class="agreement">
          <span>我已阅读并同意</span>
          <a href="#" class="agreement-link">《用户协议》</a>
          <span>和</span>
          <a href="#" class="agreement-link">《隐私政策》</a>
          <span>，未注册的手机号将自动创建账号</span>
        </div>
        
        <button type="submit" class="submit-btn">登录</button>
        
        <div class="divider">
          <span>或</span>
        </div>
        
        <button type="button" class="wechat-btn">
          <!-- <img src="/placeholder.svg?height=24&width=24" alt="WeChat" class="wechat-icon" /> -->
          使用微信扫码登录
        </button>
      </form>
      
      <!-- 密码登录表单 -->
      <form v-else @submit.prevent="handlePasswordLogin" class="login-form">
        <div class="input-group">
          <input 
            type="text" 
            v-model="username" 
            placeholder="手机号/邮箱" 
            class="form-input"
          />
        </div>
        
        <div class="input-group">
          <input 
            type="password" 
            v-model="password" 
            placeholder="密码" 
            class="form-input"
          />
        </div>
        
        <div class="forgot-password">
          <a href="#" class="forgot-link">忘记密码?</a>
        </div>
        
        <button type="submit" class="submit-btn">登录</button>
        
        <div class="divider">
          <span>或</span>
        </div>
        
        <button type="button" class="wechat-btn">
          <!-- <img src="/placeholder.svg?height=24&width=24" alt="WeChat" class="wechat-icon" /> -->
          使用微信扫码登录
        </button>
      </form>
    </div>
    
    <div class="footer">
      <span>浙ICP备2023025841号 · </span>
      <a href="#" class="footer-link">联系我们</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeTab = ref('verification')
const phone = ref('')
const verificationCode = ref('')
const username = ref('')
const password = ref('')
const cooldown = ref(0)

// 发送验证码
const sendVerificationCode = () => {
  if (!phone.value) {
    alert('请输入手机号')
    return
  }
  
  // 模拟发送验证码
  alert(`验证码已发送至 ${phone.value}`)
  
  // 开始倒计时
  cooldown.value = 60
  const timer = setInterval(() => {
    cooldown.value--
    if (cooldown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)
}

// 验证码登录
const handleVerificationLogin = async () => {
  if (!phone.value) {
    alert('请输入手机号')
    return
  }
  
  if (!verificationCode.value) {
    alert('请输入验证码')
    return
  }
  
  try {
    // 这里应该调用登录API
    console.log('验证码登录', { phone: phone.value, code: verificationCode.value })
    
    // 模拟登录成功
    setTimeout(() => {
      router.push('/chat')
    }, 1000)
  } catch (error) {
    console.error('登录失败', error)
    alert('登录失败，请重试')
  }
}

// 密码登录
const handlePasswordLogin = async () => {
  if (!username.value) {
    alert('请输入手机号/邮箱')
    return
  }
  
  if (!password.value) {
    alert('请输入密码')
    return
  }
  
  try {
    // 这里应该调用登录API
    console.log('密码登录', { username: username.value, password: password.value })
    
    // 模拟登录成功
    setTimeout(() => {
      router.push('/chat')
    }, 1000)
  } catch (error) {
    console.error('登录失败', error)
    alert('登录失败，请重试')
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 24px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 32px;
  margin-bottom: 24px;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.logo {
  height: 40px;
}

.tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 24px;
}

.tab-btn {
  flex: 1;
  background: none;
  border: none;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  color: var(--text-secondary);
  position: relative;
}

.tab-btn.active {
  color: var(--primary-color);
  font-weight: 500;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.login-notice {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 24px;
  font-size: 14px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.input-group {
  position: relative;
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.country-code {
  padding: 12px;
  background-color: #f8f9fa;
  border-right: 1px solid #ddd;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.phone-input .form-input {
  border: none;
}

.verification-group {
  display: flex;
  gap: 8px;
}

.verification-btn {
  white-space: nowrap;
  padding: 0 16px;
  background-color: white;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.verification-btn:hover:not(:disabled) {
  background-color: var(--primary-light);
}

.verification-btn:disabled {
  border-color: #ddd;
  color: var(--text-light);
  cursor: not-allowed;
}

.agreement {
  font-size: 12px;
  color: var(--text-light);
  line-height: 1.5;
}

.agreement-link {
  color: var(--primary-color);
  text-decoration: none;
}

.forgot-password {
  text-align: right;
}

.forgot-link {
  font-size: 14px;
  color: var(--primary-color);
  text-decoration: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: var(--primary-dark);
}

.divider {
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: var(--text-light);
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background-color: #eee;
}

.divider span {
  padding: 0 16px;
  font-size: 14px;
}

.wechat-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.wechat-btn:hover {
  background-color: #f8f9fa;
}

.wechat-icon {
  width: 20px;
  height: 20px;
}

.footer {
  color: var(--text-light);
  font-size: 12px;
}

.footer-link {
  color: var(--text-light);
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>