const express = require("express")
const app = express();
const initChatEndpoint = require("./src/chat.js");
const setupServerEndpoints = require("./src/server.js");
const connectToDB = require("./dataAccess.js");

setupServerEndpoints(app, express);
initChatEndpoint(app, 3000);
connectToDB();
