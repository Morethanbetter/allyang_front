<template>
    <div class="home-container">
      <header class="home-header">
        <div class="logo">
          <span class="logo-text">数智应用实验室</span>
        </div>
        <div class="nav-links">
          <router-link to="/features" class="nav-link">功能</router-link>
          <router-link to="/pricing" class="nav-link">价格</router-link>
          <router-link to="/docs" class="nav-link">文档</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </div>
        <div class="auth-buttons">
          <router-link to="/login" class="login-btn">登录</router-link>
          <router-link to="/register" class="register-btn">注册</router-link>
        </div>
      </header>
  
      <main class="home-content">
        <div class="hero-section">
          <h1 class="hero-title">AI驱动的智能对话与创作平台</h1>
          <p class="hero-subtitle">
            体验最先进的AI技术，实现文本对话、图像生成、语音合成和视频创作
          </p>
          <div class="cta-buttons">
            <router-link to="/chat" class="primary-btn">开始体验</router-link>
            <router-link to="/docs" class="secondary-btn">了解更多</router-link>
          </div>
        </div>
  
        <div class="features-section">
          <div class="feature-card">
            <div class="feature-icon">💬</div>
            <h3 class="feature-title">智能对话</h3>
            <p class="feature-desc">
              基于最先进的大语言模型，提供流畅自然的对话体验
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🖼️</div>
            <h3 class="feature-title">图像生成</h3>
            <p class="feature-desc">
              通过文本描述生成高质量图像，激发创意灵感
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎤</div>
            <h3 class="feature-title">语音合成</h3>
            <p class="feature-desc">
              将文本转换为自然流畅的语音，支持多种音色和语言
            </p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎬</div>
            <h3 class="feature-title">视频创作</h3>
            <p class="feature-desc">
              AI辅助视频生成，让创作更简单高效
            </p>
          </div>
        </div>
      </main>
  
      <footer class="home-footer">
        <div class="footer-links">
          <div class="footer-column">
            <h4 class="footer-title">产品</h4>
            <a href="#" class="footer-link">功能</a>
            <a href="#" class="footer-link">价格</a>
            <a href="#" class="footer-link">API</a>
          </div>
          <div class="footer-column">
            <h4 class="footer-title">资源</h4>
            <a href="#" class="footer-link">文档</a>
            <a href="#" class="footer-link">教程</a>
            <a href="#" class="footer-link">博客</a>
          </div>
          <div class="footer-column">
            <h4 class="footer-title">公司</h4>
            <a href="#" class="footer-link">关于我们</a>
            <a href="#" class="footer-link">联系我们</a>
            <a href="#" class="footer-link">加入我们</a>
          </div>
          <div class="footer-column">
            <h4 class="footer-title">法律</h4>
            <a href="#" class="footer-link">隐私政策</a>
            <a href="#" class="footer-link">用户协议</a>
            <a href="#" class="footer-link">Cookie政策</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="copyright">© 2025 SILICONFLOW. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  // 无需额外逻辑
  </script>
  
  <style scoped>
  .home-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  
  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 48px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }
  
  .logo-img {
    height: 32px;
    width: auto;
  }
  
  .logo-text {
    font-size: 20px;
    font-weight: bold;
    margin-left: 8px;
    color: var(--primary-color);
  }
  
  .nav-links {
    display: flex;
    gap: 24px;
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: color 0.2s;
  }
  
  .nav-link:hover {
    color: var(--primary-color);
  }
  
  .auth-buttons {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  
  .login-btn {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 500;
  }
  
  .register-btn {
    text-decoration: none;
    background-color: var(--primary-color);
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .register-btn:hover {
    background-color: var(--primary-dark);
  }
  
  .home-content {
    flex: 1;
    padding: 48px;
  }
  
  .hero-section {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 64px 0;
  }
  
  .hero-title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  
  .hero-subtitle {
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 32px;
    line-height: 1.5;
  }
  
  .cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
  }
  
  .primary-btn {
    text-decoration: none;
    background-color: var(--primary-color);
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .primary-btn:hover {
    background-color: var(--primary-dark);
  }
  
  .secondary-btn {
    text-decoration: none;
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.2s;
  }
  
  .secondary-btn:hover {
    background-color: var(--primary-light);
  }
  
  .features-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    margin-top: 64px;
  }
  
  .feature-card {
    background-color: white;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .feature-icon {
    font-size: 32px;
    margin-bottom: 16px;
  }
  
  .feature-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
  }
  
  .feature-desc {
    color: var(--text-secondary);
    line-height: 1.5;
  }
  
  .home-footer {
    background-color: #f8f9fa;
    padding: 48px;
    border-top: 1px solid var(--border-color);
  }
  
  .footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 32px;
    margin-bottom: 32px;
  }
  
  .footer-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  
  .footer-link {
    display: block;
    text-decoration: none;
    color: var(--text-secondary);
    margin-bottom: 8px;
    transition: color 0.2s;
  }
  
  .footer-link:hover {
    color: var(--primary-color);
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 24px;
    border-top: 1px solid var(--border-color);
  }
  
  .copyright {
    color: var(--text-light);
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    .home-header {
      padding: 16px 24px;
      flex-direction: column;
      gap: 16px;
    }
    
    .nav-links {
      display: none;
    }
    
    .hero-title {
      font-size: 32px;
    }
    
    .hero-subtitle {
      font-size: 18px;
    }
    
    .home-content {
      padding: 24px;
    }
    
    .home-footer {
      padding: 24px;
    }
  }
  </style>