import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:4200", // Replace with your Angular app's URL
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for 'sendMessage' events
  socket.on('sendMessage', (data) => {
    // Broadcast the message to all clients with the sender's ID
    const { message, sender } = data;
    io.emit('receiveMessage', { message, sender });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
