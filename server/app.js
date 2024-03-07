// 引入所需的库
import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

// 创建一个 Express 应用程序
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', socket => {
    console.log('用户加入!');

    socket.on('message', message => {
        console.log('Received message:', message);
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
