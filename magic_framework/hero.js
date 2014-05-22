
module.exports = Hero

function Hero (name, attr) {
	this.name = name;
	this.base = attr。clone();
	this.plus = attr.clone();

	// 攻击某个单位
	// 如果单位还活着，返回ture，反之返回false
	this.attack = function(recv) {
		var plus = this.plus;
		
	}

	this.show = function() {
		console.log(name+"剩余血量：" + this.hp);
	}
		
}