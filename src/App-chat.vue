<template>
  <div class="app-container">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div class="logo">
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
          <div class="nav-item active">
            <div class="nav-icon">💬</div>
            <span>文本对话</span>
          </div>
          <div class="nav-item">
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
    </div>
    
    <!-- 主内容区 -->
    <div class="main-content">
      <div class="header">
        <div class="tab-active">文本对话</div>
        <div class="user-info">
          <div class="tokens">
            <span class="token-icon">💰</span>
            <span class="token-count">10</span>
          </div>
          <div class="user-avatar">
          </div>
        </div>
      </div>
      
      <div class="chat-container">
        <div class="model-settings">
          <div class="setting-group">
            <div class="setting-label">Model</div>
            <div class="setting-value">
              <select v-model="modelSettings.model" class="model-select">
                <option value="deepseek-r1-pro">DeepSeek-R1 (Pro)</option>
                <option value="deepseek-r1">DeepSeek-R1</option>
              </select>
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              System Prompt
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <textarea 
                v-model="modelSettings.systemPrompt" 
                class="system-prompt"
                placeholder="Enter system prompt..."
              ></textarea>
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Max Tokens
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="modelSettings.maxTokens" 
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="modelSettings.maxTokens" 
                min="1" 
                max="16384" 
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Temperature
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="modelSettings.temperature" 
                step="0.1" 
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="modelSettings.temperature" 
                min="0" 
                max="2" 
                step="0.1" 
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Top-P
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="modelSettings.topP" 
                step="0.01" 
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="modelSettings.topP" 
                min="0" 
                max="1" 
                step="0.01" 
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Top-K
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="modelSettings.topK" 
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="modelSettings.topK" 
                min="1" 
                max="100" 
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <div class="setting-label">
              Frequency Penalty
              <span class="info-icon">ⓘ</span>
            </div>
            <div class="setting-value">
              <input 
                type="number" 
                v-model.number="modelSettings.frequencyPenalty" 
                step="0.1" 
                class="number-input"
              />
              <input 
                type="range" 
                v-model.number="modelSettings.frequencyPenalty" 
                min="0" 
                max="2" 
                step="0.1" 
                class="slider"
              />
            </div>
          </div>
          
          <div class="setting-group">
            <button class="add-model-btn">
              <span class="add-icon">+</span>
              添加对比模型
            </button>
          </div>
        </div>
        
        <div class="chat-messages">
          <div v-for="(message, index) in messages" :key="index" class="message" :class="message.role">
            <div class="message-content">{{ message.content }}</div>
          </div>
          
          <div class="message-actions">
            <button class="action-btn" @click="usePromptTemplate('给我讲个简短的故事')">给我讲个简短的故事</button>
            <button class="action-btn" @click="usePromptTemplate('空气变化的真正含义')">空气变化的真正含义</button>
            <button class="action-btn" @click="usePromptTemplate('大模型的发展重大突破点?')">大模型的发展重大突破点?</button>
            <button class="action-btn" @click="usePromptTemplate('电脑配置推荐哪些配置呢?')">电脑配置推荐哪些配置呢?</button>
          </div>
        </div>
      </div>
      
      <div class="input-container">
        <div class="input-wrapper">
          <input 
            v-model="userInput" 
            @keyup.enter="sendMessage" 
            class="message-input" 
            placeholder="输入AI prompt"
          />
          <button @click="sendMessage" class="send-btn">
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

// 模型设置
const modelSettings = reactive({
  model: 'deepseek-r1-pro',
  systemPrompt: '',
  maxTokens: 8192,
  temperature: 0.6,
  topP: 0.95,
  topK: 50,
  frequencyPenalty: 0.0
});

// 聊天消息
const messages = ref([]);
const userInput = ref('');

// 使用提示模板
const usePromptTemplate = (template) => {
  userInput.value = template;
};

// 发送消息到后端
const sendMessage = async () => {
  if (!userInput.value.trim()) return;
  
  // 添加用户消息到聊天
  messages.value.push({
    role: 'user',
    content: userInput.value
  });
  
  try {
    // 发送请求到后端
    const response = await fetch('http://localhost:8000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: userInput.value,
        settings: modelSettings
      })
    });
    
    const data = await response.json();
    console.log('返回的数据是：', data)
    // 添加AI响应到聊天
    messages.value.push({
      role: 'assistant',
      content: data.message
    });
  } catch (error) {
    console.error('Error sending message:', error);
    messages.value.push({
      role: 'assistant',
      content: '抱歉，发生了错误，请稍后再试。'
    });
  }
  
  // 清空输入
  userInput.value = '';
};
</script>

<style>
/* 基础样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app-container {
  display: flex;
  height: 100vh;
  background-color: #f0e6ff;
}

/* 侧边栏样式 */
.sidebar {
  width: 160px;
  background-color: #6c2bd9;
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
  cursor: pointer;
}

.nav-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-icon {
  margin-right: 8px;
  width: 20px;
  text-align: center;
}

/* 主内容区样式 */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
}

.tab-active {
  font-weight: bold;
  padding: 4px 8px;
  border-bottom: 2px solid #6c2bd9;
}

.user-info {
  display: flex;
  align-items: center;
}

.tokens {
  display: flex;
  align-items: center;
  margin-right: 16px;
  background-color: #f5f5f5;
  padding: 4px 8px;
  border-radius: 16px;
}

.token-icon {
  margin-right: 4px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

/* 聊天容器样式 */
.chat-container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.model-settings {
  width: 400px;
  padding: 16px;
  background-color: white;
  border-right: 1px solid #e0e0e0;
  overflow-y: auto;
}

.setting-group {
  margin-bottom: 16px;
}

.setting-label {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-weight: 500;
}

.info-icon {
  margin-left: 4px;
  font-size: 12px;
  color: #888;
}

.model-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.system-prompt {
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
}

.number-input {
  width: 60px;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 8px;
}

.slider {
  flex: 1;
  height: 4px;
}

.setting-value {
  display: flex;
  align-items: center;
}

.add-model-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  background-color: #f0e6ff;
  border: none;
  border-radius: 4px;
  color: #6c2bd9;
  cursor: pointer;
}

.add-icon {
  margin-right: 4px;
}

/* 聊天消息样式 */
.chat-messages {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

.message {
  margin-bottom: 16px;
  max-width: 80%;
}

.message.user {
  align-self: flex-end;
}

.message.assistant {
  align-self: flex-start;
}

.message-content {
  padding: 12px 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message.user .message-content {
  background-color: #6c2bd9;
  color: white;
}

.message-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.action-btn {
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 12px;
  cursor: pointer;
}

/* 输入容器样式 */
.input-container {
  padding: 16px 24px;
  background-color: white;
  border-top: 1px solid #e0e0e0;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 8px 16px;
}

.message-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 8px 0;
}

.send-btn {
  background-color: #6c2bd9;
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.footer-text {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>