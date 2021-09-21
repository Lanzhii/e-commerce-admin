import request from '@/utils/request'

export function getCustomer(data) {
  return request({
    url: '/e-commerce-admin/customer',
    method: 'get',
    data
  })
}
export function getOrder(data) {
  return request({
    url: '/e-commerce-admin/order',
    method: 'get',
    data
  })
}
export function getPurchase(data) {
  return request({
    url: '/e-commerce-admin/purchase',
    method: 'get',
    data
  })
}
export function getRepertory(data) {
  return request({
    url: '/e-commerce-admin/repertory',
    method: 'get',
    data
  })
}
export function getSupplier(data) {
  return request({
    url: '/e-commerce-admin/supplier',
    method: 'get',
    data
  })
}

