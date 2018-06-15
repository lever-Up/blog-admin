<template>
    <div class="add-form">
        <div class="title">发布博文</div>
        <div>
            <div class="row">
                <div class="cell label">类目：</div>
                <div class="cell cont">
                    <select class="sel" v-model="categoryId">
                        <option value="0"> </option>
                        <option value="1">web前端</option>
                        <option value="2">php技术见解</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="cell label">标题：</div>
                <div class="cell cont">
                    <input type="text" class="text" v-model="title">
                </div>
            </div>
            <div class="row">
                <div class="cell label">内容：</div>
                <div class="cell cont">
                    <textarea class="area" v-model="content"></textarea>
                </div>
            </div>
        </div>
        <div class="footer">
            <router-link to="/article" class="btn">返回</router-link>
            <button class="btn" @click="save">保存</button>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapActions, mapState} from 'vuex'
    export default {
        data() {
            return { }
        },
        created() {
            let id = this.$route.params.id;
            if( id ) {
                this.getArticle({id});
            }
            this.SET_PARAM({
                key:'article',
                value:{
                    title: '',
                    content: '',
                    categoryId: ''
                }
            })
        },
        computed: {
            ...mapState(['categoryList', 'article']),
            title: {
                get() { return this.article.title || '' },
                set(val) { this.article.title = val }
            },
            content: {
                get() { return this.article.content || '' },
                set(val) { this.article.content = val }
            },
            categoryId: {
                get() { return this.article.categoryId || '' },
                set(val) { this.article.categoryId = val }
            }
        },
        methods: {
            ...mapMutations(['SET_PARAM']),
            ...mapActions(['addArticle', 'getArticle', 'modifyArticle']),
            save() {
                let data = {
                    categoryId: this.categoryId,
                    title: this.title,
                    content: this.content
                };
                if(this.article.id) {
                    this.modifyArticle({id: this.article.id, data})
                }else{
                    this.addArticle(data)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/mixin";
    .add-form{
        .title {
            .ad-title;
            margin-bottom: 30px;
        }
        .row {
            display: table;
            width: 98%;
            .cell {
                display: table-cell;
                box-sizing: border-box;
                padding: 8px 5px;
                vertical-align: middle;
            }
            .label {
                width: 100px;
                text-align: center;
            }
            .cont {
                .sel {
                    .ad-sel;
                    width: 200px;
                    height: 35px;
                }
                .text {
                    .ad-text;
                    width: 100%;
                    height: 35px;
                }
                .area {
                    .ad-area;
                    width: 100%;
                    min-height: 300px;
                    padding: 6px;
                }
            }
        }
        .footer {
            text-align: center;
            margin: 20px 0;
            .btn {
                .ad-button;
                width: 115px;
                height: 40px;
                line-height: 38px;
                font-size: 16px;
                margin: 0 8px;
                padding: 0;
            }
        }
    }
</style>