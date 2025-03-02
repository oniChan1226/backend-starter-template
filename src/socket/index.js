import { Server } from "socket.io";
import { socketManager } from "./socketManager.js";

const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: process.env.CORS_ORIGIN?.split(","),
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        console.log("Client connected with id::", socket.id);

        socketManager(io, socket);

        socket.on("disconnect", () => console.log("Client disconnected with id::", socket.id));
    });

    return io;
};

export { initializeSocket };