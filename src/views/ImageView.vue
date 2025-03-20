<template>
  <div class="image-view">
    <div class="content-wrapper">
      <ImageSettings />
      <ImagePreview />
    </div>
    <div class="input-container">
      <div class="input-wrapper">
        <input 
          v-model="prompt" 
          @keyup.enter="generateImage" 
          class="prompt-input" 
          placeholder="输入图像描述"
        />
        <button @click="generateImage" class="submit-btn">
          <span class="submit-icon">↑</span>
        </button>
      </div>
      <div class="footer-text">
        内容由AI 生成，无法确保真实准确，仅供参考，并遵循与本平台《用户协议》及隐私政策相关安全和隐私规定
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageSettings from '../components/image/ImageSettings.vue'
import ImagePreview from '../components/image/ImagePreview.vue'

const prompt = ref('')

const generateImage = async () => {
  if (!prompt.value.trim()) return
  // Implementation...
}
</script>

<style scoped>
.image-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.content-wrapper {
  flex: 1;
  display: flex;
  min-height: 0;
}

.input-container {
  padding: 16px 24px;
  background-color: white;
  border-top: 1px solid var(--border-color);
}

.input-wrapper {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.prompt-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 8px 0;
}

.submit-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.footer-text {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>