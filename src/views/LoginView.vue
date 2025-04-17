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
          <!-- 手机号登录表单 -->
          <div v-if="loginType === 'phone'">
            <!-- 手机号输入 -->
            <div class="form-group">
              <div class="phone-input">
                <!-- 国家区号选择器 -->
                <div class="country-code" @click="toggleCountryCodeDropdown">
                  <span>{{ selectedCountryCode }}</span>
                  <span class="dropdown-icon">▼</span>

                  <!-- 国家区号下拉菜单 -->
                  <div
                    class="country-code-dropdown"
                    v-if="showCountryCodeDropdown"
                  >
                    <div
                      v-for="code in countryCodes"
                      :key="code"
                      @click.stop="selectCountryCode(code)"
                      class="country-code-option"
                    >
                      {{ code }}
                    </div>
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
                  :disabled="codeSending || countdown > 0"
                  :class="{ 'disabled-btn': codeSending || countdown > 0 }"
                >
                  {{ codeButtonText }}
                </button>
              </div>
            </div>

            <!-- 邀请码 -->
            <div class="form-group">
              <input
                type="text"
                v-model="inviteCode"
                placeholder="邀请码 (仅支持手机注册, 选填)"
                class="password-input"
              />
            </div>
          </div>

          <!-- 邮箱登录表单 -->
          <div v-else>
            <!-- 邮箱输入 -->
            <div class="form-group">
              <input
                type="email"
                v-model="email"
                placeholder="账号邮箱"
                class="password-input"
              />
            </div>

            <!-- 密码输入 -->
            <div class="form-group">
              <div class="verification-code">
                <input
                  type="text"
                  v-model="verificationCode"
                  placeholder="邮件验证码"
                  class="code-input"
                />
                <button
                  @click="sendCode"
                  class="send-code-btn"
                  :disabled="codeSending || countdown > 0"
                  :class="{ 'disabled-btn': codeSending || countdown > 0 }"
                >
                  {{ codeButtonText }}
                </button>
              </div>
            </div>
          </div>

          <!-- 登录按钮 -->
          <div class="form-group">
            <button @click="handleLogin" class="login-btn">
              {{ loginType === 'phone' ? '注册 / 登录' : '登录' }}
            </button>
          </div>

          <!-- 选项区域 -->
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="rememberMe" />
              <label for="remember">30天内持续登录</label>
            </div>
            <div class="forgot-password">
              <a href="#" @click.prevent="toggleLoginType">
                {{ loginType === 'phone' ? '邮箱登录' : '手机号登录' }}
              </a>
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
import {sendVerificationCode, sendEmailVerificationCode} from '../api/auth';

const router = useRouter();
const authStore = useAuthStore();

// 登录类型（手机号/邮箱）
const loginType = ref('phone');

// 手机号登录表单数据
const phone = ref('');
const verificationCode = ref('');
const inviteCode = ref('');

// 邮箱登录表单数据
const email = ref('');
const emailPassword = ref('');

// 公共表单数据
const rememberMe = ref(false);
const agreeTerms = ref(false);
const isLogin = ref(true);

// 国家码下拉菜单状态
const showCountryCodeDropdown = ref(false);

