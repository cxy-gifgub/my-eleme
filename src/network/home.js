import {request} from 'network/request'

export function getHomeListdata() {
    return request({
        url: '/store',
        urltype:1
    })
}