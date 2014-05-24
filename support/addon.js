
exports.setMagicChain = function(obj, array) {
	// console.log("为", obj, "增加on方法");
	obj.on = function() {
		var args = Array.prototype.slice.call(arguments);
		// console.log(args);
		var methodName = args.shift();
		if(obj[methodName]) {
			// 如果该对象中存在该方法，那么调用对象中的方法
			return obj[methodName].apply(obj, array);
		}else {
			// 如果该对象中不存在，那么调用array的每个元素
			for (var i = 0; i < array.length; i++) {
				if(array[i]) {
					var magic = array[i];
					// 反射到该方法
					magic[methodName].apply(magic, args);
				}
			};
		}
	}
	// console.log(obj);
}