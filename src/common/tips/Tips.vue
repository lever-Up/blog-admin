<template>
    <div class="c-tips" @click="hide($event)">
        <div class="c-tips-wrap">
            <div v-if="title" class="c-tips-title">{{title}}</div>
            <div v-if="msg" class="c-tips-msg">{{msg}}</div>
            <div class="c-tips-foot">
                <div class="btn btn-cancel" @click="btnClose()">关闭</div>
                <div v-if="type==='confirm'" class="btn btn-ok" @click="btnOk()">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tips",
        props: {
            type: {type: String, default: ()=>'alert'}, // alert / confirm
            title: {type: String},
            msg: {type: String},
            close: {type: Function},
            ok: {type: Function},
        },
        created() {
            document.body.style.overflow = 'hidden';
        },
        methods: {
            hide(event) {
                if( (event && event.target.className === 'b-tips') || !event ) {
                    document.body.style.overflow = 'initial';
                    document.body.removeChild(this.$el);
                }
            },
            btnClose() {
                if(this.close) {
                    this.close(this)
                }else{
                    this.hide()
                }
            },
            btnOk() {
                if(this.ok) {
                    this.ok(this)
                }else{
                    this.hide()
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .c-tips {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fade-in 0.5s;
        &-wrap {
            border-radius: 3px;
            box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
            background-color: #fff;
            min-width: 200px;
            max-width: 90%;
            /*min-height: 120px;*/
            max-height: 90%;
            position: relative;
            padding: 15px 10px;
            overflow: auto;
            animation: show-alert 0.5s;
            text-align: center;
        }
        &-title {
            font-weight: 600;
        }
        &-msg {
            margin: 20px 0;
        }
        &-foot {
            display: flex;
            justify-content: space-around;
            align-items: center;
            .btn {
                width: 38%;
                padding: 4px 0;
                text-align: center;
                border: solid 1px #999;
                border-radius: 4px;
                cursor: pointer;
                &:hover {
                    border-color: #85b0d6;
                    color: #07f;
                }
            }
        }
    }
    @keyframes show-alert {
        0% {
            transform: scale(0.7);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
