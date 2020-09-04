import { request } from 'network/request'

export function getStoreDetail() {
  return request({
    url: '/detail',
    urltype: 2
  })
}
export function getStoreEvaluate() {
  return request({
    url: '/eva',
    urltype: 3
  })
}