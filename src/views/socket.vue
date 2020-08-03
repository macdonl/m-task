<template>
    <div>
        <button @click="clickButton('po')">send</button>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        data(){
            return{
                id:''
            }
        },
        created(){
            // let a = axios.create({
            //     baseURL: "http://localhost:3000",
            //     timeout: 1000
            // })
            // a.get('/a').then((res)=>{console.log(res)})
        },
        sockets: {
            //查看socket是否渲染成功
            connect() {
                console.log("链接成功");
            },
            disconnect(){
                console.log("断开链接");
            },//检测socket断开链接
            reconnect(){
                console.log("重新链接");
            },
            //客户端接收后台传输的socket事件
            message(data) {
                this.$notify({
                    title: '新消息',
                    message: data,
                    type: 'warning',
                    duration:10000
                });
                console.log("data", data);//接收的消息
            }
        },
        methods: {
            clickButton: function(val){
                // $socket is socket.io-client instance
                this.$socket.emit('emit_method', val);
                console.log(val)
                this.$socket.on('emit_method',function (msg) {
                    console.log(msg)
                })
            }
        }
    }
</script>
<style scoped>

</style>