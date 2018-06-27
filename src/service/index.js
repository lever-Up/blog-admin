import request from '../utils/request'

// 登录
export function toLogin(params={}) {
  return request('/blog/admin/login', {
    method: 'post',
    data: params
  })
}
// 注销登录
export function doLogout() {
    return request('/blog/admin/logout', {
        method: 'delete'
    })
}
// 获取登录用户信息
export function statusLogin(params={}) {
    return request('/blog/admin/loginUser')
}

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
    return request(`/blog/article/${params.id}`, {
        method: 'delete'
    })
}
// 批量删除博文
export function articleBatchRemove(params={}) {
    return request(`/blog/article/batch`, {
        method: 'delete',
        data: {
            ids: params
        }
    })
}

// 用户 - 列表
export function userQuery(params={}) {
    return request('/blog/user', {
        params: params
    })
}
