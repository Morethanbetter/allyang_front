<template>
  <div class="chat-view">
    <div class="chat-container">
      <ChatSettings />
      <ChatPreview />
    </div>
  </div>
</template>

<script setup>
import ChatSettings from '../components/text/ChatSettings.vue'
import ChatPreview from '../components/text/ChatPreview.vue'
</script>

<style scoped>
.chat-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.chat-container {
  display: flex;
  flex: 1;
  min-height: 0;
}
</style>