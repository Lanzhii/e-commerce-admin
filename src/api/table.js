import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/e-commerce-admin/table/list',
    method: 'get',
    params
  })
}
