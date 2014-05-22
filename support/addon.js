
exports.setMagicChain = function(obj, array) {
	// console.log("为", obj, "增加on方法");
	obj.on = function() {
		var args = Array.prototype.slice.call(arguments);
		// console.log(args);
		var methodName = args.shift();
		for (var i = array.length - 1; i >= 0; i--) {
			if(array[i]) {
				var magic = array[i];
				// 反射到该方法
				magic[methodName].apply(magic, args);
			}
		};
	}
	// console.log(obj);
}