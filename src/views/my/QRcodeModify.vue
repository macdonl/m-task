<template>
    <div class="card-modify">
        <div class="header"><MyHeadTab :title="data"></MyHeadTab><span class="complete" @click="save">完成</span></div>
        <ul class="list">
            <li class="b">
                <div class="c"><img src="../../assets/images/photo.png" alt=""></div>
                <div>选择二维码</div>
            </li>
            <li>
                <span>验证码</span>
                <input type="text" placeholder="填写验证码（5分钟有效）">
                <button class="btn">发送验证码</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    export default {
        data() {
            return {
                data:'修改二维码',
            }
        },
        methods: {
            save(){
                window.history.go(-1)
            }
        },
        computed: {},
        components: {
            MyHeadTab
        }
    }
</script>
<style scoped lang="less">
.card-modify{
    .header{
        background: #fff;
        position: relative;
        .complete{
            position: absolute;
            right: 5%;
            top:15px;
            font-size: 14px;
        }
    }
    .list{
        margin-top: 10px;
        li{
            height: 50px;
            line-height: 50px;
            background: #fff;
            border-bottom: 1px solid #f7f7f7;
            text-align: left;
            box-sizing: border-box;
            padding: 0 5%;
            overflow: hidden;
            position: relative;
            span{
                display: block;
                width: 25%;
                float: left;
            }
            input{
                float: left;
                width: 70%;
                border:none;
                font-size: 14px;
            }
            button{
                position: absolute;
                right: 5%;
                top: 12px;
                line-height: 25px;
            }
        }
        li.b{
            height: auto;
            padding: 30px 0 10px 0;
            text-align: center;
            .c{
                width: 90px;
                height: 90px;
                margin: 0 auto;
                background: #f2f2f2;
                border-radius: 90px;
                text-align: center;
                img{
                    width: 30px;
                    margin-top: 30px;
                }
            }
        }
    }
}
</style>