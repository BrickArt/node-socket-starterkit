const sio = require("socket.io");
const log = require("../utils/logger");
const ioHandler = require("../socket/io");



module.exports = {
    createConnection$,
    findSocketByUserId
};


async function createConnection$(server) {
    const io = await sio(server);
    log.info("Socket has been started!");
    return ioHandler.handle(io);
};

function findSocketByUserId(id) {
    const CLIENTS = global._io.sockets.sockets;
    for (const key in CLIENTS) {
        if (CLIENTS.hasOwnProperty(key)) {
            const c = CLIENTS[key];
            if (c._userId === id) return c
        }
    }
    return null;
}