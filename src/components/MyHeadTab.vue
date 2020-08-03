<template>
    <div>
        <div class="header"><span class="arrow-right" @click="goBack"></span>{{title}}</div>
    </div>
</template>
<script>
    export default {
        props:{
            title:{
                type: String,
                default: '标题'
            }
        },
        methods:{
            goBack(){
                window.history.go(-1)
            }
        }
    }
</script>
<style scoped lang="less">
    .header{
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        position: relative;
        font-weight: bold;
        span{
            position: absolute;
            left: 5%;
            top: 20px;
        }
    }
</style>