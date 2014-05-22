
// 引入方法增强
require("./support");
var gf = require("./magic_framework");
var Magic = gf.Magic;
// var list = [new Magic(), new Magic(), null, new Magic(), new Magic()]
// list.on("beginAttack", "atker", "recver", "atk");

// 引入技能框架
var gf = require("./magic_framework")
var Hero = gf.Hero

h1 = new Hero("大黄蜂", {hp: 3000, def: 30, atk: 100});
h1.ruseMagic = new Magic();
h1.init();
h1.on("beginAttack", "atker", "recver", "atk")
// h2 = new Hero("孙悟空", {hp: 1000, def: 80, atk: 1000});
// h1.weapon = {name: "金箍棒"}

// while(true) {
// 	if(!h1.attack(h2)) {
// 		break;
// 	}
// 	if(!h2.attack(h1)) {
// 		break;
// 	}
	
// }
// h2.show()
// h1.show()
