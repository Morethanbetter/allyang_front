<template>
    <div class="chat-preview">
      <!-- 聊天消息区域 -->
      <div class="messages-container" ref="messagesContainer">
        <div v-if="messages.length === 0" class="empty-state">
          <div class="empty-icon">💬</div>
          <div class="empty-text">开始一段新的对话吧</div>
        </div>
        <!-- <div v-for="(message, index) in messages" :key="index" class="message" :class="message.role">
          <div class="message-content">{{ message.content }}</div>
        </div> -->
        <div 
          v-for="(message, index) in messages" 
          :key="index" 
          class="message" 
          :class="message.role"
        >
          <div class="message-content">
            <div v-if="message.role === 'assistant' && message.loading" class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div v-else v-html="formatMessage(message.content)"></div>
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
            @keyup.enter="sendMessage" 
            class="message-input" 
            placeholder="输入AI prompt"
            :disabled="isLoading"
          />
          <button 
            @click="sendMessage" 
            class="send-btn"
            :disabled="isLoading || !userInput.trim()"
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
  import { ref, computed, watch, nextTick } from 'vue'
  import { useChatStore } from '../../stores/useChatStore'
  import { storeToRefs } from 'pinia'
  
  // 获取聊天状态
  const chatStore = useChatStore()
  const { messages, isLoading } = storeToRefs(chatStore)
  
  // 用户输入
  const userInput = ref('')
  const messagesContainer = ref(null)
  
  // 提示建议
  const promptSuggestions = [
    '抗生素能否帮助病毒感染呢?',
    '如何评价高考志在与综合评价?',
    '给我讲个简短的故事',
    '理是道德还是规矩'
  ]
  
  // 使用提示建议
  const usePromptSuggestion = (prompt) => {
    userInput.value = prompt
  }
  
  // 发送消息
  const sendMessage = async () => {
    if (!userInput.value.trim() || isLoading.value) return
    
    await chatStore.sendMessage(userInput.value)
    userInput.value = ''
  }
  
  // 格式化消息内容（支持简单的Markdown）
  const formatMessage = (content) => {
    if (!content) return ''
    
    // 转义HTML
    let formatted = content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
    
    // 支持简单的Markdown
    // 粗体
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 斜体
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 代码块
    formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // 行内代码
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>')
    // 换行
    formatted = formatted.replace(/\n/g, '<br>')
    
    return formatted
  }
  
  // 监听消息变化，自动滚动到底部
  watch(messages, async () => {
    await nextTick()
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  }, { deep: true })
  </script>
  
  <style scoped>
  .chat-preview {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-bg);
  }
  
  .messages-container {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .empty-state {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
  }
  
  .empty-icon {
    font-size: 48px;
    margin-bottom: 16px;
    color: var(--primary-color);
  }
  
  .empty-text {
    font-size: 16px;
  }
  
  .message {
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
    background-color: var(--primary-color);
    color: white;
  }
  
  /* 打字指示器 */
  .typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .typing-indicator span {
    width: 8px;
    height: 8px;
    background-color: #888;
    border-radius: 50%;
    animation: typing 1s infinite ease-in-out;
  }
  
  .typing-indicator span:nth-child(1) {
    animation-delay: 0s;
  }
  
  .typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  /* 提示建议 */
  .prompt-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 24px 16px;
  }
  
  .suggestion-btn {
    padding: 8px 12px;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    font-size: 12px;
    cursor: pointer;
  }
  
  .suggestion-btn:hover {
    background-color: var(--primary-light);
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  
  /* 输入区域 */
  .input-container {
    padding: 16px 24px;
    background-color: white;
    border-top: 1px solid var(--border-color);
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    border-top: 1px solid var(--border-color);
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
    background-color: var(--primary-color);
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
    color: var(--text-light);
    text-align: center;
  }
  
  /* 代码样式 */
  :deep(pre) {
    background-color: #f0f0f0;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
  }
  
  :deep(code) {
    font-family: monospace;
  }
  
  :deep(p) {
    margin-bottom: 8px;
  }
  </style>