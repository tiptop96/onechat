const MongoClient = require("mongodb").MongoClient;

function connectToDB() {
        MongoClient.connect("mongodb://localhost:27017", function(err, client) {
        if(!err) {
            console.log("We are connected");
            var db = client.db("OneChatDB");
            db.collection("MyCollection", function(err, collection){
                collection.find().toArray(function(err, items) {
                    console.log(items);
                });
            });
        } else {
            console.log("Connection went to shit!");
        }
    });
};

module.exports = connectToDB;
