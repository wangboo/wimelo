module.exports = Attack

function Attack (atker, recver, val, type) {
	// 攻击类型
	this.atkType = type;
	// 子类型集合
	this.subType = [];
	// 伤害
	this.val = val;
	this.atker = atker;
	this.recver = recver;
	this.isMiss = false;
	this.isBlock = false;
	this.isCrit = false;

	// 增加子类型
	this.addSubType = function(type) {
		if(this.subType.indexOf(type) == -1) this.subType.push(type);
		return this;
	}

	// 是否包含子类型
	this.hasSubType = function(type) {
		return this.subType.indexOf(type) >= 0
	}

}
// 攻击类型，不可重复
Attack.ATTACK_TYPE = {
	PHYSIC: 0,
	MAGIC: 1,
	ATTR: 2
}

// 子类型，可重复的
Attack.SUB_TYPE = {
	NO_ANGER: 'a',
	REBOUND: 'b'
}

// 物理攻击
Attack.physic = function(atker, recver, val) {
	return new Attack(atker, recver, val, Attack.ATTACK_TYPE.PHYSIC);
} 
// 魔法攻击
Attack.magic = function(atker, recver, val) {
	return new Attack(atker, recver, val, Attack.ATTACK_TYPE.MAGIC);
} 
// 属性攻击
Attack.attr = function(atker, recver, val) {
	return new Attack(atker, recver, val, Attack.ATTACK_TYPE.ATTR);
} 

