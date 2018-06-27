import {
    toLogin,
    doLogout,
    statusLogin,
    articleQuery,
    articleGet,
    articleAdd,
    articleModify,
    articleRemove,
    articleBatchRemove,
    userQuery
} from '../service'
import * as TYPES from './mutation-types'
import router from '../router'

export default {
    async login({commit, state}, params) {
        let res = await toLogin(params);
        if(res.code == 0) {
            let d = await statusLogin();
            if(d.code == 0) {
                router.replace('/')
            }
            commit(TYPES.STATUS_USER, d)
        }
    },
    async logout({commit, state}) {
        let res = await doLogout();
        commit(TYPES.LOGOUT_USER, res)
    },
    async getLoginUser({commit, state}) {
        let res = await statusLogin();
        commit(TYPES.STATUS_USER, res)
    },
    async queryArticle({commit, state}, params) {
        let res = await articleQuery(params);
        commit(TYPES.QUERY_ARTICLE, res)
    },
    async getArticle({commit, state}, params) {
        let res = await articleGet(params);
        commit(TYPES.GET_ARTICLE, res)
    },
    async addArticle({commit, state}, params) {
        let res = await articleAdd(params);
        commit(TYPES.ADD_ARTICLE, res)
    },
    async modifyArticle({commit, state}, params) {
        let res = await articleModify(params);
        commit(TYPES.MODIFY_ARTICLE, res)
    },
    async removeArticle({commit, state}, params) {
        let res = await articleRemove(params);
        commit(TYPES.REMOVE_ARTICLE, res)
    },
    async removeBatchArticle({commit, state}, params) {
        let res = await articleBatchRemove(params);
        commit(TYPES.REMOVE_BATCH_ARTICLE, res)
    },
    async queryUser({commit, state}, params) {
        let res = await userQuery(params);
        commit(TYPES.QUERY_USER, res)
    }
}
