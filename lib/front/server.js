/**
 * Created by wangboo on 14-4-25.
 */

var net = require('net');
var config = require("./config.js");
var Gateway = function(){
    this.server = null;
    this.sockets = [];
    this.serialNo = 0;
    //后端服务器数量
    this.backendSize = 1;
    //后端发送轮训计数器
    this.counter = 0;
    //发送至后端，还未收到应答的缓存
    this.cache = {}

    var recvMsg = function(msg) {
        if(msg.s < 0) {

        }
    }
}

Gateway.prototype.start = function(){
    var server = net.createServer(function(socket) {
        console.log('服务器已连接');
        var serverInfo = {
            ip: socket.remoteAddress,
            socket: socket,
            createAt: new Date(),
            reqNum: 0,
            respNum: 0
        };
        this.sockets.push(serverInfo);
        socket.on('end', function() {
            console.log('服务器已断开');

        });
        socket.on('data', function(data){
            this.recvFromBackend(JSON.parse(data.toString()));
        });
    });
    server.listen(config.port, function() {
        console.log('frontServer inner gateway startup');
    });
}

//将消息发送到后端服务器
Gateway.prototype.sendToBackend = function(name, params, resp) {
    this.serialNo++;
    var req = {n: name, p: params, s: this.serialNo};
    this.counter++;
    this.cache[this.counter] = resp;
    if(this.counter >= this.sockets.length) {
        this.counter = 0;
    }
    this.sockets[this.counter].socket.send(JSON.stringify(req));
}

//收到从后台来的消息
Gateway.prototype.recvFromBackend = function(data){
    var resp = this.cache[data.s];
    delete this.cache[data.s]
    resp.write(JSON.parse(data.p));
}

