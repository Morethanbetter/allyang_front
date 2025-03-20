<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="../../static/logo-9.png" alt="Digital Application Laboratory" class="logo-img" />
      <!-- <span class="logo-text">数智应用实验室</span> -->
    </div>
    
    <nav class="nav-menu">
      <div class="nav-section">
        <router-link to="/model-square" class="nav-item">
          <span class="nav-icon">📋</span>
          <span>行业分类</span>
        </router-link>
        <router-link to="/model-fine-tune" class="nav-item">
          <span class="nav-icon">⚙️</span>
          <span>模型微调</span>
        </router-link>
      </div>
      
      <div class="nav-section">
        <router-link to="/chat" class="nav-item">
          <span class="nav-icon">💬</span>
          <span>文本对话</span>
        </router-link>
        <router-link to="/voice" class="nav-item">
          <span class="nav-icon">🎤</span>
          <span>语音生成</span>
        </router-link>
        <router-link to="/image" class="nav-item">
          <span class="nav-icon">🖼️</span>
          <span>图像生成</span>
        </router-link>
        <router-link to="/video" class="nav-item">
          <span class="nav-icon">🎬</span>
          <span>视频生成</span>
        </router-link>
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
      </div>
      
      <!-- Additional nav sections... -->
    </nav>
  </aside>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background-color: var(--primary-color);
  color: white;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.logo {
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 24px;
}

/* .logo-img {
  width: 32px;
  height: 32px;
} */
.logo-img {
  max-width: 230px; /* Slightly reduced to ensure it fits well */
  max-height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto; /* Additional centering */
}

.logo-text {
  margin-left: 8px;
  font-weight: bold;
}

.nav-section {
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 16px;
}

.nav-section:last-child {
  border-bottom: none;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}
</style>