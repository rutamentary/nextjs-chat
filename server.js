// const server = require('express')();
// const http = require().Server(server);
// const next = require('next')
// const io = require('socket.io')(http);

// //const { Server } = require('socket.io')
// //const io = new Server(port);

// const port = parseInt(process.env.PORT, 10) || 3001
// console.log(port);
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })

// const handle = app.getRequestHandler();

// app.prepare().then(() => {

//   server.all('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`)
//   })

//   io.on('connection', socket => {
    
//     console.log("client connected");
//     socket.emit('request', /* … */); // emit an event to the socket
//     io.emit('broadcast', /* … */); // emit an event to all connected sockets
//     socket.on('reply', () => { /* … */ }); // listen to the event
//   });
// })