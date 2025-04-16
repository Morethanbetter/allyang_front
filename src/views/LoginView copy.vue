<template>
  <div class="login-container">
    <!-- 左侧AI图像区域 -->
    <div class="login-left">
      <video class="ai-video" autoplay loop muted>
        <source src="../static/Home-login-view.mp4" type="video/mp4">
        您的浏览器不支持视频播放。
      </video>
    </div>
    
    <!-- 右侧登录表单区域 -->
    <div class="login-right">
      <!-- 语言选择 -->
      <div class="language-selector">
        <!-- 新增图标 -->
        <img src="../static/language1.png" alt="图标" class="language-icon" />
        <span class="active">{{ selectedLanguage }}</span>
        <span class="lang-icon">▼</span>
        <div class="language-dropdown">
          <div 
            v-for="lang in languages" 
            :key="lang" 
            @click="selectLanguage(lang)"
            class="language-option"
          >
            {{ lang }}
          </div>
        </div>
      </div>
      
      <!-- 登录表单 -->
      <div class="login-form-container">
        <!-- Logo -->
        <div class="logo-container">
          <img src="../static/home_logo.png" alt="数智应用实验室" class="logo" />
        </div>
        
        <!-- 表单 -->
        <div class="login-form">
          <!-- 手机号输入 -->
          <div class="form-group">
            <div class="phone-input" @mouseover="showCountryCodeDropdown = true" @mouseleave="showCountryCodeDropdown = false">
              <div class="country-code">
                <span>{{ selectedCountryCode }}</span>
                <span class="dropdown-icon">▼</span>
              </div>
              <div 
                class="country-code-dropdown" 
                v-if="showCountryCodeDropdown"
              >
                <div
                  v-for="country_code in countryCodes"
                  :key="country_code"
                  @click="selectCountryCode(country_code)"
                  class="country-code-option"
                >
                  {{ country_code }}
                </div>
              </div>
              <input 
                type="text" 
                v-model="phone" 
                placeholder="您的手机号" 
                class="phone-number"
              />
            </div>
          </div>
          
          <!-- 验证码输入 -->
          <div class="form-group">
            <div class="verification-code">
              <input 
                type="text" 
                v-model="verificationCode" 
                placeholder="短信验证码" 
                class="code-input"
              />
              <button 
                @click="sendCode" 
                class="send-code-btn"
                :disabled="codeSending"
              >
                {{ codeButtonText }}
              </button>
            </div>
          </div>
          
          <!-- 密码输入 -->
          <div class="form-group">
            <input 
              type="password" 
              v-model="password" 
              placeholder="邀请码 (仅支持手机注册, 选填)"
              class="password-input"
            />
          </div>
          
          <!-- 登录按钮 -->
          <div class="form-group">
            <button @click="handleLogin" class="login-btn">
              注册 / 登录
            </button>
          </div>
          
          <!-- 选项区域 -->
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="rememberMe" />
              <label for="remember">30天内持续登录</label>
            </div>
            <div class="forgot-password">
              <a href="#">忘记密码</a>
            </div>
          </div>
          
          <!-- 协议同意 -->
          <div class="terms">
            <input type="checkbox" id="agree" v-model="agreeTerms" />
            <label for="agree">
              我同意 <a href="#" class="terms-link">用户协议</a> 和 
              <a href="#" class="privacy-link">隐私政策</a>
            </label>
          </div>
          
          <!-- 第三方登录 -->
          <div class="third-party-login">
            <p>其它登录方式</p>
            <div class="login-options">
              <button class="google-login">
                <img src="../static/google-1.svg" alt="Google" />
              </button>
              <button class="github-login">
                <img src="../static/github-mark.svg" alt="GitHub" />
              </button>
              <button class="wechat-login">
                <img src="../static/wechat.png" alt="WeChat" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 页脚 -->
      <div class="footer">
        <p>© 2025 众扬汇科技 & 众扬汇资本版权所有</p>
        <p>粤 ICP 备 16086992 号</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/useAuthStore';
import { sendVerificationCode } from '../api/auth';

const router = useRouter();
const authStore = useAuthStore();

// 表单数据
const countryCode = ref('+86');
const phone = ref('');
const verificationCode = ref('');
const password = ref('');
const rememberMe = ref(false);
const agreeTerms = ref(false);
const isLogin = ref(true);

// 验证码发送状态
const codeSending = ref(false);
const countdown = ref(0);
const codeButtonText = computed(() => {
  return countdown.value > 0 ? `${countdown.value}秒后重新获取` : '获取验证码';
});

let timer = null;

// 语言切换
const selectedLanguage = ref('CN');
const languages = ['CN', 'EN'];

function selectLanguage(lang) {
  selectedLanguage.value = lang;
}

// 国家码切换
const selectedCountryCode = ref('+86');
const countryCodes = ['+86', '+42', '+63', "+81"];

function selectCountryCode(country_code) {
  selectedCountryCode.value = country_code;
}

onMounted(() => {
  // 组件挂载后，检查是否存在倒计时，如果存在则恢复倒计时
  let savedCountdown = sessionStorage.getItem('countdown');
  if (savedCountdown) {
    savedCountdown = parseInt(savedCountdown);
  } else {
    savedCountdown = 0;
  }

  countdown.value = savedCountdown;
  if (countdown.value > 0) {
    startCountdown();
  }
});

onBeforeUnmount(() => {
  // 组件卸载前清除定时器
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
});

