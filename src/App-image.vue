<template>
  <div class="app-container">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div class="logo">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250312-113630-w0N0DeIF8tRoT6mfoq7Y1I9ejpv87b.gif" alt="Logo" class="w-8 h-8" />
        <span class="logo-text">SILICONFLOW</span>
      </div>
      
      <div class="nav-items">
        <div class="nav-section">
          <div class="nav-item">
            <div class="nav-icon">📋</div>
            <span>模型广场</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">⚙️</div>
            <span>模型微调</span>
          </div>
        </div>
        
        <div class="nav-section">
          <div class="nav-item">
            <div class="nav-icon">📊</div>
            <span>体验中心</span>
          </div>
          <div class="nav-item" 
               :class="{ active: currentView === 'chat' }"
               @click="currentView = 'chat'">
            <div class="nav-icon">💬</div>
            <span>文本对话</span>
          </div>
          <div class="nav-item" 
               :class="{ active: currentView === 'image' }"
               @click="currentView = 'image'">
            <div class="nav-icon">🖼️</div>
            <span>图像生成</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🎬</div>
            <span>视频生成</span>
          </div>
          <div class="nav-item">
            <div class="nav-icon">🎤</div>
            <span>语音生成</span>
          </div>
        </div>
        
        <!-- 其他导航项保持不变 -->
      </div>
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content">
      <div class="header">
        <div class="tab-active">{{ currentView === 'chat' ? '文本对话' : '图像生成' }}</div>
        <div class="user-info">
          <div class="tokens">
            <span class="token-icon">💰</span>
            <span class="token-count">10</span>
          </div>
          <div class="user-avatar">
            <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" class="avatar" />
          </div>
        </div>
      </div>
      
      <!-- 文本对话界面 -->
      <div v-if="currentView === 'chat'" class="chat-container">
        <!-- 原有的文本对话内容 -->
      </div>
      
      <!-- 图像生成界面 -->
      <div v-else-if="currentView === 'image'" class="image-container">
        <div class="model-settings">
          <div class="setting-group">
            <div class="setting-label">Model</div>
            <div class="setting-value">
              <select v-model="imageSettings.model" class="model-select">
                <option value="kolors">Kolors</option>
                <option value="stable-diffusion">Stable Diffusion</option>
              </select>
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Image Size
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="image-size-options">
              <button 
                v-for="size in imageSizes" 
                :key="size.ratio"
                :class="{ active: imageSettings.size === size.ratio }"
                @click="imageSettings.size = size.ratio"
                class="size-option"
              >
                {{ size.label }}
              </button>
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">Number Images</div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="imageSettings.numImages" 
                min="1" 
                max="4"
                class="number-input"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Seed
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value seed-input">
              <input 
                type="text" 
                v-model="imageSettings.seed"
                placeholder="Random"
                class="text-input"
              />
              <button @click="regenerateSeed" class="refresh-btn">🔄</button>
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Inference Steps
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="imageSettings.steps"
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="imageSettings.steps"
                min="1"
                max="50"
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Guidance Scale
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="imageSettings.guidanceScale"
                step="0.1"
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="imageSettings.guidanceScale"
                min="1"
                max="20"
                step="0.1"
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Negative Prompt
              <span class="info-icon">ⓘ</span>
            </div>
            <textarea 
              v-model="imageSettings.negativePrompt"
              class="negative-prompt"
              placeholder="Enter negative prompt..."
            ></textarea>
          </div>
        </div>
        
        <div class="image-preview">
          <div v-if="generatedImage" class="generated-image">
            <img :src="generatedImage" alt="Generated image" />
          </div>
          <div v-else class="image-placeholder">
            Generated image will appear here
          </div>
          
          <div class="prompt-suggestions">
            <button 
              v-for="(prompt, index) in promptSuggestions" 
              :key="index"
              @click="usePromptSuggestion(prompt)"
              class="suggestion-btn"
            >
              {{ prompt }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- 输入区域 -->
      <div class="input-container">
        <div class="input-wrapper">
          <input 
            v-model="userInput" 
            @keyup.enter="handleSubmit" 
            class="message-input" 
            :placeholder="currentView === 'chat' ? '输入AI prompt' : '输入图像描述'"
          />
          <button @click="handleSubmit" class="send-btn">
            <span class="send-icon">↑</span>
          </button>
        </div>
        <div class="footer-text">
          内容由AI 生成，无法确保真实准确，仅供参考，并遵循与本平台《用户协议》及隐私政策相关安全和隐私规定
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

// 当前视图
const currentView = ref('image');

// 图像生成设置
const imageSettings = reactive({
  model: 'kolors',
  size: '1:1',
  numImages: 1,
  seed: '',
  steps: 25,
  guidanceScale: 7.5,
  negativePrompt: ''
});

// 图像尺寸选项
const imageSizes = [
  { ratio: '1:1', label: '1:1' },
  { ratio: '1:2', label: '1:2' },
  { ratio: '3:2', label: '3:2' },
  { ratio: '3:4', label: '3:4' },
  { ratio: '16:9', label: '16:9' },
  { ratio: '9:16', label: '9:16' }
];

// 提示建议
const promptSuggestions = [
  'In a vast, boundless desert...',
  'The ancient battlefield, thou...',
  'In the style of Makoto Shink...',
  'Create an atmospheric scen...'
];

// 生成的图像URL
const generatedImage = ref('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2025-03-14_16-50-09-Ti8WtyJrT5J1ah3vcmfpt38l0x9A85.png');

// 用户输入
const userInput = ref('');

// 重新生成种子
const regenerateSeed = () => {
  imageSettings.seed = Math.floor(Math.random() * 1000000).toString();
};

// 使用提示建议
const usePromptSuggestion = (prompt) => {
  userInput.value = prompt;
};

// 处理提交
const handleSubmit = async () => {
  if (!userInput.value.trim()) return;
  
  if (currentView.value === 'chat') {
    // 处理文本对话
    await sendMessage();
  } else {
    // 处理图像生成
    await generateImage();
  }
};

// 生成图像
const generateImage = async () => {
  try {
    const response = await fetch('http://localhost:5000/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: userInput.value,
        settings: imageSettings
      })
    });
    
    const data = await response.json();
    generatedImage.value = data.imageUrl;
    
  } catch (error) {
    console.error('Error generating image:', error);
  }
  
  userInput.value = '';
};
</script>

<style>
/* 保留原有样式 */

/* 添加图像生成相关样式 */
.image-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.image-size-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.size-option {
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.size-option.active {
  background: #6c2bd9;
  color: white;
  border-color: #6c2bd9;
}

.seed-input {
  display: flex;
  gap: 8px;
}

.text-input {
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.refresh-btn {
  padding: 4px 8px;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.negative-prompt {
  width: 100%;
  height: 80px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
}

.image-preview {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #f9f9f9;
}

.generated-image {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.generated-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.image-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 8px;
  color: #666;
}

.prompt-suggestions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.suggestion-btn {
  padding: 8px 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.suggestion-btn:hover {
  background: #f0f0f0;
}
</style>