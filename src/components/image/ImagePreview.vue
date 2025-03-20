<template>
    <div class="preview-panel">
      <div class="image-container">
        <!-- <img 
          v-if="currentImage" 
          :src="currentImage" 
          alt="Generated image" 
          class="generated-image"
        /> -->
        <!-- <div v-else class="placeholder">输入文本生成语音</div> -->
        <div class="empty-icon">🖼️</div>
        <div class="empty-text">输入需要生成的图片</div>
      </div>
      
      <div class="prompt-suggestions">
        <button 
          v-for="(prompt, index) in suggestions" 
          :key="index"
          class="suggestion-btn"
          @click="$emit('use-prompt', prompt)"
        >
          {{ prompt }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // const currentImage = ref('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2025-03-14_16-50-09-Ti8WtyJrT5J1ah3vcmfpt38l0x9A85.png')
  const suggestions = [
    '在一片广阔无垠的沙漠中...',
    '古老的战场，你...',
    '以 Makoto Shink 的风格...',
    '创造一个大气的场景...',
  ]
  </script>
  
  <style scoped>
  .preview-panel {
    flex: 1;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #f9f9f9;
  }
  
  .image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .generated-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .placeholder {
    color: #888;
  }
  
  .prompt-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .suggestion-btn {
    padding: 8px 16px;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  </style>