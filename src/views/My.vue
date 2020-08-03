<template>
    <div class="my">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="header">
                <div class="img">
                    <img src="../assets/images/timg.jpeg" alt="头像">
                </div>
                <div class="info">
                    <div class="icon">
                        <h3>KING</h3>
                        <span class="level"><img src="../assets/images/l.png">125</span>
                        <img class="t" src="../assets/images/v.jpg">
                        <img class="t" src="../assets/images/c.jpg">
                        <img class="t" src="../assets/images/m.jpg">
                    </div>
                    <div>会员ID：1523635</div>
                </div>
            </div>
            <ul class="my-list">
                <li><router-link to="/accountManage"><img src="../assets/images/my-icon1.jpg" alt="">账号管理<span class="arrow-left"></span></router-link></li>
                <li><router-link to="/myAccount"><img src="../assets/images/my-icon2.jpg" alt="">我的账户<span class="arrow-left"></span></router-link></li>
                <li><router-link to="/myFans"><img src="../assets/images/my-icon3.jpg" alt="">我的粉丝<span class="arrow-left"></span></router-link></li>
                <li><router-link to="/agentCenter"><img src="../assets/images/my-icon4.jpg" alt="">代理中心<span class="arrow-left"></span></router-link></li>
                <li><router-link to="/noobCourse"><img src="../assets/images/my-icon5.jpg" alt="">新手教程<span class="arrow-left"></span></router-link></li>
                <li><router-link to="/serviceCenter"><img src="../assets/images/my-icon6.jpg" alt="">客服中心<span class="arrow-left"></span></router-link></li>
                <li><img src="../assets/images/my-icon7.jpg" alt="">系统版本<span class="edition">01.01.02</span><span class="arrow-left"></span></li>
            </ul>
            <Tabbar></Tabbar>
        </van-pull-refresh>

    </div>
</template>
<script>
    import Vue from 'vue';
    import Tabbar from "../components/Tabbar";
    import { PullRefresh,Toast } from 'vant';
    Vue.use(PullRefresh);
    export default {
        data() {
            return {
                isLoading: false,
            }
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    Toast('刷新成功');
                    this.isLoading = false;
                }, 1000);
            },
        },
        components: {
            Tabbar
        }
    }
</script>
<style scoped lang="less">
    .my{
        .header{
            width: 100%;
            height: 180px;
            background: #46dbd5;
            padding-left: 5%;
            padding-top: 55px;
            box-sizing: border-box;
            color: #fff;
            .img{
                width: 60px;
                height: 60px;
                float: left;
                border-radius: 60px;
                overflow: hidden;
                border: 5px solid #a3eeea;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .info{
                float: left;
                text-align: left;
                margin: 10px 0 0 10px;
                div{
                    overflow: hidden;
                    font-size: 14px;
                    h3{
                        margin: 0;
                        float: left;
                        font-size: 20px;
                    }
                    span{
                        float: left;
                    }
                    .level{
                        background: #befefd;
                        color: #46dbd5;
                        display: inline-block;
                        height: 16px;
                        border-radius: 20px;
                        padding: 0 10px;
                        line-height: 18px;
                        margin: 5px 0 0 10px;
                        font-size: 14px;
                        img{
                            width: 10px;
                            vertical-align: -2px;
                            margin-right: 3px;
                        }
                    }
                    .t{
                        height: 20px;
                        vertical-align: -9px;
                    }
                }

            }
        }
        .my-list{
            border-radius: 30px 30px 0 0;
            box-sizing: border-box;
            margin-top: -30px;
            background: #fff;
            padding: 30px 5% 0 5%;
            li{
                text-align: left;
                height: 50px;
                line-height: 50px;
                box-sizing: border-box;
                position: relative;
                a{
                    display: block;
                    color: #444;
                }
                img{
                    height: 20px;
                    vertical-align: -4px;
                    margin-right: 20px;
                }
                .arrow-left{
                    position: absolute;
                    right: 0;
                    top: 18px
                }
                .edition{
                    position: absolute;
                    right: 15px;
                    top: 0;
                    font-size: 16px;
                    color: #999;
                    top: -2px
                }
            }
        }
    }
</style>