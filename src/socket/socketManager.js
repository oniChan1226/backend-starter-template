

const socketManager = (io, socket) => {
    socket.on("message", (data) => {
        console.log("data from message event:: ", data);
        io.emit("message", data);
    })
    // listen for events here as needed?
};

export { socketManager };