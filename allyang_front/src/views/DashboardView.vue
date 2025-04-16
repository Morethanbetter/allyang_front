<template>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Logo -->
      <div class="logo">
        <img src="../static/home_logo.png" alt="数智应用实验室" />
      </div>

      <!-- Navigation -->
      <nav class="nav-menu">
        <ul>
          <li class="active">
            <i class="home-icon"></i>
            <span>首页</span>
          </li>
          <li>
            <i class="assets-icon"></i>
            <span>资产</span>
          </li>
          <li>
            <i class="profile-icon"></i>
            <span>个人主页</span>
          </li>
          <li>
            <i class="ai-icon"></i>
            <span>智能体创作</span>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header">
        <div class="search-bar">
          <i class="search-icon"></i>
          <input type="text" placeholder="搜索作品、创作者" />
        </div>
        <div class="actions">
          <button class="create-btn">
            <i class="plus-icon"></i>
            创建作品
          </button>
          <div class="avatar">
            <img src="../static/home_logo.png" alt="用户头像" />
          </div>
        </div>
      </div>

      <!-- Content Area -->
      <div class="content">
        <!-- AI Creation Categories -->
        <div class="ai-categories">
          <div class="category-card">
            <h2>AI 3D创作</h2>
            <p>轻松创建高质量3D内容</p>
            <button class="category-btn">3D生成</button>
          </div>
          <div class="category-card">
            <h2>AI 品牌设计</h2>
            <p>提升品牌视觉呈现</p>
            <button class="category-btn">视觉生成</button>
          </div>
          <div class="category-card">
            <h2>AI 品牌营销</h2>
            <p>解决流量获客难题</p>
            <button class="category-btn">全域营销</button>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="category-tabs">
          <div class="tab active">发现</div>
          <div class="tab">风格化</div>
          <div class="tab">插画</div>
          <div class="tab">国风美学</div>
          <div class="tab">海报设计</div>
          <div class="tab">动漫游戏</div>
          <div class="tab">未来科幻</div>
        </div>

        <!-- Gallery -->
        <div class="gallery">
          <div class="gallery-item">
            <div class="image">
              <img src="https://placehold.co/480x360" alt="未来城市幻想" />
            </div>
            <div class="info">
              <h3>未来城市幻想</h3>
              <div class="author-likes">
                <span class="author">by 陈艺术家</span>
                <div class="likes">
                  <i class="heart-icon"></i>
                  <span>238</span>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <div class="image">
              <img src="https://placehold.co/480x360" alt="山水意境" />
            </div>
            <div class="info">
              <h3>山水意境</h3>
              <div class="author-likes">
                <span class="author">by 王水墨</span>
                <div class="likes">
                  <i class="heart-icon"></i>
                  <span>186</span>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <div class="image">
              <img src="https://placehold.co/480x360" alt="未来战士" />
            </div>
            <div class="info">
              <h3>未来战士</h3>
              <div class="author-likes">
                <span class="author">by 林数字</span>
                <div class="likes">
                  <i class="heart-icon"></i>
                  <span>342</span>
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-item">
            <div class="image">
              <img src="https://placehold.co/480x360" alt="奇幻世界" />
            </div>
            <div class="info">
              <h3>奇幻世界</h3>
              <div class="author-likes">
                <span class="author">by 张幻想</span>
                <div class="likes">
                  <i class="heart-icon"></i>
                  <span>275</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {/***/},
  methods: {
    // Add methods here if needed
  }
}
</script>

<style scoped>
/* Update sidebar icons */
.home-icon, .assets-icon, .profile-icon, .ai-icon {
  background-image: url('../static/icon_home.png'), url('../static/icon_assets.png'), url('../static/icon_profile.png'), url('../static/icon_ai.png');
  background-size: contain;
}

/* Update header styles */
.header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.search-bar {
  border-radius: 24px;
}

.create-btn {
  font-size: 16px;
}

/* Update gallery image placeholders */
.gallery-item .image img {
  object-fit: cover;
}

/* Update heart icon */
.heart-icon {
  background-image: url('../static/icon_heart.png');
  background-size: contain;
}
</style>