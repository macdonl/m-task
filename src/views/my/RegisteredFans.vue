<template>
    <div class="fans-check">
        <div class="head">
            <MyHeadTab :title="data"></MyHeadTab>
            <div class="search">
                <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" /><button class="btn">搜索</button>
            </div>
        </div>

        <ul class="list">
            <li>
                <p>最后登录时间：未登录</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <span class="warning">1天1单</span>
            </li>
            <li>
                <p>最后登录时间：未登录</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <span class="warning">1天1单</span>
            </li>
            <li>
                <p>最后登录时间：未登录</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <span class="warning">1天1单</span>
            </li>
        </ul>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    import Vue from 'vue';
    import { Search } from 'vant';
    Vue.use(Search);
    export default {
        data() {
            return {
                data:'已注册粉丝',
                value:''
            }
        },
        methods: {},
        computed: {},
        components: {
            MyHeadTab
        }
    }
</script>
<style scoped lang="less">
.fans-check{
    .head{
        background: #fff;
        margin-bottom: 10px;
        .search{
            display: flex;
            flex-direction: row;
            padding: 0 5% 20px 5%;
            button{
                height: 28px;
                border-radius: 28px;
                font-size: 14px;
                width: 17%;
            }
        }
    }
    li{
        background: #fff;
        text-align: left;
        padding: 10px 5%;
        position: relative;
        margin-bottom: 10px;
        p{
            margin: 0;
            font-size: 16px;
        }
        span{
            position: absolute;
            right: 5%;
            top: 10px;
        }
    }
    .van-search{
        padding: 0;
        height: 28px;
        width: 80%;
        margin-right: 3%;
    }
    .van-cell{
        line-height: 15px;
    }
}
</style>