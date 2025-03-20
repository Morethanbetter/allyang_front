<template>
    <div class="voice-view">
      <div class="voice-container">
        <VoiceSettings />
        <VoicePreview />
      </div>
    </div>
  </template>
  
  <script setup>
  import VoiceSettings from '../components/voice/VoiceSettings.vue'
  import VoicePreview from '../components/voice/VoicePreview.vue'
  </script>
  
  <style scoped>
  .voice-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
  
  .voice-container {
    display: flex;
    flex: 1;
    min-height: 0;
  }
  </style>