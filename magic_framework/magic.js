
module.exports = Magic

function Magic() {

	this.scene = null;
	this.group = null;
	this.hero = null;

	// 场景开始前
	this.beginScene = function() {}
	// 场景结束后 
	this.afterScene = function() {}

	// 回合开始前
	this.beginRound = function(round) {}
	// 回合开始后
	this.afterRound = function(round) {}

	// 出手前
	this.beginHand = function(hero) {}
	// 回合开始后
	this.afterHand = function(hero, atkList) {}

	// 攻击前
	this.beginAttack = function(atker, recver, atk) {
		console.log(atker, recver, atk);
	}
	// 攻击后
	this.afterAttack = function(atker, recver, atk) {}

	// 治疗前
	this.beginCure = function(sender, recver, cure) {}
	// 治疗后
	this.afterCure = function(sender, recver, cure) {}

	// 被攻击前
	this.beginBeAttack = function(atker, recver, atk) {}
	// 被攻击后
	this.afterBeAttack = function(atker, recver, atk) {}

}
