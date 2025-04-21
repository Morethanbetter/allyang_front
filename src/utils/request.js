import axios from 'axios'

// Determine the base URL based on the environment
const getBaseURL = () => {
  // For production, use the actual API server
  if (import.meta.env.PROD) {
    return 'http://ai.allyang.com/api'
  }
  
  // For development, use the proxy defined in vite.config.js
  return 'http://127.0.0.1:8000/api'
}

const service = axios.create({
  baseURL: getBaseURL(),
  timeout: 15000
})

// Request interceptor
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    console.info('Response---1:', res)
    // If the status code is not 200, the API request has an error
    if (res.code !== 200) {
      // Handle specific errors, such as 401 unauthorized
      if (res.code === 401) {
        // Clear token and redirect to login page
        localStorage.removeItem('token')
        window.location.href = '/login'
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.error('Response error:', error)
    // Handle network errors
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default service