import {request} from 'network/request'

export function getHomeListdata(type,stoer_id) {
    return request({
        url: '/store',
        params: {
            type,
            stoer_id
        },
        urltype:1
    })
}