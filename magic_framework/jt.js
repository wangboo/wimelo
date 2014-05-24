var WebSocketClient = require('websocket').client;
var client = new WebSocketClient();


client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {

    console.log('WebSocket client connected');
    console.log("sendUTF");
    // connection.on('error', function(error) {
    //     console.log("Connection Error: " + error.toString());
    // });
    // connection.on('close', function() {
    //     console.log('echo-protocol Connection Closed');
    // });
    // connection.on('message', function(message) {
    //     if (message.type === 'utf8') {
    //         console.log("Received: '" + message.utf8Data + "'");
    //     }else {
    //     	console.log("recv data ", message);
    //     }
    // });

    // function login() {
    // 	connection.send({name: 'Testa', pwd: "a"});
    // }

		

		// connection.sendUTF(JSON.stringify({name: 'Testa', pwd: "a"}));
		client.close();
});

client.connect("ws://203.195.181.103:8080/jiyu/ws")
