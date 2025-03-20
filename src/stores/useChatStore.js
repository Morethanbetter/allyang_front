import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useChatStore = defineStore('chat', () => {
  // 聊天设置
  const settings = reactive({
    model: 'deepseek-r1-pro',
    systemPrompt: '',
    maxTokens: 8192,
    temperature: 0.6,
    topP: 0.95,
    topK: 50,
    frequencyPenalty: 0.0
  })

  // 聊天消息
  const messages = ref([])
  
  // 加载状态
  const isLoading = ref(false)
  
  // 错误信息
  const error = ref(null)
  
  // 会话ID
  const conversationId = {
    value: Math.random().toString(36).substr(2)
  }
  console.log("生成的会话数据", conversationId.value)
  
  // 发送消息
  const sendMessage = async (content) => {
    if (!content.trim()) return
    
    // 添加用户消息
    messages.value.push({
      role: 'user',
      content
    })
    
    // 添加一个临时的AI消息，显示加载状态
    messages.value.push({
      role: 'assistant',
      content: '',
      loading: true
    })
    
    isLoading.value = true
    error.value = null
    
    try {
      // 发送请求到后端
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: content,
          // settings,
          conversationId: conversationId.value
        })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log('返回的数据是：', data, conversationId.value, data.conversationId)
      // 更新会话ID
      if (data.conversationId) {
        conversationId.value = data.conversationId
      }
      console.log('更新会话消息：', data)
      // 更新AI消息
      const lastIndex = messages.value.length - 1
      messages.value[lastIndex] = {
        role: 'assistant',
        content: data.message,
        loading: false
      }
    } catch (err) {
      console.error('Error sending message:', err)
      error.value = err.message
      
      // 更新错误消息
      const lastIndex = messages.value.length - 1
      messages.value[lastIndex] = {
        role: 'assistant',
        content: '抱歉，发生了错误，请稍后再试。',
        loading: false,
        isError: true
      }
    } finally {
      isLoading.value = false
    }
  }
  
  // 清空聊天
  const clearChat = () => {
    messages.value = []
    conversationId.value = null
  }
  
  // 重置设置
  const resetSettings = () => {
    Object.assign(settings, {
      model: 'deepseek-r1-pro',
      systemPrompt: '',
      maxTokens: 8192,
      temperature: 0.6,
      topP: 0.95,
      topK: 50,
      frequencyPenalty: 0.0
    })
  }
  
  return {
    settings,
    messages,
    isLoading,
    error,
    conversationId,
    sendMessage,
    clearChat,
    resetSettings
  }
})