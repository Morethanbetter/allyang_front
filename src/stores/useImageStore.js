import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', {
  state: () => ({
    settings: {
      model: 'kolors',
      size: '1:1',
      numImages: 1,
      seed: '',
      steps: 25,
      guidanceScale: 7.5,
      negativePrompt: ''
    },
    currentImage: null,
    isGenerating: false
  }),
  
  actions: {
    async generateImage(prompt) {
      this.isGenerating = true
      try {
        const response = await fetch('http://localhost:5000/generate-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            prompt,
            settings: this.settings
          })
        })
        
        const data = await response.json()
        this.currentImage = data.imageUrl
      } catch (error) {
        console.error('Error generating image:', error)
      } finally {
        this.isGenerating = false
      }
    }
  }
})