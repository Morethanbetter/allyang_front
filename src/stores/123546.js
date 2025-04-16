import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { login, register, logout } from "../api/auth"

export const useAuthStore = defineStore("auth", () => {
  // State
  const user = ref(null)
  const token = ref(localStorage.getItem("token") || null)

  // Getters
  const isAuthenticated = computed(() => !!token.value)

  // Actions
  async function loginUser(credentials) {
    try {
      const response = await login(credentials)

      if (response.success) {
        user.value = response.user
        token.value = response.token

        // Store token in localStorage if remember me is checked
        if (credentials.rememberMe) {
          localStorage.setItem("token", response.token)
        }

        return { success: true }
      } else {
        return { success: false, error: response.message || "登录失败" }
      }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: error.message || "登录失败" }
    }
  }

  async function registerUser(userData) {
    try {
      const response = await register(userData)

      if (response.success) {
        user.value = response.user
        token.value = response.token

        // Store token in localStorage
        localStorage.setItem("token", response.token)

        return { success: true }
      } else {
        return { success: false, error: response.message || "注册失败" }
      }
    } catch (error) {
      console.error("Register error:", error)
      return { success: false, error: error.message || "注册失败" }
    }
  }

  async function logoutUser() {
    try {
      await logout()

      // Clear user data and token
      user.value = null
      token.value = null
      localStorage.removeItem("token")

      return { success: true }
    } catch (error) {
      console.error("Logout error:", error)
      return { success: false, error: error.message || "登出失败" }
    }
  }

  // Initialize user data if token exists
  async function initializeAuth() {
    if (token.value) {
      try {
        // In a real app, you would validate the token and get user data
        // For now, we'll just set a mock user
        user.value = {
          id: 1,
          name: "测试用户",
          avatar: "/static/logo.jpg",
        }
      } catch (error) {
        console.error("Auth initialization error:", error)
        // Clear invalid token
        token.value = null
        localStorage.removeItem("token")
      }
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    loginUser,
    registerUser,
    logoutUser,
    initializeAuth,
  }
})
