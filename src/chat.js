const http = require('http')
const socket = require('socket.io')

var MessageType = Object.freeze({MESSAGE_ALL:"all", MESSAGE_GROUP:"group", MESSAGE_PRIVATE:"private"})

const initChatEndpoint = (app, port) => {
    const server = http.createServer(app);
    const io = socket(server);

    io.on('connection', (client) => {
        console.log("Connection made!")
        client.on(MessageType.MESSAGE_ALL, (data) => {
            console.log(data)
            client.broadcast.emit("message", data);
        });
        client.on('disconnect', () => {
            console.log("Someone dissconnected")
        });
    });
    server.listen(port, () => {
        console.log("Chat server listening on port: " + port)
    });
}

module.exports = initChatEndpoint;