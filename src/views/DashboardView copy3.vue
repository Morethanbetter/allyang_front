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
            <span>资产</span>
          </li>
          <li>
            <img src="../static/profile-icon.png" alt="个人主页" />
            <span>个人主页</span>
          </li>
          <li>
            <img src="../static/assets-icon.png" alt="智能体创作" />
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
            <i class="plus-icon">+</i>
            创建作品
          </button>
          <div class="avatar">
            <img src="../assets/avatar9.jpg" alt="用户头像" />
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
              <img src="../assets/fantasy-world.png" alt="未来城市幻想" />
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
              <img src="../assets/future-warrior.png" alt="山水意境" />
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
              <img src="../assets/landscape.png" alt="未来战士" />
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
              <img src="../assets/future-city.png" alt="奇幻世界" />
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Sidebar Styles */
.sidebar {
  width: 240px;
  background-color: #ffffff;
  border-right: 1px solid #eaeaea;
  padding-top: 20px;
}

.logo {
  padding: 0 30px 30px 30px;
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
  padding: 16px 30px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
}

.nav-menu li img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
}

.nav-menu li.active {
  background-color: #f0f7ff;
  color: #1da1f2;
  border-left: 3px solid #1da1f2;
}

.nav-menu li:hover:not(.active) {
  background-color: #f9f9f9;
}

.nav-menu li span {
  font-size: 15px;
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
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  border-radius: 24px;
  padding: 8px 16px;
  width: 300px;
}

.search-icon {
  width: 20px;
  height: 20px;
  background-image: url('../assets/search-icon.png');
  background-size: contain;
  margin-right: 10px;
  opacity: 0.5;
}

.search-bar input {
  border: none;
  background: transparent;
  width: 100%;
  outline: none;
  font-size: 14px;
  color: #333;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.create-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

.plus-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  font-size: 18px;
  line-height: 16px;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #eaeaea;
}

/* Content Area Styles */
.content {
  flex: 1;
  padding: 30px;
}

/* AI Categories Styles */
.ai-categories {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
}

.category-card {
  flex: 1;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-card h2 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
}

.category-card p {
  color: #666;
  margin-bottom: 20px;
  font-size: 14px;
}

.category-btn {
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 18px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

/* Category Tabs Styles */
.category-tabs {
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
}

.tab {
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  transition: all 0.3s ease;
}

.tab:hover:not(.active) {
  background-color: #f0f0f0;
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.gallery-item .image {
  height: 200px;
  overflow: hidden;
}

.gallery-item .image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .image img {
  transform: scale(1.05);
}

.gallery-item .info {
  padding: 16px;
}

.gallery-item h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #333;
  font-weight: 500;
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
  gap: 6px;
}

.heart-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('../assets/heart-icon.png');
  background-size: contain;
}
</style>