<template>
    <div class="my-account">

        <div class="account-num">
            <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
            <div class="ac a-left"></div>
            <div class="a-center">
                <div>余额账户</div>
                <div>
                    <h1>¥1586.00</h1>
                    <span>提现</span>
                </div>
            </div>
            <div class="ac a-right"></div>
        </div>
        <van-collapse v-model="activeNames">
            <van-collapse-item title="银行卡" name="1">
                <ul>
                    <li>银行卡：中国建设银行</li>
                    <li>开户行：中国建设银行开户信息地址</li>
                    <li>银行账号：15598034345454545459</li>
                    <li>收款人：张三</li>
                </ul>
                <div class="a-modify"><router-link to="/cardModify"><button class="btn">修改</button></router-link></div>
            </van-collapse-item>
            <van-collapse-item title="微信收款二维码" name="2">
                <div class="erweima"><img src="../../assets/images/erweima.jpeg" alt="二维码"></div>
                <div class="a-modify"><router-link to="/QRcodeModify"><button class="btn">修改</button></router-link></div>
            </van-collapse-item>
            <van-collapse-item title="实名信息" name="3">
                <ul>
                    <li>姓名：张三</li>
                    <li>身份证号码：3405938323291000232</li>
                </ul>
                <div class="a-modify"><router-link to="/realNameInfo"><button class="btn">修改</button></router-link></div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    import Vue from 'vue';
    import { Collapse, CollapseItem } from 'vant';
    Vue.use(Collapse);
    Vue.use(CollapseItem);
    export default {
        data() {
            return {
                data:'我的账户',
                activeNames: ['1'],
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
.my-account{
    .head{
        color: #fff;
        background: #46dbd5;
        .arrow-right{
            border-right: 2px solid #ffffff;
            border-bottom: 2px solid #ffffff;
        }
    }
    .account-num{
        width: 100%;
        height: 220px;
        background: #46dbd5;
        position: relative;
        padding-top: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        .ac{
            width: 100px;
            height: 70px;
            background: #a3eeea;
            border-radius: 10px;
            box-shadow: 0 -20px 20px #34c5be;
            position: absolute;
            top: 94px;
        }
        .a-left{
            left: -60px;
        }
        .a-right{
            right: -60px;
        }
        .a-center{
            width: 60%;
            height: 120px;
            background: url("../../assets/images/a-bg.jpg") 100% 100% no-repeat;
            background-clip: border-box;
            background-size: cover;
            margin: 10px auto 0 auto;
            border-radius: 15px;
            box-shadow: 0 -20px 20px #34c5be;
            text-align: left;
            box-sizing: border-box;
            padding: 20px 20px;
            h1{
                float: left;
                margin: 25px 0 0 0;
                font-size: 24px;
            }
            span{
                float: right;
                margin-top: 29px;
            }
        }
    }
    .a-modify{
        text-align: center;
        margin: 10px auto;
    }
    .erweima{
        text-align: center;
        img{
            width: 40%;
        }
    }
}
.van-cell,.van-collapse-item__content{
    background: none;
    color: #444;
    text-align: left;
}
.van-cell::after{
    border: none;
}
.van-cell__title{
    text-align: left;
    font-weight: bold;
}
[class*=van-hairline]::after,.van-collapse-item--border::after{
    border: none;
}
</style>