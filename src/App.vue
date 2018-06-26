<template>
    <div id="app">
        <div class="header">
            <div class="logo">
                <img src="./assets/images/logo.png" alt="">
                <span>博客后台系统</span>
            </div>
            <div v-if="user.id">
                <span class="label">用户：</span>
                <span class="name">{{user.name}}</span>
            </div>
        </div>
        <div class="wrap">
            <div class="left">`
                <side-bar/>
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
    import {mapMutations, mapActions, mapState} from 'vuex'
    import SideBar from './components/Sidebar';

    export default {
        name: 'App',
        components: {
            SideBar
        },
        created() {
            this.getLoginUser()
        },
        computed: {
            ...mapState(['user']),
        },
        methods: {
            ...mapActions(['getLoginUser']),
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
        min-width: 1024px;
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
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            img {
                width: 42px;
                margin-right: 12px;
            }
            span {
                -webkit-text-stroke: 0.3px #313836;
            }
        }
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
