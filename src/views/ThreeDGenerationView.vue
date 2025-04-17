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
              <span>数智应用实验室智能体</span>
              <i class="dropdown-icon"></i>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>选择分辨率</h3>
          <div class="resolution-options">
            <div
              class="resolution-option"
              :class="{ active: selectedResolution === '1K' }"
              @click="selectResolution('1K')"
            >标清 1K</div>
            <div
              class="resolution-option"
              :class="{ active: selectedResolution === '2K' }"
              @click="selectResolution('2K')"
            >高清 2K</div>
          </div>
        </div>

        <div class="section">
          <h3>图片比例</h3>
          <div class="ratio-grid">
            <div
              v-for="ratio in ratioOptions"
              :key="ratio"
              class="ratio-option"
              :class="{ active: selectedRatio === ratio }"
              @click="selectRatio(ratio)"
            >{{ ratio }}</div>
          </div>
        </div>

        <div class="section">
          <h3>图片尺寸</h3>
          <div class="size-inputs">
            <div class="input-group">
              <input type="text" v-model="imageWidth" placeholder="宽度" @change="updateDimensions" />
              <span class="unit">px</span>
            </div>
            <div class="input-group">
              <input type="text" v-model="imageHeight" placeholder="高度" @change="updateDimensions" />
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

        <div class="canvas-controls-wrapper">
          <div class="canvas-controls">
            <div class="controls-left">
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
            </div>

            <button class="generate-btn" @click="generateImage">
              <i class="play-icon"></i>
              <span>生成</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // 确保你的项目中已安装axios

export default {
  name: 'ThreeDGenerationView',
  data() {
    return {
      selectedResolution: '2K',
      selectedRatio: '16:9',
      ratioOptions: ['21:9', '16:9', '3:2', '4:3', '1:1', '3:4'],
      imageWidth: '',
      imageHeight: '',
      apiUrl: '/api/generate-image', // 替换为你的实际API端点
    }
  },
  methods: {
    goBack() {
      this.$router.push('/main');
    },
    selectResolution(resolution) {
      this.selectedResolution = resolution;
      this.updateDimensionsBasedOnRatio();
      console.log(`分辨率已选择: ${resolution}`);
    },
    selectRatio(ratio) {
      this.selectedRatio = ratio;
      this.updateDimensionsBasedOnRatio();
      console.log(`比例已选择: ${ratio}`);
    },
    updateDimensionsBasedOnRatio() {
      // 根据分辨率和比例来设置默认尺寸
      const [widthRatio, heightRatio] = this.selectedRatio.split(':').map(Number);

      if (this.selectedResolution === '1K') {
        // 1K分辨率的基础尺寸
        if (widthRatio >= heightRatio) {
          this.imageWidth = 1024;
          this.imageHeight = Math.round((1024 / widthRatio) * heightRatio);
        } else {
          this.imageHeight = 1024;
          this.imageWidth = Math.round((1024 / heightRatio) * widthRatio);
        }
      } else {
        // 2K分辨率的基础尺寸
        if (widthRatio >= heightRatio) {
          this.imageWidth = 2048;
          this.imageHeight = Math.round((2048 / widthRatio) * heightRatio);
        } else {
          this.imageHeight = 2048;
          this.imageWidth = Math.round((2048 / heightRatio) * widthRatio);
        }
      }
    },
    updateDimensions() {
      // 当用户手动更改尺寸时可以添加更多逻辑
      console.log(`尺寸已更新: ${this.imageWidth}x${this.imageHeight}`);
    },
    async generateImage() {
      try {
        const params = {
          resolution: this.selectedResolution,
          ratio: this.selectedRatio,
          width: this.imageWidth,
          height: this.imageHeight
        };

        console.log('Sending parameters to API:', params);

        // 调用API
        const response = await axios.post(this.apiUrl, params);
        console.log('API response:', response.data);

        // 在这里处理API响应，例如显示生成的图像

      } catch (error) {
        console.error('生成图像时出错:', error);
        // 添加适当的错误处理，例如显示错误消息
      }
    }
  },
  mounted() {
    // 组件加载时根据默认值设置尺寸
    this.updateDimensionsBasedOnRatio();
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
  transition: all 0.2s ease;
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
  transition: all 0.2s ease;
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
  padding: 8px 8px 8px 8px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  font-size: 14px;
}

.unit {
  position: absolute;
  right: 8px;
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
  justify-content: flex-start;
}

.canvas-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}

.placeholder-canvas {
  width: 100%;
  max-width: 900px;
  height: 450px;
  border: 1px dashed #ccc;
  border-radius: 8px 8px 0 0;
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

/* 新增包装容器，确保控制区与canvas对齐 */
.canvas-controls-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto; /* 新增：实现水平居中 */
}

.canvas-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-radius: 0 0 8px 8px;
  padding: 12px 16px;
  border-top: 1px solid #eaeaea;
}

.controls-left {
  display: flex;
  align-items: center;
  gap: 16px;
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