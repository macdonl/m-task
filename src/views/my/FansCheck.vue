<template>
    <div class="fans-check">
        <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
        <ul class="list">
            <li>
                <p>注册人：13549090022</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <button class="btn pass">通过</button>
                <button class="btn delete">删除</button>
            </li>
            <li>
                <p>注册人：13549090022</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <button class="btn pass">通过</button>
                <button class="btn delete">删除</button>
            </li>
            <li>
                <p>注册人：13549090022</p>
                <p>旺旺号：测试</p>
                <p>绑定手机：13500991212</p>
                <p>注册时间：2020-06-04 12：00</p>
                <button class="btn pass">通过</button>
                <button class="btn delete">删除</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    export default {
        data() {
            return {
                data:'粉丝审核',
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
        button{
            position: absolute;
            right: 5%;
        }
        .pass{
            top:22px;
            background: #ffc2a6;
            color: #e34506;
        }
        .delete{
            top:65px;
            background: #c8d2f5;
            color: #4672eb;
        }
    }
}
</style>