import request from '@/utils/request'

export function record(data) {
  return request({
    url: '/e-commerce-admin/deshboard/record',
    method: 'get',
    data
  })
}
export function statistics(data) {
  return request({
    url: '/e-commerce-admin/deshboard/statistics',
    method: 'get',
    data
  })
}
