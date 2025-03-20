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
      
      <div class="use-cases-section">
        <h2 class="section-title">应用场景</h2>
        <div class="use-cases-grid">
          <div class="use-case-card">
            <!-- <img src="/placeholder.svg?height=200&width=300" alt="教育场景" class="use-case-img" /> -->
            <h3 class="use-case-title">教育培训</h3>
            <p class="use-case-desc">
              AI辅助教学，生成教学内容，提供个性化学习体验
            </p>
          </div>
          <div class="use-case-card">
            <!-- <img src="/placeholder.svg?height=200&width=300" alt="内容创作" class="use-case-img" /> -->
            <h3 class="use-case-title">内容创作</h3>
            <p class="use-case-desc">
              快速生成高质量文章、图像和视频，提升创作效率
            </p>
          </div>
          <div class="use-case-card">
            <!-- <img src="/placeholder.svg?height=200&width=300" alt="客户服务" class="use-case-img" /> -->
            <h3 class="use-case-title">客户服务</h3>
            <p class="use-case-desc">
              智能客服系统，提供24/7全天候服务，提升客户满意度
            </p>
          </div>
        </div>
      </div>
      
      <div class="testimonials-section">
        <h2 class="section-title">用户评价</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              "这个平台极大地提高了我的工作效率，AI生成的内容质量令人惊叹。"
            </div>
            <div class="testimonial-author">
              <!-- <img src="/placeholder.svg?height=50&width=50" alt="用户头像" class="author-avatar" /> -->
              <div class="author-info">
                <div class="author-name">张先生</div>
                <div class="author-title">内容创作者</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              "语音合成功能非常自然，我们公司的所有语音提示都使用这个平台生成。"
            </div>
            <div class="testimonial-author">
              <!-- <img src="/placeholder.svg?height=50&width=50" alt="用户头像" class="author-avatar" /> -->
              <div class="author-info">
                <div class="author-name">李女士</div>
                <div class="author-title">产品经理</div>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-content">
              "图像生成功能帮助我们快速创建了营销素材，节省了大量时间和成本。"
            </div>
            <div class="testimonial-author">
              <!-- <img src="/placeholder.svg?height=50&width=50" alt="用户头像" class="author-avatar" /> -->
              <div class="author-info">
                <div class="author-name">王先生</div>
                <div class="author-title">市场总监</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <h2 class="cta-title">立即开始使用AI提升您的工作效率</h2>
        <p class="cta-desc">
          注册账号，免费体验我们的AI功能
        </p>
        <div class="cta-buttons">
          <router-link to="/register" class="primary-btn">免费注册</router-link>
          <router-link to="/pricing" class="secondary-btn">查看价格</router-link>
        </div>
      </div>
    </main>

    <footer class="home-footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4 class="footer-title">产品</h4>
          <a href="#" class="footer-link">功能</a>
          <a href="#" class="footer-link">价格</a>
          <a href="#" class="footer-link">API</a>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">资源</h4>
          <a href="#" class="footer-link">文档</a>
          <a href="#" class="footer-link">教程</a>
          <a href="#" class="footer-link">博客</a>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">公司</h4>
          <a href="#" class="footer-link">关于我们</a>
          <a href="#" class="footer-link">联系我们</a>
          <a href="#" class="footer-link">加入我们</a>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">法律</h4>
          <a href="#" class="footer-link">隐私政策</a>
          <a href="#" class="footer-link">用户协议</a>
          <a href="#" class="footer-link">Cookie政策</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="copyright">© 2025 数智应用实验室. 保留所有权利。</p>
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
  width: 100%;
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
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
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
  width: 100%;
}

.hero-section {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px 80px;
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

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
  color: var(--text-primary);
}

.use-cases-section {
  background-color: var(--primary-bg);
  padding: 80px 24px;
  width: 100%;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.use-case-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.use-case-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.use-case-title {
  font-size: 20px;
  font-weight: 600;
  margin: 16px 24px;
  color: var(--text-primary);
}

.use-case-desc {
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0 24px 24px;
}

.testimonials-section {
  padding: 80px 24px;
  width: 100%;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.testimonial-content {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 24px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
}

.author-name {
  font-weight: 600;
  color: var(--text-primary);
}

.author-title {
  color: var(--text-secondary);
  font-size: 14px;
}

.cta-section {
  background-color: var(--primary-bg);
  padding: 80px 24px;
  text-align: center;
  width: 100%;
}

.cta-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--text-primary);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.cta-desc {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.home-footer {
  background-color: #f8f9fa;
  padding: 64px 24px 32px;
  border-top: 1px solid var(--border-color);
  width: 100%;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto 32px;
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
  max-width: 1200px;
  margin: 0 auto;
}

.copyright {
  color: var(--text-light);
  font-size: 14px;
}

@media (max-width: 1200px) {
  .features-section {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .use-cases-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
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
  
  .features-section,
  .use-cases-grid,
  .testimonials-grid,
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>