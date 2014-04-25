var net = require('net');
var server = net.createServer(function(socket) { // 'connection' 监听器
    console.log('服务器已连接');
    socket.on('end', function() {
        console.log('服务器已断开');
    });
    socket.on("data", function(msg){
        console.log('on data:', msg.toString());
    })
    socket.write('hello\r\n');
});
server.listen(8124, function() { // 'listening' 监听器
    console.log('服务器已绑定');
});
