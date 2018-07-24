<template>
    <div>
        <div class="opts">
            <Button :click="btnAdd">添加</Button>
            <Button :click="batchRemove">删除</Button>
            <div class="filter">
                <input type="text" placeholder="输入关键字" class="text">
                <Button>搜索</Button>
            </div>
        </div>
        <div class="title">类目管理</div>
        <div class="list">
            <Table :columns="columns" :data="data">
                <template slot-scope="cell">
                    <span class="btn" @click="rowModify(cell.data)">修改</span>
                    <span class="btn" @click="rowRemove(cell.data)">删除</span>
                </template>
            </Table>
        </div>
        <category-modal ref="cate_modal" />
    </div>
</template>

<script>
    import CategoryModal from './modal/CategoryModal'
    export default {
        components: {
            CategoryModal
        },
        data() {
            return {
                columns: [
                    {type: 'checkbox'},
                    {title: '标题', key: 'title', style: {flex: 2}},
                    {title: '作者', key: 'author'},
                    {title: '时间', key: 'time'},
                    {title: '操作', key: 'id', render: true},
                ],
                data: [
                    {id: 1, title: '周末好去处', author: 'xing', time: '2018/7/18'},
                    {id: 2, title: '周末好去处', author: 'xing', time: '2018/7/18'},
                    {id: 3, title: '周末好去处', author: 'xing', time: '2018/7/18'},
                    {id: 4, title: '周末好去处', author: 'xing', time: '2018/7/18'}
                ]
            }
        },
        methods: {
            btnAdd() {
                this.$refs.cate_modal.show()
            },
            batchRemove() {

            },
            rowModify(data) {
                this.$refs.cate_modal.show(data)
            },
            rowRemove(data) {
                this.$confirm({
                    msg: '确定要删除？'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import (reference) "../assets/css/mixin";

    .opts {
        display: flex;
        .c-button {
            margin-right: 20px;
        }
        .filter {
            display: flex;
            .text {
                .ad-text;
            }
            .c-button {
                margin: 0 0 0 5px;
            }
        }
    }

    .title {
        .ad-title;
        margin-top: 16px;
    }

    .list {
        .btn {
            color: #1d70d0;
            cursor: pointer;
            margin: 0 5px;
            &:hover {
                color: #f00;
            }
        }
    }
</style>
