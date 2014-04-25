var redis = require("redis");
var client = redis.createClient();
client.on("error", function(err){
    console.log("Error", err);
});
client.set("wangbo", "yes it is");
client.set([]);
client.get("wangbo", function(err, reply){
    console.log(reply);
})