<template>
    <div class="task-doing">
        <div class="count-time warning">任务将在：16：20分开始</div>
        <TaskPanel></TaskPanel>
        <div class="task-detail">
            <ul class="warning">
                <li>注意事项：</li>
                <li>1、不允许使用花呗、他人代付、信用卡</li>
                <li>2、不允许使用返利，淘客</li>
                <li>3、不允许共享寻宝答案</li>
                <li>4、做任务时请仔细浏览宝贝详情</li>
                <li>5、如若发现不按要求做任务，停止接单30天</li>
            </ul>
            <h2>任务流程</h2>
            <ul class="task-progress">
                <li>复制关键词-寻宝验证</li>
                <li>宝贝详细信息-深度浏览（请勿下单）</li>
                <li>数据同步-数据同步中不要下单</li>
                <li>任务审核-下单后再审核</li>
            </ul>
            <p class="task-notice">
                请严格按照任务流程执行，深度浏览宝贝，一定要浏览到底，达到浏览时长，货比三家，以防造成商家损失、账号违规等等。
            </p>
            <p class="task-notice">
                有问题联系我，不要联系商家！东北三省的必须改地址，需要签收，不能跟快递说是刷单的，禁止使用淘客，返利，信用卡，花呗下单查到用不合作，谢谢！
            </p>
            <ul class="task-input">
                <li><input type="text" placeholder="请输入花呗"></li>
                <li><input type="text" placeholder="请输入淘客"></li>
                <li><input type="text" placeholder="请输入答案"></li>
                <li><input type="text" placeholder="请输入宝贝"></li>
            </ul>
            <div class="task-do"><button class="btn btn-large">执行任务</button></div>
            <div class="task-do"><button class="btn btn-large">放弃任务</button></div>
            <p class="task-notice">放弃任务将会降低信誉分，信誉分过低账户可能会被拉黑</p>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>
<script>
    import Tabbar from "../../components/Tabbar";
    import TaskPanel from "../../components/TaskPanel";
    import Vue from 'vue';
    import { Tab, Tabs } from 'vant';
    Vue.use(Tab);
    Vue.use(Tabs);
    export default {
        data() {
            return {
                active: 0
            }
        },
        methods: {},
        computed: {},
        components: {
            Tabbar,
            TaskPanel
        }
    }
</script>
<style scoped lang="less">
    .task-doing{
        background-color: #f7f7f7;
        width: 92%;
        margin: 0 auto;
        .count-time{
            margin-bottom: 10px;
        }
        .task-detail{
            margin: 20px 0;
            .warning{
                text-align: left;
                line-height: 24px;
            }
            h2{
                font-size: 16px;
                text-align: left;
                margin-bottom: 0px;
            }
            .task-progress{
                text-align: left;
                font-size: 14px;
                line-height: 30px;
                list-style: disc inside;
            }
            .task-notice{
                font-size: 14px;
                color: #999;
                text-align: left;
            }
            .task-input{
                margin: 30px 0;
                input{
                    width: 100%;
                    height: 40px;
                    background: #fff;
                    border: none;
                    margin: 5px 0;
                    padding-left: 20px;
                    box-sizing: border-box;
                    border-radius: 3px;
                }
            }
            .task-do{
                margin-bottom: 15px;
            }
        }
    }
</style>