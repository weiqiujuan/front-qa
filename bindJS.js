Function.prototype.bind1 = function(context){
		if(typeof this !== 'function'){
				throw new Error('this must be function');
		}
		const self = this;
		const args = Array.prototype.slice.call(arguments, 1);
		let fNop = function(){};
		let fBound =  function(){
				const bindArgs = Array.prototype.slice.call(arguments);
				return self.apply(this instanceof fBound ? this:context ,args.concat(bindArgs));
		}
		fNop.prototpye = this.prototype;
		fBound.prototype = new fNop();
		return fBound;
}

let obj = {value: 1};

function bar(name, age) {
		this.habit = 'play'
		console.log(name, age)
		console.log(this.value);
}

bar.prototype.mother = 'lily'
let bindF = bar.bind(obj, 'jack');
let foo = new bindF();
console.log(foo.value)