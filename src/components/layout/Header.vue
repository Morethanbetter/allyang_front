<template>
  <header class="header">
    <h1 class="page-title">{{ currentPageTitle }}</h1>
    <div class="user-info">
      <div class="tokens">
        <span class="token-icon">💰</span>
        <span class="token-count">10</span>
      </div>
      <div class="user-avatar">
        <!-- <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" class="avatar" /> -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentPageTitle = computed(() => {
  switch (route.name) {
    case 'chat': return '文本对话'
    case 'image': return '图像生成'
    case 'voice': return '语音生成'
    case 'video': return '视频生成'
    default: return ''
  }
})
</script>

<style scoped>
.header {
  height: var(--header-height);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tokens {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  background-color: var(--primary-light);
  border-radius: 16px;
  color: var(--primary-dark);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid var(--primary-light);
}
</style>