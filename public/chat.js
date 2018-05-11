var MessageType = Object.freeze({MESSAGE_ALL:"all", MESSAGE_GROUP:"group", MESSAGE_PRIVATE:"private"})
var MESSAGE = "message"
var socket = io();

/*
{
    message: hey,
    timestamp: 12.00.00,
    from: User123,
    to: null/group/private
}
*/

socket.on(MESSAGE, function(data){
    //console.log('message: ' + data);
    console.log('message data: ' + data.message);
});

function sendAll(event) {
    event.preventDefault();
    var data = buildMessage();
    data.timestamp = Date.now()
    socket.emit(MessageType.MESSAGE_ALL, data);
}

function sendPrivate(data) {
    data.timestamp = Date.now();
    socket.emit(MessageType.MESSAGE_PRIVATE, data);
}

function buildMessage(message) {
    return {
        message: getChatBoxValue(),
        timestamp: null,
        from: "CurrentUser",
    }
    
}

var getChatBoxValue = function(){
    var message = document.getElementById("chat_box").value;
    document.getElementById("chat_box").value = "";
    return message;
}

window.onload = function(){
    document.getElementById("chat_form").onsubmit = sendAll
}
