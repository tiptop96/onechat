const setupServerEndpoints = (app) => {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/public/chat.html");
    })
    
    app.use(express.static('public'))
}

module.exports = setupServerEndpoints;