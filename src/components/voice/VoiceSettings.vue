<template>
  <div class="voice-settings">
    <div class="setting-group">
      <div class="setting-label">Model</div>
      <div class="setting-value">
        <select v-model="settings.model" class="model-select">
          <option value="funaudio-llm-cosyvoice2-0.58">FunAudioLLM/CosyVoice2-0.58</option>
          <option value="funaudio-llm-cosyvoice2">FunAudioLLM/CosyVoice2</option>
        </select>
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        倍速
        <span class="info-icon" title="语音播放速度">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.speed"
          step="0.1"
          min="0.5"
          max="2.0"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.speed"
          min="0.5"
          max="2.0"
          step="0.1"
          class="slider"
        />
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        音量增益 (dB)
        <span class="info-icon" title="调整音量大小">ⓘ</span>
      </div>
      <div class="setting-value">
        <input 
          type="number" 
          v-model.number="settings.volumeGain"
          step="0.1"
          class="number-input"
        />
        <input 
          type="range" 
          v-model.number="settings.volumeGain"
          min="-20"
          max="20"
          step="0.1"
          class="slider"
        />
      </div>
    </div>
    
    <div class="setting-group">
      <div class="setting-label">
        音色
        <span class="info-icon" title="选择语音角色">ⓘ</span>
      </div>
      <div class="setting-value">
        <select v-model="settings.voice" class="voice-select">
          <option value="alex">Alex</option>
          <option value="emma">Emma</option>
          <option value="brian">Brian</option>
          <option value="amy">Amy</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useVoiceStore } from '../../stores/useVoiceStore'
import { storeToRefs } from 'pinia'

const voiceStore = useVoiceStore()
const { settings } = storeToRefs(voiceStore)
</script>

<style scoped>
.voice-settings {
  width: 320px;
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
  cursor: help;
}

.setting-value {
  display: flex;
  align-items: center;
  gap: 8px;
}

.model-select,
.voice-select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.number-input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid #ddd;
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
  background: #6c2bd9;
  border-radius: 50%;
  cursor: pointer;
}
</style>