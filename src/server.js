const setupServerEndpoints = (app, express) => {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/public/chat.html");
    })
    
    app.use(express.static('public'))
}

module.exports = setupServerEndpoints;