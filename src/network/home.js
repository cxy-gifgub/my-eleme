import {request} from 'network/request'

export function getHomeListdata(type) {
    return request({
        url: '/store',
        params: {
            type
        },
        urltype:1
    })
}