import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

type RGB = [red: number, green: number, blue: number];
type State = [string, [peer: string, timestamp: number, value: RGB]];

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3001",
    },
    transports: ["websocket"],
});

let _state: State = ["", ["", 0, [0, 0, 0]]];

io.on("connection", (socket) => {
    console.log("connection: ", socket.id);

    socket.emit("init", _state);

    socket.on("alice", (state) => {
        _state = state;
        io.emit("bob", state);
    });

    socket.on("bob", (state) => {
        _state = state;
        io.emit("alice", state);
    });

    socket.on("clear", () => {
        _state = ["", ["", 0, [0, 0, 0]]];
        io.emit("clear");
    });

    socket.on("disconnect", () => {
        console.log("disconnect: ", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
