<template>
    <div class="task-panel">
        <div class="title">
            <h3>3652350</h3>
            <span>2020-03-21 09:23</span>
        </div>
        <div class="detail">
            <span>本金：32</span>
            <span>佣金：02</span>
        </div>
        <div class="bottom">
            <div>剩余时间：<span>00:51:03</span></div>
            <button class="btn">联系客服</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped lang="less">
    .task-panel{
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        background: #fff;
        border-radius: 3px;
        padding: 15px 10px;
        .title{
            overflow: hidden;
            h3{
                float: left;
                margin: 0;
            }
            span{
                float: right;
                font-size: 14px;
                color: #999;
            }
        }
        .detail{
            text-align: left;
            margin: 10px 0;
        }
        .bottom{
            overflow: hidden;
            div{
                float: left;
                margin-top: 5px;
                font-size: 14px;
                color: #999;
                span{
                    color: #46dbd5;
                }
            }
            button{
                float: right;
            }
        }
    }
</style>