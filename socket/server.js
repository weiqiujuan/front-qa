const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const fs = require('fs')

app.use(serve('public'))  // static

// socket.io listen
const server = require('http').Server(app.callback())
const io = require('socket.io')(server)

server.listen(8080)

// socket.io logic

let usercount = 0

// broadcast
io.on('connection', (socket) => {
    socket.broadcast.emit('user connected') // 除了当前socket之外 都会触发 user connected
    socket.on('message', function (msg) { // send(emit) message(listener)
        console.log(msg)
    })
})

let chat = io.of('/chat').on('connection', (socket) => {
    // connect usercount
    usercount++
    chat.emit('usercount', { msg: usercount }) // public message
    socket.on('messagetoserver', (data, callback) => {
        socket.emit('messagetoclient', { msg: data.msg.toUpperCase(), username: 'server' })
        callback('已收到')
    })

    // disconnect usercount
    socket.on('disconnect', function () {
        usercount--
        chat.emit('usercount', { msg: usercount })
    })
})

let news = io.of('/news').on('connection', (socket) => {
    let newsInterval = setInterval(() => {
        socket.emit('news', { msg: 'news from ' + Date.now() })
    }, 1000)

    // disconnect
    socket.on('disconnect', () => {
        clearInterval(newsInterval)
    })
})
