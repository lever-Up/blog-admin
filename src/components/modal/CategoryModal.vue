<template>
    <Modal ref="_modal" title="添加类目">
        <div class="m-category">
            <input type="text" class="txt" placeholder="类目名称" v-model="name">
            <div class="m-category-foot">
                <Button :click="onClose">关闭</Button>
                <Button :loading="true" :disabled="disabled" :click="onOk">确定</Button>
            </div>
        </div>
    </Modal>
</template>

<script>
    export default {
        name: "CategoryModal",
        props: {
            data: { type: Object, default: ()=>({}) }
        },
        data() {
            return {
                name: this.data.name || '',
                disabled: false
            }
        },
        watch: {
            name( val ) {
                this.disabled = !val.trim()
            }
        },
        methods: {
            show() {
                this.$refs._modal.show()
            },
            onClose() {
                this.$refs._modal.hide()
            },
            onOk(data, cb) {
                // cb();
                // this.$refs._modal.hide()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) "../../assets/css/mixin";
    .m-category {
        padding: 0 20px;
        .txt {
            .ad-text;
            width: 100%;
            height: 33px;
        }
        &-foot {
            display: flex;
            justify-content: space-around;
            margin-top: 35px;
        }
    }
</style>
