<template>
    <div>
        <div class="chat"  @click="hideQuestion()">
            <div v-for="(item,index) in msgs" :key="index">
                <div v-if="item.userType=='user'" class="chat-box user">
                    <div class="header"><img src="../assets/images/timg.jpeg" alt=""></div>
                    <div class="content">
                        <div class="time">{{item.time}}</div>
                        <div class="message">{{item.msg}}</div>
                    </div>
                </div>
                <div v-else class="chat-box">
                    <div class="header"><img src="../assets/images/header2.jpg" alt=""></div>
                    <div class="content">
                        <div class="time">{{item.time}}</div>
                        <div class="message">{{item.msg}}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="send-container" :class="classObject">
            <div class="send">
                <div class="ipt">
                    <input type="text" class="ipt-c"
                           placeholder="请简单描述您的问题"
                           v-model="chatMsg"
                           @focus="showQuestion"
                           @keydown.enter="sendMsg(chatMsg)">
                </div>
                <div class="add" :class="rotateBtn" @click="moveToggle"><span class="l"></span><span class="r"></span></div>
            </div>
            <ul class="question" v-if="show">
                <li @click="autoQuestion($event)">多久审核通过</li>
                <li @click="autoQuestion($event)">我想赚更多的钱</li>
                <li @click="autoQuestion($event)">我要返款/返款多久到账</li>
                <li @click="autoQuestion($event)">任务二维码扫不出</li>
            </ul>
            <div class="upload">
                <div class="d"><div class="camera"><img src="../assets/images/photo.png" alt="相机"></div>相机</div>
                <div class="d"><div class="picture"><img src="../assets/images/photo.png" alt="照片"></div>照片</div>
            </div>
        </div>




    </div>
</template>
<script>
    import storage from "../../server/storage";
    let moment = require('moment')
    export default {
        data() {
            return {
                flag: false,
                chatMsg: '',
                show: false,
                socket: null,
                msgs: storage.fetch(),
            }
        },
        mounted(){
            this.socket = io("http://localhost:3000")
            this.socket.on('broadcastMsg', data=>{ //接收服务器广播信息
                this.msgs.push({ //将接收的信息加入数组
                    userType: 'user',
                    username: data.username,
                    msg: data.msg,
                    time: moment().format("HH:mm:ss")
                })
                storage.save(this.msgs) //将数组写入缓存
            })
        },
        methods: {
            sendMsg(data){
                const newMsg = {
                    userType: 'user',
                    username: 'macdonl',
                    msg: this.chatMsg
                }
                if(data){
                    this.socket.emit('message',newMsg)
                    this.chatMsg = ''
                }else {
                    alert('消息为空！')
                }
            },
            showQuestion(){
                this.show = true
            },
            hideQuestion(){
                this.show = false
            },
            moveToggle(){
                this.flag = !this.flag
            },
            autoQuestion(event){
                const newMsg = {
                    id: 1001,
                    time: '2020-06-20 22:10',
                    msg: event.target.innerHTML
                }
                this.chatList.push(newMsg)
                this.show = false
            }
        },
        computed: {
            classObject: function () {
                return {
                    moveIn: this.flag,
                    // moveOut: this.flag
                }
            },
            rotateBtn: function () {
                return {
                    rotateIn: this.flag
                }
            }
        }
    }
</script>
<style scoped lang="less">
.chat{
    padding: 20px 5% 100px 5%;
    .chat-box{
        overflow: hidden;
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        .header{
            width: 14%;
            overflow: hidden;
            img{
                width: 100%;
                border-radius: 100px;
            }
        }
        .content{
            text-align: left;
            width: 75%;
            margin-left: 5%;
            .time{
                color: #999;
                margin-bottom: 2px;
            }
            .message{
                height: auto;
                padding: 10px 15px;
                background: #fff;
                border-top-left-radius: 0px;
                border-top-right-radius: 30px;
                border-bottom-right-radius: 30px;
                border-bottom-left-radius: 30px;
                word-wrap: break-word;
                word-break: break-all;
                text-align: left;
                display: inline-block;
            }
        }
    }
    .chat-box.user{
        flex-direction: row-reverse;
        .content{
            margin-left: 0;
            margin-right: 5%;
            text-align: right;
            .message{
                border-top-left-radius: 30px;
                border-top-right-radius: 0px;
                border-bottom-right-radius: 30px;
                border-bottom-left-radius: 30px;
            }
        }
    }
}
.moveIn{
    animation: moveIn 0.3s;
    animation-fill-mode:forwards;
}
.moveOut{
    animation: moveOut 0.3s;
    animation-fill-mode:forwards;
}
.rotateIn{
    animation: rotateIn 0.8s;
    animation-fill-mode:forwards;
}
@keyframes moveIn{
    from{ bottom: -170px;}
    to{ bottom: 0;}
}
@keyframes moveOut{
    from{ bottom: 0;}
    to{ bottom: -170px;}
}
@keyframes rotateIn{
    from{ transform: rotate(0deg);}
    to{ transform: rotate(45deg);}
}
/* 进入的整个过程 */
.move-enter-active{
    animation: moveIn linear 0.2s;
    animation-fill-mode:forwards;
}
/* 整个离开的过程 */
.move-leave-active{
    animation: moveOut linear 0.2s;
    animation-fill-mode:forwards;
}
.send-container{
    width: 100%;
    height: 250px;
    position: fixed;
    left: 0;
    bottom: -170px;
    .question{
        position: absolute;
        top:-160px;
        left: 0;
        width: 100%;
        li{
            height: 40px;
            width: 100%;
            line-height: 40px;
            padding-left: 5%;
            text-align: left;
            background: #fff;
            border-bottom: 1px solid #f1f1f1;
        }
    }
}
.send{
    width: 100%;
    height: 80px;
    background: #f1f1f1;
    padding: 0 5%;
    display: flex;
    .ipt{
        width: 85%;
        height: 38px;
        margin-top: 20px;
        .ipt-c{
            width: 100%;
            height: 38px;
            border-radius: 38px;
            background: #fff;
            border: none;
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
    .add{
        width: 34px;
        height: 34px;
        border-radius: 34px;
        border: 1px solid #444;
        margin: 23px 0 0 4%;
        position: relative;
        span{
            display: inline-block;
            background: #444;
            position: absolute;
        }
        .l{
            width: 16px;
            height: 2px;
            left: 8px;
            top: 15px;
        }
        .r{
            width: 2px;
            height: 16px;
            left: 15px;
            top: 8px;
        }
    }
}
.upload{
    background: #f1f1f1;
    border-top: 1px solid #e6e6e6;
    display: flex;
    height: 170px;
    .d{
        width: 65px;
        margin-left: 5%;
        margin-right: 10px;
        margin-top: 20px;
        color: #666;
        font-size: 14px;
        div{
            width: 65px;
            height: 65px;
            background: #fff;
            border-radius: 5px;
            margin-bottom: 7px;
        }
        img{
            height: 25px;
            margin-top: 20px;
        }
    }
}
</style>