const express = require("express")
const app = express();
const initChatEndpoint = require("./src/chat.js");
const connectToDB = require("./dataAccess.js");

const setupServerEndpoints = (app, express) => {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/public/chat.html");
    })
    
    app.use(express.static('public'))
}

setupServerEndpoints(app, express);
initChatEndpoint(app, 3000);
connectToDB();
