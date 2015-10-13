// just an example of calling one prototype method from another to verify
// that this works outside of node and doesn't work in node
var Ob = function(){}

Ob.prototype.add = function(){
    this.inc()
};

Ob.prototype.inc = function(){
    console.log(' Inc called  ');
};

var test = new Ob();

test.add();