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
            <img src="../static/home-icon.png" alt="首页" />
            <span>首页</span>
          </li>
          <li>
            <img src="../static/assets-icon.png" alt="资产" />
<!--            <i class="assets-icon"></i>-->
            <span>资产</span>
          </li>
          <li>
            <img src="../static/profile-icon.png" alt="个人主页" />
<!--            <i class="profile-icon"></i>-->
            <span>个人主页</span>
          </li>
          <li>
            <img src="../static/assets-icon.png" alt="智能提创作" />
<!--            <i class="ai-icon"></i>-->
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
              <img src="../static/home_logo.png" alt="未来城市幻想" />
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
              <img src="../static/" alt="山水意境" />
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
              <img src="../static/home_logo.png" alt="未来战士" />
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
              <img src="../static/home_logo.png" alt="奇幻世界" />
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
  data() {
    return {
      // Add any reactive data here if needed
    }
  },
  methods: {
    // Add methods here if needed
  }
}
</script>

<style scoped>
.dashboard-container {
  display: flex;
  min-height: 100vh;
  background-color: #f5f5f7;
}

/* Sidebar Styles */
.sidebar {
  width: 240px;
  background-color: #f5f5f7;
  border-right: 1px solid #eaeaea;
  padding-top: 20px;
}

.logo {
  padding: 0 40px 40px 40px;
}

.logo img {
  height: 40px;
}

.nav-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-menu li {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  color: #666;
}

.nav-menu li.active {
  background-color: #fff;
  color: #1da1f2;
  border-left: 3px solid #1da1f2;
}

.nav-menu li i {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

.home-icon, .assets-icon, .profile-icon, .ai-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: #fff;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  border-radius: 20px;
  padding: 8px 16px;
  width: 300px;
}

.search-icon {
  width: 16px;
  height: 16px;
  background-image: url('../static/home_logo.png');
  background-size: contain;
  margin-right: 8px;
}

.search-bar input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 14px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.create-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
}

.plus-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
}

.avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

/* Content Area Styles */
.content {
  flex: 1;
  padding: 24px;
}

/* AI Categories Styles */
.ai-categories {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}

.category-card {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-card h2 {
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
}

.category-card p {
  color: #666;
  margin-bottom: 16px;
  font-size: 14px;
}

.category-btn {
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: 500;
}

/* Category Tabs Styles */
.category-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.tab {
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.tab.active {
  background-color: #1da1f2;
  color: white;
}

/* Gallery Styles */
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.gallery-item {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.gallery-item .image {
  height: 180px;
  overflow: hidden;
}

.gallery-item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item .info {
  padding: 16px;
}

.gallery-item h3 {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}

.author-likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.likes {
  display: flex;
  align-items: center;
  gap: 4px;
}

.heart-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('../static/home_logo.png');
  background-size: contain;
}
</style>