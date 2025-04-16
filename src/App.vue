<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/useAuthStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const hasToken = ref(false);

onMounted(() => {
  // 检查用户是否已登录
  const token = localStorage.getItem('token');
  if (token) {
    hasToken.value = true;
    authStore.setToken(token);
    authStore.fetchUserInfo();
  }
});
</script>

<style>
.app-container {
  width: 100%;
  min-height: 100vh;
}
</style>