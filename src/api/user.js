import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/e-commerce-admin/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/e-commerce-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/e-commerce-admin/user/logout',
    method: 'post'
  })
}
