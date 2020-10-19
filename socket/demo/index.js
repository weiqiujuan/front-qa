let app = require('express')();
let http = require('http').createServer(handler);
let io = require('socket.io')(http);
let fs = require('fs');


http.listen(8888);

function handler() {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) {
            res.writeHead(500);
            return res.end("Error loading index.html");
        }
        res.writeHead(200);
        res.end(data);
    });
}

io.on("connection", function(socket) {
    console.log('连接成功');
    //连接成功之后发送消息
    socket.emit("new message", { mess: `初始消息` });

    socket.on('receive message',function(data){
        console.log('接收消息', data)
    })
});




