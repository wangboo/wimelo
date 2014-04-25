var http = require("http");
var url = require("url");
var config = require("../config.js").config;

var HttpGet = function(){

    var onMessage;
    var self = this;

    this.regist = function(){
        onMessage = arguments[0]
    }

    this.start = function(){
        var server = http.createServer(function(req, resp){
            var reqParam = url.parse(req.url, true);
            if(reqParam.pathname == '/favicon.ico'){
                resp.end();
                return;
            }
            var name = reqParam.pathname.substring(1, reqParam.pathname.length);
            var params = reqParam.query;
            console.log("name=",name, ", params=", params);
            var result = onMessage(name, params);
            resp.write(JSON.stringify(result));
            resp.end();
        });
        server.listen(config.port);
    }
}


module.exports = function(){
    return new HttpGet();
}