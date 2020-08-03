let app = require('http').createServer();
let io = require('socket.io')(app);

app.listen(3000);

io.on('connection',function (socket) {
    socket.on('message',function (data) { //接收客户端发送的数据
        io.emit('broadcastMsg',data); //将接收的数据广播出去
        console.log(JSON.stringify(data) + '发消息了')
    })
})

console.log('Listening at : 3000')