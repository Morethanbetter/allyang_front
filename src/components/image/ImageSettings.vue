<template>
  <div class="settings-panel">
    <div class="setting-group">
      <label class="setting-label">Model</label>
      <select v-model="settings.model" class="model-select">
        <option value="kolors">Kolors</option>
        <option value="stable-diffusion">Stable Diffusion</option>
      </select>
    </div>

    <div class="setting-group">
      <label class="setting-label">
        Image Size
        <span class="info-icon">ⓘ</span>
      </label>
      <div class="size-options">
        <button 
          v-for="size in imageSizes" 
          :key="size.ratio"
          :class="['size-btn', { active: settings.size === size.ratio }]"
          @click="settings.size = size.ratio"
        >
          {{ size.label }}
        </button>
      </div>
    </div>

    <!-- Other settings... -->
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useImageStore } from '../../stores/useImageStore'

const imageStore = useImageStore()
const settings = reactive(imageStore.settings)

const imageSizes = [
  { ratio: '1:1', label: '1:1' },
  { ratio: '1:2', label: '1:2' },
  { ratio: '3:2', label: '3:2' },
  { ratio: '3:4', label: '3:4' },
  { ratio: '16:9', label: '16:9' },
  { ratio: '9:16', label: '9:16' }
]
</script>

<style scoped>
.settings-panel {
  width: 320px;
  padding: 24px;
  background-color: white;
  border-right: 1px solid var(--border-color);
  overflow-y: auto;
}

.setting-group {
  margin-bottom: 24px;
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
  font-weight: 500;
}

.info-icon {
  color: #888;
  font-size: 14px;
}

.size-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.size-btn {
  padding: 8px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.size-btn.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}
</style>