// 验证码发送状态
const codeSending = ref(false);
const countdown = ref(0);
// 用于确保倒计时文本响应式更新
const codeButtonText = computed(() => {
  console.log("Computing button text, countdown:", countdown.value);
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
const countryCodes = ['+86', '+42', '+63', '+81', '+1', '+44', '+61', '+65'];

// 切换登录类型
function toggleLoginType() {
  loginType.value = loginType.value === 'phone' ? 'email' : 'phone';
}

// 切换国家码下拉菜单显示状态
function toggleCountryCodeDropdown() {
  showCountryCodeDropdown.value = !showCountryCodeDropdown.value;
  // 如果是打开下拉菜单，添加点击其他区域关闭菜单的事件
  if (showCountryCodeDropdown.value) {
    setTimeout(() => {
      document.addEventListener('click', closeDropdown);
    }, 0);
  }
}

// 选择国家码
function selectCountryCode(code) {
  selectedCountryCode.value = code;
  showCountryCodeDropdown.value = false;
}

// 关闭下拉菜单
function closeDropdown(event) {
  const countryCodeEl = document.querySelector('.country-code');
  const dropdownEl = document.querySelector('.country-code-dropdown');

  // 如果点击的不是国家码区域或下拉菜单区域，则关闭下拉菜单
  if (countryCodeEl && !countryCodeEl.contains(event.target) &&
      dropdownEl && !dropdownEl.contains(event.target)) {
    showCountryCodeDropdown.value = false;
    document.removeEventListener('click', closeDropdown);
  }
}

onMounted(() => {
  // 组件挂载后，检查是否存在倒计时，如果存在则恢复倒计时
  let savedCountdown = sessionStorage.getItem('countdown');
  if (savedCountdown) {
    savedCountdown = parseInt(savedCountdown);

    // 检查保存的倒计时是否有效（可能是之前的会话保存的）
    const savedTime = sessionStorage.getItem('countdownTimestamp');
    if (savedTime) {
      const elapsedSeconds = Math.floor((Date.now() - parseInt(savedTime)) / 1000);
      savedCountdown = Math.max(0, savedCountdown - elapsedSeconds);
    }
  } else {
    savedCountdown = 0;
  }

  countdown.value = savedCountdown;
  if (countdown.value > 0) {
    startCountdown();
  }
});

onBeforeUnmount(() => {
  // 组件卸载前清除定时器和事件监听
  if (timer) {
    clearInterval(timer);
    timer = null;
  }

  document.removeEventListener('click', closeDropdown);
});

// 发送验证码
async function sendCode() {
  if (codeSending.value || countdown.value > 0) return;

  try {
    codeSending.value = true;
    console.log("开始发送验证码");

    if (loginType.value === 'phone') {
      console.log("发送手机验证码到:", selectedCountryCode.value + phone.value);
      // 调用 API 发送验证码
      await sendVerificationCode(selectedCountryCode.value + phone.value);
      console.log("手机验证码发送成功");
    } else {
      console.log("发送邮箱验证码到:", email.value);
      // 调用 API 发送验证码
      await sendEmailVerificationCode(email.value);
      console.log("邮箱验证码发送成功");
    }

    // 开始倒计时
    countdown.value = 60;
    console.log("设置倒计时:", countdown.value);
    sessionStorage.setItem('countdown', countdown.value.toString());
    sessionStorage.setItem('countdownTimestamp', Date.now().toString());
    startCountdown();
  } catch (error) {
    console.error("发送验证码失败:", error);
    alert('发送验证码结果: ' + (error.message || '未知错误'));
  } finally {
    codeSending.value = false;
  }
}

function startCountdown() {
  if (timer) {
    console.log("Clearing existing timer");
    clearInterval(timer);
  }

  timer = setInterval(() => {
    countdown.value--;
    sessionStorage.setItem('countdown', countdown.value.toString());

    if (countdown.value <= 0) {
      console.log("Countdown finished");
      clearInterval(timer);
      timer = null;
      sessionStorage.removeItem('countdown');
      sessionStorage.removeItem('countdownTimestamp');
    }
  }, 1000);
}

// 登录/注册
async function handleLogin() {
  // 手机号登录验证
  if (loginType.value === 'phone') {
    if (!phone.value) {
      alert('请输入手机号');
      return;
    }

    if (!verificationCode.value) {
      alert('请输入验证码');
      return;
    }
  } else {
    // 邮箱登录验证
    if (!email.value) {
      alert('请输入邮箱');
      return;
    }

    if (!emailPassword.value) {
      alert('请输入密码');
      return;
    }

    // 验证邮箱格式
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      alert('请输入有效的邮箱地址');
      return;
    }
  }

  if (!agreeTerms.value) {
    alert('请同意用户协议和隐私政策');
    return;
  }

  try {
    let result;

    if (loginType.value === 'phone') {
      // 手机号登录/注册
      const userData = {
        phone: selectedCountryCode.value + phone.value,
        code: verificationCode.value,
        password: inviteCode.value,
        rememberMe: rememberMe.value
      };

      if (isLogin.value) {
        result = await authStore.loginUser(userData);
      } else {
        result = await authStore.registerUser(userData);
      }
    } else {
      // 邮箱登录
      const userData = {
        email: email.value,
        password: emailPassword.value,
        rememberMe: rememberMe.value
      };

      // 调用邮箱登录方法（需要在authStore中添加）
      result = await authStore.loginWithEmail(userData);
    }

    if (result.success) {
      router.push('/main');
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
  overflow: visible; /* 修改为visible以显示溢出的下拉菜单 */
  position: relative;
}

/* 国家码选择器 */
.country-code {
  width: 80px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
  position: relative; /* 确保下拉菜单定位正确 */
  z-index: 2; /* 确保下拉菜单在其他元素之上 */
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 5px;
  color: #999;
}

/* 国家码下拉菜单样式 */
.country-code-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 80px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  margin-top: 2px;
  max-height: 200px;
  overflow-y: auto;
}

.country-code-option {
  padding: 8px 12px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s;
}

.country-code-option:hover {
  background-color: #f5f5f5;
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

/* 新增样式用于禁用状态 */
.disabled-btn {
  background-color: #b0bec5 !important;
  cursor: not-allowed !important;
  opacity: 0.7;
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