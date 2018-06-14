import request from '../utils/request'

export function articleQuery(params={}) {
    return request('/blog/article', {
        params: params
    })
}

export function articleGet(params) {
    return request(`/blog/article/${params.id}`)
}

export function articleAdd(params={}) {
    return request('/blog/article', {
        method: 'post',
        data: params
    })
}
