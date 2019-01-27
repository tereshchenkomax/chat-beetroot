const express = require('express');
const app = express();
const http = require('http')
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const path = require('path')
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./server/build'))
  
  app.use('*', (req, res) => {
    res.sendFile(path.resolve('./server/build', 'index.html'));
  })
} else {
  app.use('*', (req, res) => {
    res.send('Websocket server development');
  })
}

server.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`)
})

let users = {}; //{'adasdas5s: 'Tolya'}

io.sockets.on('connection', (client) =>{
  client.on('addUser', (user) => {
    users[client.id] = user;
    broadcast('system', 'New in chat')
    broadcast('updateUsers', users); // зашел новый пользователь в чат
  })
  client.on('message', (message) => {
    if (message.name !== users[client.id]) {
      broadcast('system', `${users[client.id]} change nick on ${message.name}`);
      users[client.id] = message.name;
      broadcast('updateUsers', users);
    }
    broadcast('message', message);
  })
  client.on('disconnect', () => {
    broadcast('system', `${users[client.id]} left chat`);
    delete users[client.id];
    broadcast('updateUsers', users);
  })

  function broadcast(event, data) {
    client.emit(event, data);
    client.broadcast.emit(event, data);
  }
})
