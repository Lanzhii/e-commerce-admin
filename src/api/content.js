import request from '@/utils/request'

export function getContent(data) {
  return request({
    url: 'e-commerce-admin/contents/all',
    method: 'get',
    data
  })
}

export function getActivityOfContent(data) {
  return request({
    url: 'e-commerce-admin/content/activity',
    method: 'get',
    data
  })
}

export function getEstateOfContnet(data) {
  return request({
    url: 'e-commerce-admin/content/estate',
    method: 'get',
    data
  })
}
