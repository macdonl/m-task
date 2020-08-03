<template>
    <div class="account-manage">
        <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
        <ul>
            <li>
                <div class="l">头像</div>
                <div class="r"><img class="head-img" src="../../assets/images/timg.jpeg" alt=""><span class="arrow-left"></span></div>
            </li>
            <li>
                <div class="l">昵称</div>
                <div class="r">KING<span class="arrow-left"></span></div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="l">修改手机号</div>
                <div class="r">135****5678<span class="arrow-left"></span></div>
            </li>
            <li>
                <div class="l">切换旺旺号</div>
                <div class="r">KOLOR<span class="arrow-left"></span></div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="l">修改密码</div>
                <div class="r">首次登录必做<span class="arrow-left"></span></div>
            </li>
        </ul>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab"
    export default {
        data() {
            return {
                data:'账号设置'
            }
        },
        methods: {
            goBack(){
                window.history.go(-1)
            }
        },
        components: {
            MyHeadTab
        }
    }
</script>
<style scoped lang="less">
.account-manage{
    background: #f7f7f7;
    .head{
        background: #fff;
    }
    ul{
        margin-top: 10px;
        li{
            height: 50px;
            line-height: 50px;
            background: #fff;
            overflow: hidden;
            box-sizing: border-box;
            padding: 0 5%;
            border-bottom: 1px solid #f1f1f1;
            .l{
                float: left;
            }
            .r{
                float: right;
                color: #777;
            }
            .head-img{
                width: 30px;
                height: 30px;
                vertical-align: -10px;
                border-radius: 30px;
            }
            span{
                vertical-align: 1px;
                margin-left: 10px;
            }
        }
    }
}
</style>