import router from '../router'
import * as TYPES from './mutation-types'

export default {
    [TYPES.LOGIN_USER](state, data) {
        if (data.code === 0) {
            router.replace('/')
        }
    },
    [TYPES.STATUS_USER](state, data) {
        console.log(data)
        if (data.code === 0) {
            state.user = data.data;
        }else{
            router.replace('/login')
        }
    },
    [TYPES.QUERY_ARTICLE](state, data) {
        if (data.code === 0) {
            state.articleList = data.data;
        }
    },
    [TYPES.ADD_ARTICLE](state, data) {
        if (data.code === 0) {
            router.back();
        }
    },
    [TYPES.GET_ARTICLE](state, data) {
        if (data.code === 0) {
            state.article = data.data
        }
    },
    [TYPES.MODIFY_ARTICLE](state, data) {
        if (data.code === 0) {
            router.back();
        }
    },
    [TYPES.REMOVE_ARTICLE](state, data) {
        if (data.code === 0) {
            router.back();
        }
    },
    [TYPES.REMOVE_BATCH_ARTICLE](state, data) {
        if (data.code === 0) {
            state.articleList = state.articleList.filter(item => !data.data.includes(item.id))
        }
    },
    SET_PARAM(state, param) {
        state[param.key] = param.value
    }
}