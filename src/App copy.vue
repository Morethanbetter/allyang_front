<template>
  <div class="app-wrapper">
    <Sidebar />
    <main class="main-wrapper">
      <Header />
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/layout/Sidebar.vue'
import Header from './components/layout/Header.vue'
</script>

<style>
/* :root {
  --sidebar-width: 260px;
  --header-height: 64px;
  --primary-color: #6c2bd9;
  --border-color: #e0e0e0;
} */
@import './assets/styles/variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-primary);
  background-color: var(--primary-bg);
  margin: 0; /* 添加 body 元素的初始 margin */
}

.app-wrapper {
  display: flex;
  min-height: 100vh;
  /* background-color: #f0e6ff; */
}

.main-wrapper {
  flex: 1;
  margin-left: var(--sidebar-width);
  min-width: 0;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8; /* 设置主要内容区域的背景色 */
  padding: 20px;
}
/* 通用样式 */
.slider::-webkit-slider-thumb {
  background: var(--primary-color) !important;
}

button {
  cursor: pointer;
}

input, select, textarea {
  outline: none;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--primary-bg) !important;
}
</style>