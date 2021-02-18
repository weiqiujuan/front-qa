//在不改变对象自身的基础上，动态的添加功能代码

//https://segmentfault.com/a/1190000013664124
const addDecorator = (fn, before, after) => {
	let isFn = fn => typeof fn === 'function'
	if (!isFn(fn)) {
		return () => {
		}
	}
	return (...args) => {
		let result;
		// 按照顺序执行“装饰函数”
		isFn(before) && before(...args);
		// 保存返回函数结果
		isFn(fn) && (result = fn(...args));
		isFn(after) && after(...args);
		// 最后返回结果
		return result;
	};
}

const beforeHello = (...args) => {
	console.log(`Before Hello, args are ${args}`)
}
const hello = (name = 'user') => {
	console.log(`hello,${name}`)
	return name
}

const afterHello = (...args) => {
	console.log(`After Hello ,args are ${args}`)
}

const weapperHello = addDecorator(hello, beforeHello, afterHello)
let result = weapperHello('godbmw.com')
console.log(result)


// var Car = function() {}

// Car.prototype.drive = function() {
//     console.log('乞丐版')
// }

// var AutopilotDecorator = function(car) {
//     this.car = car
// }

// AutopilotDecorator.prototype.drive = function() {
//     this.car.drive()
//     console.log('启动自动驾驶')
// }

// var car = new Car();
// car = new AutopilotDecorator(car);
// car.drive();


//实现逻辑的封装和代码的重用只需要通过对象来组织代码，然后利用原生提供的克隆机制（Object.create）来达到目的。
// var car = {
//     drive: function() {
//         console.log('乞丐版')
//     }
// }
// var driveBasic = car.drive;
// var AutopilotDecorator = function() {
//     console.log('启动自动驾驶模式')
// }


// carToDecorate.drive = function() {
//     driveBasic()
//     AutopilotDecorator()
// }

// carToDecorate.drive()

//通过在Function的原型链上定义after函数，给所有的函数都赋予了被扩展的功能
Function.prototype.after = function (afterFn) {
	var _self = this;
	return function () {
		var ret = _self.apply(this, arguments)
		afterFn.apply(this, arguments)
		return ret
	}
}
var car = {
	drive: function () {
		console.log('乞丐版')
	}
}
var AutopilotDecorator = function () {
	console.log('启动自动驾驶模式')
}
var carToDecorate = Object.create(car)

carToDecorate.drive = car.drive.after(AutopilotDecorator)
carToDecorate.drive()
