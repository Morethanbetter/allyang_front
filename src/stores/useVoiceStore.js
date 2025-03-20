import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useVoiceStore = defineStore('voice', () => {
  // 语音设置
  const settings = reactive({
    model: 'funaudio-llm-cosyvoice2-0.58',
    speed: 1.0,
    volumeGain: 0.0,
    voice: 'alex'
  })

  // 当前音频
  const currentAudio = ref(null)
  const currentText = ref('')
  
  // 生成状态
  const isGenerating = ref(false)
  
  // 历史记录
  const history = ref([])
  
  // 生成语音
  const generateVoice = async (text) => {
    if (!text.trim()) return
    
    isGenerating.value = true
    
    try {
      const response = await fetch('http://localhost:5000/generate-voice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          settings
        })
      })
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      // 更新当前音频
      currentAudio.value = data.audioUrl
      currentText.value = text
      
      // 添加到历史记录
      history.value.unshift({
        text,
        audioUrl: data.audioUrl,
        timestamp: new Date().getTime()
      })
      
    } catch (error) {
      console.error('Error generating voice:', error)
      // 这里可以添加错误提示
    } finally {
      isGenerating.value = false
    }
  }
  
  // 清空历史
  const clearHistory = () => {
    history.value = []
    currentAudio.value = null
    currentText.value = ''
  }
  
  return {
    settings,
    currentAudio,
    currentText,
    isGenerating,
    history,
    generateVoice,
    clearHistory
  }
})