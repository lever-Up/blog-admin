<template>
    <div class="c-modal" v-if="visible" @click="hide($event)">
        <div class="c-modal-box">
            <span class="btn-close" @click="hide()">x</span>
            <div class="c-modal-title" v-if="title && title.trim()">{{title}}</div>
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            title: { type: String }
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show() {
                this.visible = true;
                document.body.style.overflow = 'hidden';
            },
            hide(event) {
                if( (event && event.target.className === 'c-modal') || !event ) {
                    document.body.style.overflow = 'initial';
                    this.visible = false;
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .c-modal {
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
        &-box {
            border-radius: 3px;
            box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
            background-color: #fff;
            min-width: 300px;
            max-width: 90%;
            min-height: 150px;
            max-height: 90%;
            position: relative;
            padding: 20px 10px;
            overflow: auto;
            animation: show-modal 0.5s;
            .btn-close {
                position: absolute;
                right: 5px;
                top: 0;
                font-size: 24px;
                color: #999;
                width: 28px;
                text-align: center;
                cursor: pointer;
                &:hover {
                    color: #f00;
                }
            }
        }
        &-title {
            font-size: 18px;
            font-weight: 600;
            text-align: center;
            padding: 12px 0;
        }
    }
    @keyframes show-modal {
        0% {
            opacity: 0;
            transform: translate(0,-10px);
        }
        100% {
            opacity: 1;
            transform: translate(0);
        }
    }
</style>
