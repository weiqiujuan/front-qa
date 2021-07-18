// const instanceOf = (l, r) => {
// 	let lo = l.__proto__;
// 	let ro = r.prototype;
// 	while (true) {
// 		if (lo === null) return false
// 		if (lo === ro) return true
// 		lo = lo.__proto__
// 	}
// }

var a = {
	value: 0,
	toString: function() {
		this.value++;
		return this.value;
	}
};
// console.log(a == 1 && a == 2);//true


function Parent () {
	this.name = 'parent';
	this.play = [1, 2, 3];
}
function Child() {
	Parent.call(this);
	this.type = 'child';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
