var args = process.argv;
args.shift();
args.shift();
if(args.shift() == 'start') {
    if(args.shift() == 'front'){
        var frontend = require("./lib/front/index.js")();
        frontend.start();
    }
}else {

}


