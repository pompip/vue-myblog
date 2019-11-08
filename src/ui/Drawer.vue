<template >
    <div @mouseover="openDrawer()" @mouseleave="closeDrawer()" >
        <h3 @click="openDrawer()">{{title}}</h3>
        <div class="box" v-show="show">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    .box {
        display: flex;
        flex-direction: column;
        position: absolute;
        padding: 10px 20px;
        background: rgba(38, 68, 200, 0.8);
    }

    h3 {
        padding: 0 20px;
        color: white;
    }
</style>
<script>
    export default {
        data: () => {
            return {
                show: false
            };
        },
        props:{
            title:String
        },
        methods: {
            openDrawer() {
                this.show = true;
            },
            closeDrawer(){
                this.show = false
            }
        }
    };
</script>