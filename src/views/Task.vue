<template>
    <div class="task">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul class="menu">
                <li @click="taskSwitch('TaskDoing')" :class="{active:com=='TaskDoing'}"><div>进行任务</div><span></span></li>
                <li @click="taskSwitch('TaskDone')" :class="{active:com=='TaskDone'}"><div>完成任务</div><span></span></li>
                <li @click="taskSwitch('TaskComment')" :class="{active:com=='TaskComment'}"><div>评价任务</div><span></span></li>
            </ul>
            <keep-alive>
                <div :is="com"></div>
            </keep-alive>
            <Tabbar></Tabbar>
        </van-pull-refresh>

    </div>
</template>
<script>
    import Tabbar from "../components/Tabbar";
    import TaskDoing from "./task/TaskDoing";
    import TaskDone from "./task/TaskDone";
    import TaskComment from "./task/TaskComment";
    import Vue from 'vue';
    import { Tab, Tabs, PullRefresh,Toast } from 'vant';
    Vue.use(Tab);
    Vue.use(Tabs);
    Vue.use(PullRefresh);
    export default {
        data() {
            return {
                com: 'TaskDoing',
                isLoading: false
            }
        },
        methods: {
            taskSwitch(e){
                this.com = e
            },
            onRefresh() {
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                }, 1000);
            },
        },
        computed: {},
        components: {
            Tabbar,
            TaskDoing,
            TaskDone,
            TaskComment
        }
    }
</script>
<style scoped lang="less">
    .task{
        overflow: hidden;
        padding-bottom: 100px;
        background: #f7f7f7;
        .menu{
            overflow: hidden;
            margin: 20px auto 10px auto;
            li{
                float: left;
                width: 33.3%;
                span{
                    display: block;
                    width: 40px;
                    height: 2px;
                    margin: 5px auto 0 auto;
                }
            }
            li.active{
                div{
                    color: #46dbd5;
                }
                span{
                    background: #46dbd5;
                }
            }
        }
    }
</style>