
// Object.defineProperty(Array.prototype, "on", {
// 	enumerable: false,
// 	value: function() {
// 		var args = Array.prototype.slice.call(arguments);
// 		console.log(args);
// 		var methodName = args.shift();
// 		for (var i = this.length - 1; i >= 0; i--) {
// 			if(this[i]) {
// 				var magic = this[i];
// 				// 反射到该方法
// 				magic[methodName].apply(magic, args);
// 			}
// 		};
// 	}
// })
