<template>
    <div class="task-done">

        <div class="task-panel" v-for="list in lists">
            <div class="title">
                <h3>{{list.id}}</h3>
                <span>{{list.time}}</span>
            </div>
            <div class="detail">
                <div>
                    <span>理论本金:{{list.principal}}</span>
                    <span>佣金:{{list.commission}}</span>
                    <span>实付款:{{list.payment}}</span>
                    <span>合计:{{list.total}}</span>
                </div>
                <div>返款情况：已返款到余额</div>
            </div>
            <div class="bottom">
                <span>{{list.complete}}</span>
            </div>
        </div>

        <Tabbar></Tabbar>
    </div>
</template>
<script>
    import Tabbar from "../../components/Tabbar";
    export default {
        data() {
            return {
                lists:[
                    {
                        id: '3652350',
                        time: '2020-03-21 09:23',
                        principal: 30,
                        commission: 2,
                        payment: 10,
                        total: 30,
                        complete: '已完成'
                    },
                    {
                        id: '3652351',
                        time: '2020-03-01 09:23',
                        principal: 60,
                        commission: 32,
                        payment: 20,
                        total: 40,
                        complete: '已完成'
                    },
                    {
                        id: '3652352',
                        time: '2020-03-11 09:23',
                        principal: 70,
                        commission: 2,
                        payment: 10,
                        total: 50,
                        complete: '已完成'
                    }
                ]
            }
        },
        methods: {},
        computed: {},
        components: {
            Tabbar
        }
    }
</script>
<style scoped lang="less">
    .task-done{
        background-color: #f7f7f7;
        padding-bottom: 100px;
        width: 92%;
        margin: 0 auto;
        .task-panel{
            width: 100%;
            box-sizing: border-box;
            margin: 0 auto 10px auto;
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
                font-size: 14px;
                div{
                    margin-bottom: 8px;
                    color: #444;
                }
                span{
                    margin-right: 10px;
                }
            }
            .bottom{
                overflow: hidden;
                span{
                    float: right;
                    color: red;
                    font-size: 14px;
                }
            }
        }
    }
</style>