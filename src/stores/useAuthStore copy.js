import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, register, getUserInfo, logout } from '../api/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref('')
  const isAuthenticated = ref(false)

  function setToken(newToken) {
    token.value = newToken
    localStorage.setItem('token', newToken)
    isAuthenticated.value = true
  }

  function clearToken() {
    token.value = ''
    localStorage.removeItem('token')
    isAuthenticated.value = false
    user.value = null
  }

  async function loginUser(credentials) {
    try {
      const response = await login(credentials)
      setToken(response.data.token)
      await fetchUserInfo()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function registerUser(userData) {
    try {
      const response = await register(userData)
      setToken(response.data.token)
      await fetchUserInfo()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async function fetchUserInfo() {
    try {
      const response = await getUserInfo()
      user.value = response.data
      return { success: true }
    } catch (error) {
      clearToken()
      return { success: false, error: error.message }
    }
  }

  async function logoutUser() {
    try {
      await logout()
      clearToken()
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    loginUser,
    registerUser,
    fetchUserInfo,
    logoutUser,
    setToken,
    clearToken
  }
})