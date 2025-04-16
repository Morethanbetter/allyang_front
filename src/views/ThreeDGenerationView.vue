<template>
  <div class="generation-container">
    <!-- Header -->
    <div class="header">
      <div class="nav-tabs">
        <div class="back-button" @click="goBack">
          <i class="back-icon"></i>
          <span>返回</span>
        </div>
        <div class="tabs">
          <div class="tab active">AI3D 创作</div>
          <div class="tab">AI 品牌设计</div>
          <div class="tab">AI 品牌营销</div>
        </div>
        <div class="right-actions">
          <div class="download-btn">
            <i class="download-icon"></i>
            <span>移动端下载</span>
          </div>
          <div class="credits">
            <i class="credit-icon"></i>
            <span>66</span>
          </div>
          <button class="membership-btn">开会员 限时95折</button>
          <div class="avatar">
            <img src="../assets/avatar9.jpg" alt="用户头像" />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="content">
      <!-- Left Sidebar -->
      <div class="sidebar">
        <div class="section">
          <h3>生成模型</h3>
          <div class="model-selector">
            <div class="selected-model">
              <div class="model-icon">
                <img src="../assets/seedream-icon.png" alt="Seedream" />
              </div>
              <span>by Seedream 3.0</span>
              <i class="dropdown-icon"></i>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>选择分辨率</h3>
          <div class="resolution-options">
            <div class="resolution-option">标清 1K</div>
            <div class="resolution-option active">高清 2K</div>
          </div>
        </div>

        <div class="section">
          <h3>图片比例</h3>
          <div class="ratio-grid">
            <div class="ratio-option">21:9</div>
            <div class="ratio-option active">16:9</div>
            <div class="ratio-option">3:2</div>
            <div class="ratio-option">4:3</div>
            <div class="ratio-option">1:1</div>
            <div class="ratio-option">3:4</div>
          </div>
        </div>

        <div class="section">
          <h3>图片尺寸</h3>
          <div class="size-inputs">
            <div class="input-group">
              <input type="text" placeholder="宽度" />
              <span class="unit">px</span>
            </div>
            <div class="input-group">
              <input type="text" placeholder="高度" />
              <span class="unit">px</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Canvas Area -->
      <div class="canvas-area">
        <div class="canvas-container">
          <div class="placeholder-canvas">
            <div class="placeholder-text">
              <p>简单描述您想要的界面或功能</p>
              <p class="subtext">支持上传图片作为参考</p>
            </div>
          </div>
        </div>

        <div class="canvas-controls">
          <div class="dropdown-control">
            <span class="dropdown-text">选择模板</span>
            <i class="dropdown-icon"></i>
          </div>

          <div class="media-controls">
            <button class="media-btn">
              <i class="text-icon"></i>
            </button>
            <button class="media-btn">
              <i class="image-icon"></i>
            </button>
            <button class="media-btn">
              <i class="video-icon"></i>
            </button>
          </div>

          <button class="generate-btn">
            <i class="play-icon"></i>
            <span>生成</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeDGenerationView',
  data() {
    return {
      // Add reactive data here if needed
    }
  },
  methods: {
    goBack() {
      this.$router.push('/dashboard');
    }
  }
}
</script>

<style scoped>
.generation-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f7;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Header Styles */
.header {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  padding: 0 20px;
}

.nav-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.back-button {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  color: #333;
}

.back-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('../assets/back-icon.png');
  background-size: contain;
  margin-right: 5px;
}

.tabs {
  display: flex;
  gap: 24px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.tab {
  padding: 0 15px;
  cursor: pointer;
  color: #666;
  font-size: 15px;
  position: relative;
}

.tab.active {
  color: #1da1f2;
  font-weight: 500;
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1da1f2;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #666;
}

.download-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../assets/download-icon.png');
  background-size: contain;
}

.credits {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #666;
}

.credit-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-image: url('../assets/credit-icon.png');
  background-size: contain;
}

.membership-btn {
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.avatar img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

/* Main Content Styles */
.content {
  display: flex;
  flex: 1;
  padding: 0;
}

/* Sidebar Styles */
.sidebar {
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #eaeaea;
  padding: 20px 0;
}

.section {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.section h3 {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 15px;
}

.model-selector {
  margin-bottom: 10px;
}

.selected-model {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  cursor: pointer;
}

.model-icon {
  width: 24px;
  height: 24px;
  background-color: #1da1f2;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
}

.model-icon img {
  width: 16px;
  height: 16px;
}

.dropdown-icon {
  margin-left: auto;
  width: 16px;
  height: 16px;
  background-image: url('../assets/dropdown-icon.png');
  background-size: contain;
}

.resolution-options {
  display: flex;
  gap: 10px;
}

.resolution-option {
  flex: 1;
  text-align: center;
  padding: 8px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #666;
}

.resolution-option.active {
  background-color: #1da1f2;
  color: white;
  border-color: #1da1f2;
}

.ratio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.ratio-option {
  text-align: center;
  padding: 8px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #666;
}

.ratio-option.active {
  background-color: #1da1f2;
  color: white;
  border-color: #1da1f2;
}

.size-inputs {
  display: flex;
  gap: 10px;
}

.input-group {
  flex: 1;
  position: relative;
}

.input-group input {
  width: 100%;
  padding: 8px 30px 8px 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
}

.unit {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 12px;
}

/* Canvas Area Styles */
.canvas-area {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.canvas-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.placeholder-canvas {
  width: 100%;
  max-width: 900px;
  height: 450px;
  border: 1px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.placeholder-text {
  text-align: center;
  color: #999;
  font-size: 16px;
}

.placeholder-text .subtext {
  font-size: 14px;
  margin-top: 5px;
  color: #aaa;
}

.canvas-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.dropdown-control {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
  background-color: #fff;
}

.dropdown-text {
  margin-right: 5px;
}

.media-controls {
  display: flex;
  gap: 10px;
}

.media-btn {
  width: 40px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.text-icon, .image-icon, .video-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
}

.text-icon {
  background-image: url('../assets/text-icon.png');
}

.image-icon {
  background-image: url('../assets/image-icon.png');
}

.video-icon {
  background-image: url('../assets/video-icon.png');
}

.generate-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #1da1f2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.play-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url('../assets/play-icon.png');
  background-size: contain;
}
</style>