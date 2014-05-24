var WebSocketClient = require('websocket').client;
var digest = require("md5").digest_s
var client = new WebSocketClient();


client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {

    id = "0";
    key = "0";

    argv_name  = process.argv[0] || "equity.market.main";
    argv_times = process.argv[1] || "1";
    argv_delay = process.argv[2] || "1000";
    console.log(argv_name, argv_times, argv_delay)
    argv_times = parseInt(argv_times)
    argv_delay = parseInt(argv_delay)

    count = 0;
    sync = 0;
    async = 0;
    failed = 0;
    cost = 0;

    console.log('WebSocket client connected');
    console.log("sendUTF");
    
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });
    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function(message) {        
        if (message.type === 'utf8') {
            recv(JSON.parse(message.utf8Data))
        }else {
         console.log("recv data ", message);
        }
    });

    // 受到应答
    function recv(resp) {
        // console.log(resp);
        if(resp.s == "1") {
            //登陆应答
            key = resp.p.key;
            id = resp.p.id;
            console.log(key, id)
            console.log("开始测试")
            testServer()            
        }else {
            // console.log(resp);
            if(resp.p._r == '10') {
                // 异步应答
                async+=1;
            }else if(resp.p._r == '0') {
                // 同步应答
                sync++;
                var now = new Date().getTime();
                cost += (now - parseInt(resp.s));
                resp.s
            }else {
                // 登陆应答
                failed ++;
            }           
        }
    }

    function testServer() {
        var time = new Date().getTime();
        if(count%1 == 0) {
            console.log("发送：", count, "，同步应答：", sync, "，异步应答：", async, "，失败次数：", failed, "平均耗时：", (cost)/sync);
        }
        for(var i=0;i<argv_times;i++) {
            // send("test", time+"", {});
            send(argv_name, time+"", {})
            count += 1;
        }
        setTimeout(testServer, argv_delay);
    }

    function login() {
     send("login", "1",{name: 'Testa', pwd: "a"});
    }

    function send(name, s, data) {
        var pkg = {"n":name, "s": s, "p":data, "i":id};
        // console.log("pkg = ", pkg);
        var json = JSON.stringify(pkg);
        var md5Value = md5(key + json);
        pkg["m"] = md5Value;
        json = JSON.stringify(pkg);
        // console.log("send:"+json);
        connection.sendUTF(json);
    }

    function md5(str) {
        return digest(str)
    }

    login()
    
});

client.connect("ws://203.195.181.103:8080/jiyu/ws")
