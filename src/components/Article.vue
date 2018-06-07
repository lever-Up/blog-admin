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
    export default {
        name: "Article"
    }
</script>

<style lang="less" scoped>
    .opts {
        display: flex;
        .btn-add {

        }
        .filter {
            .text {

            }
            .btn-search {

            }
        }
    }
    .title {

    }
    .list {

    }
</style>