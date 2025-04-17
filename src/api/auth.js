import request from '../utils/request'

export function login(data) {
  return request({
    url: '/user/login/',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export async function sendVerificationCode(phone) {
  return request({
    url: '/user/sms/send-code/',  // Removed trailing slash to avoid double slash issues
    method: 'post',
    data: { phone }
  })
}

export function loginWithEmail(data) {
  return request({
    url: '/user/email/login',
    method: 'post',
    data
  })
}

export function sendEmailVerificationCode(email) {
  return request({
    url: '/user/email/send-code',
    method: 'post',
    data: { email }
  })
}