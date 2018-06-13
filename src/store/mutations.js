import * as TYPES from './mutation-types'

export default {
    [TYPES.QUERY_ARTICLE](state, {articleList}) {
        state.articleList = articleList;
    }
}