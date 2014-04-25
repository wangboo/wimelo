var http = require("http");
var url = require("url");
var config = require("./config.js").config;

var server = http.createServer(function(req, resp){
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/favicon.ico'){
        resp.end();
        return;
    }
    console.log("path = ", pathname);
    console.log("req", req);
    resp.write("This request URL " + pathname + " was not found on this server.");
    resp.end();
});
server.listen(config.port);