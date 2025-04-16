<template>
  <div class="sidebar" :class="{ 'sidebar-collapsed': collapsed }">
    <div class="sidebar-header">
      <img src="/static/logo-9.png" alt="Logo" class="logo" />
      <button @click="toggleSidebar" class="toggle-btn">
        <i class="toggle-icon"></i>
      </button>
    </div>

    <div class="sidebar-content">
      <nav class="sidebar-nav">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: currentPath === item.path }"
        >
          <i :class="item.icon"></i>
          <span v-if="!collapsed">{{ item.title }}</span>
        </router-link>
      </nav>
    </div>

    <div class="sidebar-footer">
      <div class="user-info" v-if="!collapsed">
        <img :src="userAvatar" alt="User" class="user-avatar" />
        <div class="user-details">
          <p class="user-name">{{ userName }}</p>
          <p class="user-role">{{ userRole }}</p>
        </div>
      </div>
      <button @click="logout" class="logout-btn">
        <i class="logout-icon"></i>
        <span v-if="!collapsed">退出登录</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '../../stores/useAuthStore';

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();

const collapsed = ref(false);

const menuItems = [
  { title: '聊天', path: '/main/chat', icon: 'chat-icon' },
  { title: '图片', path: '/main/image', icon: 'image-icon' },
  { title: '语音', path: '/main/voice', icon: 'voice-icon' },
  { title: '会员', path: '/main/vip', icon: 'vip-icon' }
];

const currentPath = computed(() => route.path);

const userName = computed(() => authStore.user?.name || '用户');
const userRole = computed(() => authStore.user?.role || '普通用户');
const userAvatar = computed(() => authStore.user?.avatar || '/static/logo.jpg');

function toggleSidebar() {
  collapsed.value = !collapsed.value;
}

async function logout() {
  try {
    await authStore.logoutUser();
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  }
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  height: 100%;
  background-color: #1a1a2e;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
}

.sidebar-collapsed {
  width: 70px;
}

.sidebar-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  height: 32px;
}

.toggle-btn {
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.2s;
  margin-bottom: 4px;
  border-radius: 4px;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background-color: #3a86ff;
}

.nav-item i {
  margin-right: 12px;
  font-size: 18px;
}

.sidebar-collapsed .nav-item {
  justify-content: center;
  padding: 12px 0;
}

.sidebar-collapsed .nav-item i {
  margin-right: 0;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
}

.user-details {
  overflow: hidden;
}

.user-name {
  font-weight: 500;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.logout-btn {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
}

.logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logout-icon {
  margin-right: 12px;
}

.sidebar-collapsed .logout-btn {
  justify-content: center;
}

.sidebar-collapsed .logout-icon {
  margin-right: 0;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    z-index: 100;
    transform: translateX(-100%);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }
}
</style>