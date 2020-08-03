<template>
    <div class="card-modify">
        <div class="header"><MyHeadTab :title="data"></MyHeadTab><span class="complete" @click="save">完成</span></div>
        <ul class="list">
            <li>
                <span>姓名</span>
                <input type="text" placeholder="填写真实姓名">
            </li>
            <li>
                <span>身份证号码</span>
                <input type="text" placeholder="填写身份证号码">
            </li>
            <li>
                <span>身份证照片正面</span>
                <input type="text" placeholder="">
            </li>
            <li>
                <span>身份证照片背面</span>
                <input type="text" placeholder="">
            </li>
            <li>
                <span>验证码</span>
                <input type="text" placeholder="填写验证码（5分钟有效）">
                <button class="btn">发送验证码</button>
            </li>
        </ul>
        <div class="more">用人脸识别认证&gt;&gt;</div>
    </div>
</template>
<script>
    import MyHeadTab from "../../components/MyHeadTab";
    export default {
        data() {
            return {
                data:'实名信息',
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
    }
    .more{
        font-size: 14px;
        text-align: left;
        margin: 15px 0 0 5%;
    }
}
</style>