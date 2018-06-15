<template>
    <div>
        <div class="opts">
            <router-link to="/article/add" class="btn-add">添加</router-link>
            <a href="javascript:;" class="btn-add" @click="batchRemove">删除</a>
            <div class="filter">
                <input type="text" placeholder="输入关键字" class="text">
                <button class="btn-search">搜索</button>
            </div>
        </div>
        <div class="title">文章列表</div>
        <div class="list">
            <div class="row row-head">
                <div class="cell cell-cb">
                    <input type="checkbox" :checked="articleList.length>0 && articleList.length===cbIds.length" @change="allSelect">
                </div>
                <div class="cell cell-index">序号</div>
                <div class="cell cell-title">标题</div>
                <div class="cell cell-user">类目</div>
                <div class="cell cell-user">用户</div>
                <div class="cell cell-time">时间</div>
            </div>
            <div v-if="articleList.length===0" class="row">
                <div class="cell cell-nodata">暂无数据</div>
            </div>
            <div v-for="(item, index) in articleList" :key="item.id" class="row">
                <div class="cell cell-cb">
                    <input type="checkbox" :value="item.id" :checked="cbIds.includes(item.id)" v-model="cbIds">
                </div>
                <div class="cell cell-index">{{index}}</div>
                <div class="cell cell-title">
                    <router-link :to="{name:'article',params:{id:item.id}}">{{item.title}}</router-link>
                </div>
                <div class="cell cell-user">{{item.categoryId}}</div>
                <div class="cell cell-user">{{item.uid}}</div>
                <div class="cell cell-time">{{item.createTime | time }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import moment from 'moment'
    export default {
        data() {
            return {
                cbIds: []
            }
        },
        created(){
            this.queryArticle();
        },
        computed: {
            ...mapState(['articleList']),
        },
        methods: {
            ...mapActions(['queryArticle', 'removeBatchArticle']),
            batchRemove() {
                if(this.cbIds.length > 0) {
                    this.removeBatchArticle(this.cbIds);
                }
            },
            allSelect(e) {
                if(e.target.checked) {
                    this.cbIds = this.articleList.map( item => item.id)
                }else{
                    this.cbIds = [];
                }
            }
        },
        filters: {
            time(timestamp) {
                return moment(timestamp).format("YYYY-MM-DD　HH:mm");
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/mixin";
    .opts {
        display: flex;
        .btn-add {
            .ad-button;
            margin-right: 20px;
        }
        .filter {
            .text {
                .ad-text;
            }
            .btn-search {
                .ad-button;
            }
        }
    }
    .title {
        .ad-title;
        margin-top: 16px;
    }
    .list {
        .row {
            display: table;
            width: 100%;
            border-left: solid 1px #ddd;
            &-head {
                background-color: #eee;
                border-top: solid 1px #ddd;
            }
            .cell {
                display: table-cell;
                vertical-align: middle;
                padding: 8px;
                text-align: center;
                border-bottom: solid 1px #ddd;
                border-right: solid 1px #ddd;
                box-sizing: border-box;
                &-cb {
                    width: 50px;
                    input {
                        width: 16px;
                        height: 16px;
                    }
                }
                &-index {
                    width: 80px;
                }
                &-title {
                    text-align: left;
                    padding-left: 10px;
                    word-wrap:break-word;
                    word-break:break-all;
                }
                &-user {
                    width: 120px;
                }
                &-time {
                    width: 150px;
                }
                &-nodata {
                    color: #999;
                    padding: 20px 0;
                }
            }
        }
    }
</style>