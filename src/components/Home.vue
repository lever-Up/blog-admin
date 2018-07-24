<template>
  <div class="home">
    <p>欢迎使用博客后台管理系统</p>
    <Button :loading="true" :click="onClick">点击</Button>
  </div>
</template>

<script>

  export default {
    name: "Home",
    methods: {
      onClick(cb) {
        setTimeout(()=>{
          cb()
        },3000)
      }
    }
  }
</script>

<style lang="less" scoped>
  .home {
    padding: 30px;
    text-align: center;
  }
</style>
