<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="../../static/logo-9.png" alt="Digital Application Laboratory" class="logo-img" />
    </div>
    <nav class="nav-section">
      <div class="nav-section">
        <div class="nav-item">
          <span class="nav-icon">📋</span>
          <span>行业分类</span>
        </div>
        <div class="nav-item">
          <span class="nav-icon">⚙️</span>
          <span>细分场景</span>
        </div>
      </div>
      
      <div class="nav-section">
        <router-link to="/chat" class="nav-item">
          <span class="nav-icon">💬</span>
          <span>文本对话</span>
        </router-link>
        <router-link to="/image" class="nav-item">
          <span class="nav-icon">🖼️</span>
          <span>图像生成</span>
        </router-link>
        <router-link to="/voice" class="nav-item">
          <span class="nav-icon">🎤</span>
          <span>语音生成</span>
        </router-link>
        <router-link to="/video" class="nav-item">
          <span class="nav-icon">🎬</span>
          <span>视频生成</span>
        </router-link>
        <div class="nav-item">
          <div class="nav-icon">🔰</div>
          <span>3D模型生成</span>
        </div>
      </div>
      <div class="nav-section">
          <div class="nav-item">
            <div class="nav-icon">👤</div>
            <span>账户管理</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🔑</div>
            <span>实名认证</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🔌</div>
            <span>API 密钥</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">📦</div>
            <span>等级包</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">💰</div>
            <span>余额充值</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">📝</div>
            <span>使用限制</span>
          </div>
        </div>
        
        <div class="nav-section">
          <div class="nav-item">
            <div class="nav-icon">🔄</div>
            <span>活动中心</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🔖</div>
            <span>我的邀请</span>
          </div>
        </div>
        
        <div class="nav-section">
          <div class="nav-item">
            <div class="nav-icon">📞</div>
            <span>联系我们</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">📚</div>
            <span>文档中心</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🤖</div>
            <span>扫码加小助手</span>
          </div>
        </div>
      <!-- Additional nav sections... -->
    </nav>
  </aside>
</template>

<script setup>
// No additional logic needed
</script>
// 
<!-- <style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--sidebar-bg);
  color: black;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
}

.logo {
  display: flex;
  justify-content: center;
  flex-direction: column; /* 将图标和文字垂直排列 */
  align-items: center;
  max-height: 70px;
  max-width: 230px;
  /* padding: 0 16px; */
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border-color); /* 添加分隔线 */
}

.logo-img {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 230px; /* Slightly reduced to ensure it fits well */
  max-height: 70px;
  object-fit: contain;
  /* display: block; */
  margin: 0 auto; /* Additional centering */
}

.logo-text {
  margin-left: 8px;
  font-weight: bold;
}

.nav-section {
  margin-bottom: 16px;
  border-bottom: 1px solid #2daae1;
  padding-bottom: 16px;
}

.nav-section:last-child {
  border-bottom: none;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s ease, border-radius 0.3s ease; /* 同时过渡背景色和圆角 */
  border-radius: 0; /* 添加初始圆角为 0 */
  will-change: border-radius;
}

.nav-item:hover {
  background-color: var(--primary-light);
  border-radius: 20px;
}

.nav-item.router-link-active {
  background-color: #2daae1(255, 255, 255, 0.2);
}

.nav-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}

/* 添加右侧边框，以区分左右两侧 */
.sidebar {
  border-right: 1px solid var(--border-color);
}
</style> -->

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--sidebar-bg);
  color: black;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0; /* 增加 logo 区域的 padding */
  border-bottom: 1px solid var(--border-color); /* 添加分隔线 */
}

.logo-img {
  max-width: 260px; /* 调整图片大小 */
  max-height: 60px; /* 调整图片高度 */
  object-fit: contain;
}

.nav-section {
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-color); /* 修改分隔线颜色 */
  padding-bottom: 16px;
}

.nav-section:last-child {
  border-bottom: none;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: black;
  text-decoration: none;
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  border-radius: 0;
  will-change: border-radius;
}

.nav-item:hover {
  background-color: var(--primary-light);
  border-radius: 20px;
}

.nav-item.router-link-active {
  background-color: #2daae1(255, 255, 255, 0.2);
}

.nav-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}

.sidebar {
  border-right: 1px solid var(--border-color);
}
</style>