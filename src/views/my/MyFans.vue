<template>
    <div class="my-fans">

        <div class="fans-num">
            <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
            <div class="fans-detail">
                <ul>
                    <li><h3>652</h3>关注</li>
                    <li><h3>1652</h3>粉丝</li>
                    <li><h3>1652</h3>小粉丝</li>
                </ul>
            </div>
            <div class="cover"></div>
        </div>
        <div class="fans-info">
            <h3>我的收益计算</h3>
            <p>月收入 = 当前粉丝数 X 10（人均月任务数量）X 0.8 + 小粉丝数 X 10 X 0.2</p>
            <p class="warning">注意：粉丝数任务0.8元钱收益/小粉丝0.2元收益</p>
            <div>推广二维码</div>
            <div><img src="../../assets/images/erweima.jpeg" alt=""></div>
            <div>(点击复制)</div>
            <p class="orange">分享二维码成粉丝获取收益，扫码即可注册</p>
        </div>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    export default {
        data() {
            return {
                data:'我的粉丝',
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
.my-fans{
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
        height: 220px;
        background: #46dbd5;
        overflow: hidden;
        .fans-detail{
            width: 80%;
            height: 200px;
            background: #83f2ec;
            margin: 0 auto;
            border-radius: 12px;
            ul{
                overflow: hidden;
                margin-top: 20px;
                padding-top: 40px;
                li{
                    float: left;
                    width: 33.3%;
                    font-size: 14px;
                    h3{
                        margin: 0;
                        font-size: 20px;
                    }
                }
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
}

</style>