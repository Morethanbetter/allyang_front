<template>
  <div class="voice-preview">
    <!-- 语音生成区域 -->
    <div class="preview-container">
      <div v-if="!currentAudio" class="empty-state">
        <!-- <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snipaste_2025-03-14_17-47-05-KzrnjmLvhmVeJaWcw0wsrzEXjDekKu.png" alt="Voice synthesis" class="preview-image" /> -->
        <div class="empty-icon">🎤</div>
        <div class="empty-text">输入文本生成语音</div>
      </div>
      
      <div v-else class="audio-player">
        <audio 
          :src="currentAudio" 
          controls 
          ref="audioPlayer"
          @ended="handleAudioEnded"
        ></audio>
        <div class="audio-info">
          <div class="audio-text">{{ currentText }}</div>
          <div class="audio-status">{{ isPlaying ? '播放中...' : '已完成' }}</div>
        </div>
      </div>
      
      <!-- 历史记录 -->
      <div v-if="history.length > 0" class="history-list">
        <div 
          v-for="(item, index) in history" 
          :key="index"
          class="history-item"
          @click="playHistoryItem(item)"
        >
          <div class="history-text">{{ item.text }}</div>
          <div class="history-time">{{ formatTime(item.timestamp) }}</div>
        </div>
      </div>
    </div>
    
    <!-- 提示建议 -->
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
    
    <!-- 输入区域 -->
    <div class="input-container">
      <div class="input-wrapper">
        <input 
          v-model="userInput" 
          @keyup.enter="generateVoice" 
          class="message-input" 
          placeholder="输入要转换的文本"
          :disabled="isGenerating"
        />
        <button 
          @click="generateVoice" 
          class="send-btn"
          :disabled="isGenerating || !userInput.trim()"
        >
          <span class="send-icon">↑</span>
        </button>
      </div>
      <div class="footer-text">
        内容由AI 生成，无法确保真实准确，仅供参考，并遵循与本平台《用户协议》及隐私政策相关安全和隐私规定
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useVoiceStore } from '../../stores/useVoiceStore'
import { storeToRefs } from 'pinia'

const voiceStore = useVoiceStore()
const { currentAudio, currentText, history, isGenerating } = storeToRefs(voiceStore)

const userInput = ref('')
const audioPlayer = ref(null)
const isPlaying = ref(false)

// 提示建议
const promptSuggestions = [
  '八百标兵奔北坡，炮兵并排北边跑',
  'Fear can hold you prisoner, ...',
  '死亡不是失去生命，而是走出生...',
  '家，是一个永远不会忘记的故事，...'
]

// 使用提示建议
const usePromptSuggestion = (prompt) => {
  userInput.value = prompt
}

// 生成语音
const generateVoice = async () => {
  if (!userInput.value.trim() || isGenerating.value) return
  
  await voiceStore.generateVoice(userInput.value)
  userInput.value = ''
}

// 播放历史记录
const playHistoryItem = (item) => {
  currentAudio.value = item.audioUrl
  currentText.value = item.text
  if (audioPlayer.value) {
    audioPlayer.value.play()
  }
}

// 处理音频播放结束
const handleAudioEnded = () => {
  isPlaying.value = false
}

// 格式化时间
const formatTime = (timestamp) => {
  const date = new Date(timestamp)
  return date.toLocaleTimeString()
}
</script>

<style scoped>
.voice-preview {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

.preview-container {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #888;
}

.preview-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
}

.audio-player {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.audio-info {
  margin-top: 8px;
}

.audio-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.audio-status {
  font-size: 12px;
  color: #888;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-item {
  background: white;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.history-item:hover {
  background-color: #f0f0f0;
}

.history-text {
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.history-time {
  font-size: 12px;
  color: #888;
}

.prompt-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 24px 16px;
}

.suggestion-btn {
  padding: 8px 12px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 12px;
  cursor: pointer;
}

.suggestion-btn:hover {
  background-color: #f0f0f0;
}

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
  gap: 8px;
}

.message-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  padding: 8px 0;
}

.send-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6c2bd9;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.send-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.footer-text {
  margin-top: 8px;
  font-size: 12px;
  color: #888;
  text-align: center;
}
</style>