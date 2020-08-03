<template>
    <div class="agent-center">

        <div class="fans-num">
            <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
            <div class="fans-detail">
                <ul>
                    <li><router-link to="/fansCheck"><h3>2</h3>待审核粉丝&gt;</router-link></li>
                    <li><router-link to="/registeredFans"><h3>1922</h3>已注册粉丝&gt;</router-link></li>
                </ul>
            </div>

        </div>

        <van-tabs v-model="active" color="#46dbd5">
            <van-tab title="资金记录">
                <ul class="money-record">
                    <li>
                        <div><h3>推广佣金</h3><span>2020-06-03 09:30</span></div>
                        <div>粉丝：135****3455 推广佣金：8</div>
                        <div class="warning">金额：8</div>
                    </li>
                    <li>
                        <div><h3>推广佣金</h3><span>2020-06-03 09:30</span></div>
                        <div>粉丝：135****3455 推广佣金：8</div>
                        <div class="warning">金额：8</div>
                    </li>
                    <li>
                        <div><h3>推广佣金</h3><span>2020-06-03 09:30</span></div>
                        <div>粉丝：135****3455 推广佣金：8</div>
                        <div class="warning">金额：8</div>
                    </li>
                </ul>
            </van-tab>
            <van-tab title="跑单处罚">内容 2</van-tab>
        </van-tabs>

    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    Vue.use(Tab);
    Vue.use(Tabs);
    export default {
        data() {
            return {
                data:'代理中心',
                active: 2
            }
        },
        methods: {

        },
        components: {
            MyHeadTab
        }
    }
</script>
<style lang="less">
.agent-center{
    .head{
        color: #fff;
        background: #46dbd5;
        .arrow-right{
            border-right: 2px solid #ffffff;
            border-bottom: 2px solid #ffffff;
        }
    }
    .fans-num{
        width: 100%;
        height: 160px;
        background: #46dbd5;
        overflow: hidden;
        .fans-detail{
            width: 80%;
            margin: 0 auto;
            ul{
                overflow: hidden;
                padding-top: 30px;
                li{
                    float: left;
                    width: 50%;
                    color: #fff;
                    font-size: 14px;
                    h3{
                        margin: 0;
                        font-size: 20px;
                    }
                }
            }
            a{
                color: #fff;
            }
        }
        .cover{
            width: 140%;
            height: 200px;
            background: #f7f7f7;
            border-radius: 200%;
            margin-top: -80px;
            margin-left: -20%;
            box-shadow: 0 -20px 40px #34c5be;
        }
    }
    .fans-info{
        width: 90%;
        margin: 0 5%;
        img{
            width: 50%;
            margin-top: 10px;
        }
    }
    .money-record{
        li{
            width: 100%;
            padding: 10px 5%;
            box-sizing: border-box;
            border-bottom: 1px solid #f1f1f1;
            background: #fff;
            overflow: hidden;
        }
        div{
            overflow: hidden;
            text-align: left;
            margin: 10px auto;
            h3{
                float: left;
                font-size: 16px;
                margin: 0;
            }
            span{
                float: right;
                font-size: 14px;
                color: #999;
            }
        }

    }
}

</style>