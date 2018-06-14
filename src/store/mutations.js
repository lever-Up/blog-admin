import router from '../router'
import * as TYPES from './mutation-types'

export default {
    [TYPES.QUERY_ARTICLE](state, data) {
        if(data.code == 0) {
            state.articleList = data.data;
        }
    },
    [TYPES.ADD_ARTICLE](state, data) {
        if(data.code == 0) {
            state.articleList.unshift(data.data);
            router.back();
        }
    }
}