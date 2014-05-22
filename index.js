
// 引入方法增强
require("./support")
// 引入技能框架
var gf = require("./magic_framework")
var Hero = gf.Hero

h1 = new Hero("大黄蜂", {hp: 3000, def: 30, atk: 100});
h2 = new Hero("孙悟空", {hp: 1000, def: 80, atk: 1000});

while(true) {
	if(!h1.attack(h2)) {
		break;
	}
	if(!h2.attack(h1)) {
		break;
	}
	
}
	h2.show()
	h1.show()
