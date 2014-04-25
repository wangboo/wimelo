var Test = function() {
    this.no = 0;
}
Test.prototype.add = function(){
    console.log(this.no);
    this.no ++;
}
Test.prototype.get = function(){
    return this.no;
}
module.exports = Test
