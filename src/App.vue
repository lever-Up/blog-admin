<template>
    <div id="app">
        <div class="header">
            <div>博客后台系统</div>
            <div>
                <span class="label">用户：</span>
                <span class="name">XXX</span>
            </div>
        </div>
        <div class="wrap">
            <div class="left">
                <side-bar />
            </div>
            <div class="center">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import SideBar from './components/Sidebar';
    export default {
        name: 'App',
        components: {
            SideBar
        }
    }
</script>

<style lang="less" scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;
        border-bottom: solid 1px #eee;
        padding: 0 25px;
    }
    .wrap {
        flex: 1;
        display: flex;
        flex-direction: row;
        .left {
            width: 200px;
            border-right: solid 1px #eee;
        }
        .center {
            flex: 1;
            padding: 15px;
        }
    }
</style>
