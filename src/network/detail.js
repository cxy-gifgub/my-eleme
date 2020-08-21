import { request } from 'network/request'

export function getStoreDetail() {
  return request({
    url: '/detail',
    urltype: 2
  })
}