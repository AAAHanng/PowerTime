// 引入所需的库
import http from 'http';
import express from 'express';
import {Server} from 'socket.io';

// 创建一个 Express 应用程序
const app = express();
const server = http.createServer(app);
const userList = []

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', socket => {
    const username = socket.handshake.query.username
    if (!username) return;
    const userInfo = userList.find(user => user.name === username)
    if (userInfo) {
        userInfo.id = socket.id
    } else {
        userList.push({
            Id: socket.id,
            username
        })
        console.log(`添加用户 ${username}`);
    }

    io.emit("online", userList)

    socket.on('send', ({fromUserName, targetId, msg,type}) => {
        const targetSocket = io.sockets.sockets.get(targetId);
        const toUser = userList.find(user => user.Id === targetId);
        targetSocket.emit('receive', {
            fromUserName,
            toUserName: toUser.username,
            msg,
            dataTime: new Date().getTime(),
            type
        })
    })

    socket.on('disconnect', () => {
        const userIndex = userList.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            const removedUser = userList.splice(userIndex, 1)[0];
            console.log(`移除用户 ${removedUser.username}`);
        }
    });

    // 这样可以拿到Id
    // console.log(socket.handshake.query.username)

    // 登录尝试
    // socket.on("login", data => {
    //     if (userList.includes(data.name)) {
    //         socket.emit('loginError', {msg: '登陆失败!'})
    //         console.log(data.name + "失败")
    //     } else {
    //         userList.push(data.name);
    //         socket.emit("loginSuccess", data)
    //         console.log(data.name + "success")
    //         io.emit('userList', userList)
    //     }
    // })

});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
