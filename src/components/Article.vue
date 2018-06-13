<template>
    <div>
        <div class="opts">
            <router-link to="/article/add" class="btn-add">添加</router-link>
            <div class="filter">
                <input type="text" placeholder="输入关键字" class="text">
                <button class="btn-search">搜索</button>
            </div>
        </div>
        <div class="title">文章列表</div>
        <div class="list">

        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name: "Article",
        data() {
            return {}
        },
        mounted(){
            this.queryArticle();

        },
        computed: {
            ...mapState([
                'articleList'
            ]),
        },
        methods: {
            ...mapActions([
                'queryArticle'
            ]),
        },
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

    }
</style>