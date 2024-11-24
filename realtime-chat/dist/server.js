"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:4200", // Replace with your Angular app's URL
        methods: ["GET", "POST"]
    }
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message); // Broadcast the message
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});
app.get('/', (req, res) => {
    res.send('Socket.IO Chat Server is running');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});