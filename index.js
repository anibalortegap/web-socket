const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('connection new client');
    socket.emit('message', 'Welcome');
});

setInterval(()=>{
    io.emit('message', 'Hi, All users');
},3000);

server.listen(8080, ()=> {
    console.log('server init in http://localhost:8080')
});