<template>
    <div class="detail">
        <div class="item" v-for="(item, index) in list" v-bind:key="index">
            <HomeItem  v-bind:item="item">{{item}}</HomeItem>
        </div>
        <Button class="item action" v-on:click="moreAction">获取更多</Button>
    </div>
</template>
<script>
    import HomeItem from "./HomeItem";
    import {mapActions} from "vuex";
    import {Button} from "@/ui";

    export default {
        // beforeRouteEnter(to, from, next) {
        //   if (!from.name) {
        //     next(vm => vm.refreshArticleList());
        //   } else {
        //     next();
        //   }
        // },
        components: {
            HomeItem,
            Button
        },
        created() {
            if (this.list.length == 0) {
                this.refreshArticleList()
            }
        },
        computed: {
            list: function () {
                return this.$store.state.Article.articleList;
            }
        },
        methods: {
            ...mapActions("Article", ["refreshArticleList", "loadMoreArticleList"]),
            moreAction: function () {
                this.loadMoreArticleList();
            },
            init() {
                this.refreshArticleList();
            }
        }
    };
</script>
<style scoped>
    .detail {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .item {
        width: 20vw;
        flex-grow: 1;
        margin: 5px 5px;
        box-shadow: #0aafe6;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
        color: #000;
    }

    @media screen and (max-width: 720px) {
        .item {
            width: 40vw;
        }
    }

    .action {
        text-align: center;
    }
</style>

