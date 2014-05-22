
require("./support/")

function Test () {
	this.a = "a"
	this.b = "b"
	this.say = function(){
		console.log("hello")
	}
}

var hash = new Test()
var co = hash.clone()
console.log(co)
co.say()