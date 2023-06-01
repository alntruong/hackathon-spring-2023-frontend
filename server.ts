import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer);

io.on('connection', (socket: Socket) => {
 console.log('A user connected.');

 socket.on('disconnect', () => {
  console.log('A user disconnected.');
 });
});

const PORT = 3000; // Choose the port for your server
httpServer.listen(PORT, () => {
 console.log(`Socket.io server listening on port ${PORT}`);
});