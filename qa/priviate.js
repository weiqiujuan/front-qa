// 隐私属性，隐私方法
// 立即执行函数
let person = (function () {
	let _name = 'weiqiujuan';
	return {
		age: 18,
		get name() {
			return _name;
		},
		set name(val) {
			_name = val
		},
		greet: function () {
			console.log(`hi,i m ${_name} and i m ${this.age} years old`);
		}
	}
})()
console.log(person.name, person._name)
person.name = '1111111'
console.log(person.name, person._name)

// 构造函数实现
function Person(name, age) {
	let _name = name;
	this.age = age;
	this.setName = function (name) {
		_name = name;
	}
	this.getName = function () {
		return _name;
	}
}
Person.prototype.greet = function (){
	console.log(`hi, i'm ${this.getName()} and i'm ${this.age} years old`);
}
const person = new Person('weiqiujuan',18);

// class
class Person {
	constructor(name,age) {
		let _name = name;
		this.age = age;
		this.setName = function (name){
			_name = name;
		}
		this.getName = function (){
			return _name;
		}
	}

	greet() {
		console.log(`hi, i'm ${this.getName()} and i'm ${this.age} years old`);
	}
}

var Pclass = (function(){
	const a = Symbol('a');
	const m = Symbol('m');
	class  Pclass {
		constructor(){
			this[a] = 'a这是私有变量';
			this.b = '变量B-外部可访问';
			this[m] = function(){
				console.log('私有方法');
			}
		}
		getA(){
			console.log(this[a]);
		}
		getM(){
			console.log(this[m]);
		}
	}
	return Pclass
}())

let pc = new Pclass()
console.log(pc)   //打印 Pclass {b: "变量B-外部可访问", Symbol(a): "这是私有变量", Symbol(m): ƒ}
// 如果不将a,m暴露出来，就不会被外部使用
