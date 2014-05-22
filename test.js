
function Test () {
	this.weapon = null;
	this.hello = function(fuck, you) {
		console.log(this);
		console.log(fuck, you);
	}
	this.invoke = function() {
		var args = Array.prototype.slice.call(arguments);
		var method = args.shift();
		this[method].apply(this, args);
	}
	console.log(this);
}

var test = new Test()
test.invoke("hello", "1", 'aazz');


