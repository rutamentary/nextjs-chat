import { Server } from 'socket.io'

const ioHandler = (req, res) => {

  console.log(req.room);

  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)

    io.on('connection', socket => {
      console.log('socket: ' + socket)
      socket.on('message', messageObject => {
        console.log(messageObject);
        io.to(messageObject.roomName).emit('receivedMessage',messageObject);
        //io.emit('receivedMessage', messageObject);
      })
    })

    res.socket.server.io = io
  }
  res.end()
}

export const config = {
  api: {
    bodyParser: false
  }
}

export default ioHandler;