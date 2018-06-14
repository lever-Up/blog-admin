import request from '../utils/request'

// 查询博文列表
export function articleQuery(params={}) {
    return request('/blog/article', {
        params: params
    })
}
// 获取博文信息
export function articleGet(params) {
    return request(`/blog/article/${params.id}`)
}
// 添加博文
export function articleAdd(params={}) {
    return request('/blog/article', {
        method: 'post',
        data: params
    })
}
// 修改博文
export function articleModify(params={}) {
    return request(`/blog/article/${params.id}`, {
        method: 'post',
        data: params.data
    })
}
// 删除博文
export function articleRemove(params={}) {
    return request(`/blog/article`, {
        method: 'del',
        data: params
    })
}