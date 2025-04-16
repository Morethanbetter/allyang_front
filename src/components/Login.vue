<template>
  <div class="login-container">
    <div class="login-form">
      <img src="https://placehold.co/600x400" alt="数智应用实验室 Logo" class="login-logo" />
      // https://placehold.co/600x400
      <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish">
        <a-form-item>
          <a-input v-model:value="formState.email" placeholder="账号邮箱">
            <template #prefix><UserOutlined class="site-form-item-icon" /></template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.code" placeholder="验证码">
            <template #prefix><LockOutlined class="site-form-item-icon" /></template>
          </a-input>
          <a-button type="link" @click="getVerificationCode">获取验证码</a-button>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="formState.remember">30天内保持登录</a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="formState.agree">我同意 <a>用户协议</a> 和 <a>隐私政策</a></a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button" :disabled="!formState.agree">
            登录
          </a-button>
          <a style="float: right" @click="switchToEmailLogin">邮箱登录</a>
        </a-form-item>
      </a-form>
      <div class="other-login-methods">
        <span>其它登录方式</span>
        <div class="login-icons">
          <a-tooltip title="Google">
            <a-icon type="google" class="icon" />
          </a-tooltip>
          <a-tooltip title="GitHub">
            <a-icon type="github" class="icon" />
          </a-tooltip>
          <a-tooltip title="WeChat">
            <a-icon type="wechat" class="icon" />
          </a-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup(props, { emit }) {
    const switchToEmailLogin = () => {
      emit('switch-login-type', 'email'); // 新增：触发切换事件
    };

    return {
      switchToEmailLogin,
    };
  },
});
</script>