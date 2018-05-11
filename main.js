const express = require("express")
const app = express();
const initChatEndpoint = require("./src/chat.js");
const setupServerEndpoints = require("./src/server.js");

setupServerEndpoints();
initChatEndpoint(app, 3000);

