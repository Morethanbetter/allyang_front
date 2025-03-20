<template>
  <div class="chat-settings">
    <div class="setting-group">
      <div class="setting-label">Model</div>
      <div class="setting-value">
        <select v-model="settings.model" class="model-select">
          <option value="deepseek-r1-pro">DeepSeek-R1 (Pro)</option>
          <option value="deepseek-r1">DeepSeek-R1</option>
        </select>
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        System Prompt
        <span class="info-icon" title="系统提示词，用于设置AI的行为和角色">ⓘ</span>
      </div>
      <div class="setting-value">
        <textarea 
          v-model="settings.systemPrompt" 
          class="system-prompt"
          placeholder="Enter system prompt..."
        ></textarea>
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        Max Tokens
        <span class="info-icon" title="生成文本的最大长度">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.maxTokens" 
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.maxTokens"
          min="1"
          max="16384"
          class="slider"
        />
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        Temperature
        <span class="info-icon" title="控制生成文本的随机性，值越高随机性越大">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.temperature"
          step="0.1"
          min="0"
          max="2"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.temperature"
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
        <span class="info-icon" title="控制生成文本的多样性，值越高多样性越大">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.topP"
          step="0.01"
          min="0"
          max="1"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.topP"
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
        <span class="info-icon" title="控制每一步考虑的词汇数量">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.topK"
          min="1"
          max="100"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.topK"
          min="1"
          max="100"
          class="slider"
        />
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        Frequency Penalty
        <span class="info-icon" title="控制重复词汇的惩罚程度，值越高重复越少">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.frequencyPenalty"
          step="0.1"
          min="0"
          max="2"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.frequencyPenalty"
          min="0"
          max="2"
          step="0.1"
          class="slider"
        />
      </div>
    </div>
    
    <div class="setting-group">
      <button class="add-model-btn" @click="addComparisonModel">
        <span class="add-icon">+</span>
        添加对比模型
      </button>
    </div>
  </div>
</template>

<script setup>
import { useChatStore } from '../../stores/useChatStore'
import { storeToRefs } from 'pinia'

// 获取聊天状态
const chatStore = useChatStore()
const { settings } = storeToRefs(chatStore)

// 添加对比模型
const addComparisonModel = () => {
  // 这里可以实现添加对比模型的逻辑
  // 例如打开一个模态框让用户选择要对比的模型
  alert('添加对比模型功能即将推出')
}
</script>

<style scoped>
.chat-settings {
  width: 320px;
  padding: 16px;
  background-color: white;
  /* border-right: 1px solid #e0e0e0; */
  border-right: 1px solid var(--border-color);
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
  color: var(--text-primary);
}

.info-icon {
  margin-left: 4px;
  font-size: 12px;
  /* color: #888; */
  color: var(--text-light);
  cursor: help;
}

.setting-value {
  display: flex;
  align-items: center;
  gap: 8px;
}

.model-select {
  width: 100%;
  padding: 8px;
  /* border: 1px solid #ddd; */
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.system-prompt {
  width: 100%;
  height: 100px;
  padding: 8px;
  /* border: 1px solid #ddd; */
  border: 1px solid var(--border-color);
  border-radius: 4px;
  resize: none;
}

.number-input {
  width: 60px;
  padding: 4px 8px;
  /* border: 1px solid #ddd; */
  border: 1px solid var(--border-color);
  border-radius: 4px;
}

.slider {
  flex: 1;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  appearance: none;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  /* background: #6c2bd9; */
  background-color: var(--primary-light);
  border-radius: 50%;
  cursor: pointer;
}

.add-model-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 8px;
  /* background-color: #f0e6ff; */
  background-color: var(--primary-light);
  border: none;
  border-radius: 4px;
  /* color: #6c2bd9; */
  color: var(--primary-color);
  cursor: pointer;
  gap: 4px;
}

.add-model-btn:hover {
  /* background-color: #e0d0ff; */
  background-color: var(--primary-light);
}
</style>