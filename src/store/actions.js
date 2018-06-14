import {
    articleQuery,
    articleGet,
    articleAdd
} from '../service'
import * as TYPES from './mutation-types'

export default {
    async queryArticle({commit, state}, params){
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
    async removeArticle({commit, state}, params) {

    }
}