// 发送验证码
async function sendCode() {
  if (codeSending.value || countdown.value > 0) return;
  
  if (!phone.value) {
    alert('请输入手机号');
    return;
  }
  
  try {
    codeSending.value = true;
    await sendVerificationCode(selectedCountryCode.value + phone.value);
    
    // 开始倒计时
    countdown.value = 60;
    sessionStorage.setItem('countdown', countdown.value.toString());
    startCountdown();
  } catch (error) {
    alert('发送验证码失败: ' + error.message);
  } finally {
    codeSending.value = false;
  }
}

function startCountdown() {
  if (timer) clearInterval(timer);
  
  timer = setInterval(() => {
    countdown.value--;
    sessionStorage.setItem('countdown', countdown.value.toString());

    if (countdown.value <= 0) {
      clearInterval(timer);
      timer = null;
      sessionStorage.removeItem('countdown');
    }
  }, 1000);
}

// 登录/注册
async function handleLogin() {
  if (!phone.value) {
    alert('请输入手机号');
    return;
  }
  
  if (!verificationCode.value) {
    alert('请输入验证码');
    return;
  }
  
  if (!agreeTerms.value) {
    alert('请同意用户协议和隐私政策');
    return;
  }
  
  const userData = {
    phone: selectedCountryCode.value + phone.value,
    code: verificationCode.value,
    password: password.value,
    rememberMe: rememberMe.value
  };
  
  try {
    let result;
    if (isLogin.value) {
      result = await authStore.loginUser(userData);
    } else {
      result = await authStore.registerUser(userData);
    }
    
    if (result.success) {
      router.push('/main/chat');
    } else {
      alert(result.error || '操作失败');
    }
  } catch (error) {
    alert('操作失败: ' + error.message);
  }
}

</script>

<style scoped>
/* 全局容器 */
.login-container {
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}

/* 左侧AI图像区域 */
.login-left {
  flex: 1;
  background-color: #000;
  position: relative;
  overflow: hidden;
}

/* 新增视频样式 */
.ai-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 右侧登录表单区域 */
.login-right {
  width: 50%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* 语言选择器 */
.language-selector {
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.language-selector .active {
  font-weight: 500;
  margin-right: 4px;
}

.lang-icon {
  font-size: 10px;
  color: #999;
}

/* 新增图标样式 */
.language-icon {
  width: 20px; /* 调整图标大小 */
  height: 20px;
  margin-left: 4px;
}

/* 语言下拉菜单样式 */
.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: none;
}

.language-selector:hover .language-dropdown {
  display: block;
}

.language-option {
  padding: 8px 12px;
  cursor: pointer;
}

.language-option:hover {
  background-color: #f5f5f5;
}

/* 国家码下拉菜单样式 */
.country-code-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: none; /* 修改默认显示为隐藏 */
}

/* 父容器定位调整 */
.phone-input .active {
  position: relative; /* 确保绝对定位基准 */
}

.country-code-option {
  padding: 8px 12px;
  cursor: pointer;
}

.country-code-option:hover {
  background-color: #f5f5f5;
}

/* 登录表单容器 */
.login-form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
}

/* Logo */
.logo-container {
  margin-bottom: 40px;
  text-align: center;
}

.logo {
  height: 60px;
}



/* 登录表单 */
.login-form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px;
}

/* 手机号输入 */
.phone-input {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.country-code {
  width: 80px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 5px;
  color: #999;
}

.phone-number {
  flex: 1;
  border: none;
  padding: 12px 15px;
  outline: none;
  font-size: 14px;
}

/* 验证码输入 */
.verification-code {
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.code-input {
  flex: 1;
  border: none;
  padding: 12px 15px;
  outline: none;
  font-size: 14px;
}

.send-code-btn {
  width: 120px;
  background-color: #39b9f0;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;
}

.send-code-btn:hover {
  background-color: #2aa7de;
}

.send-code-btn:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

/* 密码输入 */
.password-input {
  width: 92%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
}

/* 登录按钮 */
.login-btn {
  width: 100%;
  padding: 12px 15px;
  background-color: #39b9f0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2aa7de;
}

/* 选项区域 */
.form-options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 5px;
}

.forgot-password a {
  color: #39b9f0;
  text-decoration: none;
}

/* 协议同意 */
.terms {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 30px;
  font-size: 14px;
}

.terms-link, .privacy-link {
  color: #39b9f0;
  text-decoration: none;
}

/* 第三方登录 */
.third-party-login {
  text-align: center;
  margin-top: 20px;
}

.third-party-login p {
  margin-bottom: 15px;
  color: #666;
  position: relative;
  font-size: 14px;
}

.third-party-login p::before,
.third-party-login p::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 30%;
  height: 1px;
  background-color: #e0e0e0;
}

.third-party-login p::before {
  left: 0;
}

.third-party-login p::after {
  right: 0;
}

.login-options {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.google-login, .github-login, .wechat-login {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
}

.google-login:hover, .github-login:hover, .wechat-login:hover {
  transform: scale(1.1);
}

.google-login img, .github-login img, .wechat-login img {
  width: 20px;
  height: 20px;
}

/* 页脚 */
.footer {
  text-align: center;
  color: #999;
  font-size: 12px;
  padding: 20px 0;
}

.footer p {
  margin: 5px 0;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .login-right {
    width: 60%;
  }
  
  .login-left {
    width: 40%;
  }
}

@media (max-width: 992px) {
  .login-form-container {
    padding: 0 40px;
  }
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
  
  .login-left {
    display: none;
  }
  
  .login-right {
    width: 100%;
  }
}
</style>