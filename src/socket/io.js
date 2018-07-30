const log = require("../utils/logger");

module.exports = {
    handle
};

function handle(io) {
    global._io = io;
    io.on("connect", (socket) => {
        socket._userId = Object.keys(io.sockets.sockets).length.toString()
        log.debug(`Client connect to ws with id: ${socket.id}`);

        /*

            socket logic

        */

        socket.on("disconnecting", () => {
            log.debug("Client disconnected: " + socket.id)
        });
    });
}


