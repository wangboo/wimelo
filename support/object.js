
// 为object增加继承方法
Object.defineProperty(Object.prototype, "extend", {
    enumerable: false,
    value: function(from) {
        var props = Object.getOwnPropertyNames(from);
        var dest = this;
        console.log("extend method call")
        props.forEach(function(name) {
            if (name in dest) {
                var destination = Object.getOwnPropertyDescriptor(from, name);
                Object.defineProperty(dest, name, destination);
            }
        });
        return this;
    }
});

// 为object增加clone方法
Object.defineProperty(Object.prototype, "clone", {
	enumerable: false,
	value: function(){
        if(this instanceof Array) {
            return this.slice();
        }
		var obj = {}
		var from = this;
		for(name in from) {
			obj[name] = from[name]
		}
		return obj;
	}
})