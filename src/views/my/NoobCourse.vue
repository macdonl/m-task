<template>
    <div class="noob-course">
        <div class="head"><MyHeadTab :title="data"></MyHeadTab></div>
        <ul class="list">
            <li>
                <router-link to="/">
                    <div>
                        <img src="../../assets/images/course1.jpg" alt="">
                        如何做任务
                    </div>
                    <span class="arrow-left"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div>
                        <img src="../../assets/images/course2.jpg" alt="">
                        如何赚钱
                    </div>
                    <span class="arrow-left"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div>
                        <img src="../../assets/images/course3.jpg" alt="">
                        粉丝玩法
                    </div>
                    <span class="arrow-left"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div>
                        <img src="../../assets/images/course4.jpg" alt="">
                        修改密码/绑定信息
                    </div>
                    <span class="arrow-left"></span>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div>
                        <img src="../../assets/images/course5.jpg" alt="">
                        账户余额如何填写
                    </div>
                    <span class="arrow-left"></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    export default {
        data() {
            return {
                data:'新手教程',
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
.noob-course{
    .head{
        background: #fff;
        margin-bottom: 10px;
    }
    .list li{
        background: #fff;
        overflow: hidden;
        padding: 0 5%;
        border-bottom: 1px solid #f1f1f1;
        position: relative;
        div{
            float: left;
        }
        img{
            height: 20px;
            vertical-align: -5px;
        }
        span{
            position: absolute;
            right: 5%;
            top: 20px;
        }
        a{
            color: #444;
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
        }
    }

}
</style>