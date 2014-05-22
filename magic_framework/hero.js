
module.exports = Hero

var Addon = require("../support/addon.js")

function Hero (name, attr) {
	this.scene = null;
	this.group = null;

	this.name = name;

	this.ruseMagic = null;
	this.specMagic = null;

	this.weapon = null;
	this.clothes = null;
	this.jewel = null;

	this.base = attr;
	this.plus = attr.clone();

	// 技能列表, 包含buff
	this.magicList = []
	

	this.init = function() {
		if(this.ruseMagic) 	this.magicList.push(this.ruseMagic);
		if(this.specMagic) 	this.magicList.push(this.specMagic);
		if(this.weapon) 		this.magicList.push(this.weapon);
		if(this.clothes) 		this.magicList.push(this.clothes);
		if(this.jewel) 			this.magicList.push(this.jewel);
		// 增加on方法
		Addon.setMagicChain(Hero.prototype, this.magicList);
	}

	// 攻击某个单位
	// 如果单位还活着，返回ture，反之返回false
	this.attack = function(recv) {
		var plus = this.plus;
	}

	//英雄是否死亡
	this.isDeath = function() {
		return this.plus.hp <= 0;
	}

	//英雄是否存活
	this.isAlive = function() {
		return this.plus.hp > 0;
	}

	this.show = function() {
		console.log(name+"剩余血量：" + this.hp);
	}

	// 场景开始前
	this.beginScene = function() {
		if(ruseMagic) ruseMagic.beginScene();
		if(specMagic) specMagic.beginScene();
		if(weapon) weapon.beginScene();
	}

}