var config = require("./config.js").config;
Front = function(){

    var protocol = null;
    var self = this;

    if(config.protocol == 'http-get'){
        console.log("protocol use http-get");
        protocol = require("./protocol/http_get.js")();
        console.log(protocol);
    }

    this.start = function(){
        protocol.regist(self.onMessage);
        protocol.start();
    }

    this.onMessage = function(name, params) {
        console.log("front onMessage name=", name, ", params=", params);
        return {status: "ok"};
    }

}

module.exports = function(){
    return new Front();
};