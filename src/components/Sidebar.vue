<template>
  <div class="side-bar">
    <router-link to="/" class="item">首页</router-link>
    <router-link to="/article" class="item">文章管理</router-link>
    <router-link to="/category" class="item">分类管理</router-link>
    <router-link to="/user" class="item">用户管理</router-link>
  </div>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style lang="less" scoped>
  .side-bar {
    margin-top: 18px;
    .item {
      display: block;
      text-align: left;
      padding-left: 50px;
      line-height: 40px;
      text-decoration: none;
      color: #444;
      &:hover, &.active {
        color: #07f;
      }
    }
  }
</style>
