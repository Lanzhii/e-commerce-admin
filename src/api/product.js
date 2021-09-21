import request from '@/utils/request'

export function productList(data) {
  return request({
    url: 'e-commerce-admin/product/list',
    method: 'get',
    data
  })
}

export function productAll(data) {
  return request({
    url: 'e-commerce-admin/product/all',
    method: 'get',
    data
  })
}
