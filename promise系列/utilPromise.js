const fetch = require("node-fetch");
// try {
// 		let url  = 'https://example.com/movies.json';
// 		let url2= 'http://www.baidu.com#q=小米'
// 		new Promise(() => {
// 				fetch(url2)
// 						.then(res=>{
// 								console.log('res',res)
// 						}).catch(err=>{
// 								console.log('err',err)
// 				})
// 		})
// } catch (e) {
// 		console.log('try catch', e)
// }
// new Promise((resolve, reject) => {
// 		// fetch('http://www.baidu.com#q=小米')
// 		// 		.then(res => {
// 		// 				console.log('res', res)
// 		// 		}).catch(err => {
// 		// 		console.log('err', err)
// 		// })
// 		let data = 2;
// 		data === 2 ? resolve(2) : reject(1)
// }).then(res => {
// 		console.log('res', res)
// }).catch(err => {
// 		console.log('err', err)
// 		return err
// })

// var length = 10;
// function fn() {
// 		console.log(this.length);
// }
// var obj = {
// 		length: 5,
// 		method: function () {
// 				fn();
// 				arguments[0]();
// 		}
// }
// obj.method(fn, 1);
//
// console.log(obj.length)

// "use strict";
// var a = 10;
//
// function foo() {
// 		console.log('this1', this)
// 		console.log(window.a)
// 		console.log(this.a)
// }
//
// console.log(window.foo)
// console.log('this2', this)
// foo();


function Promise(executor) {
		var self = this
		self.status = 'pending' // Promise当前的状态
		self.data = undefined  // Promise的值
		self.onResolvedCallback = [] // Promise resolve时的回调函数集

		function resolve(value) {
				if (self.status === 'pending') {
						self.status = 'resolved'
						self.data = value
						for (var i = 0; i < self.onResolvedCallback.length; i++) {
								self.onResolvedCallback[i](value)
						}
				}
		}
		// 执行new Promise()时，传入的function。等于说每次新建new Promise实例，总会执行传入的函数
		executor(resolve, reject)
}

Promise.prototype.then = function (onResolved, onRejected) {
		var self = this // self = this = primise1

		// 状态处理，主流程大部分走pending
		if (self.status === 'pending') {
				return new Promise(function (resolve, reject) {
						// 包装的resolvedCallback。resolvedCallback调用时间：promise1调用resolve
						var resolvedCallback = function (value) {
								var x = onResolved(self.data)
								resolve(x) // 重要。这是promise2的resolve，触发链式调用
						}

						// 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，只能等到Promise的状态确定后，才能确实如何处理.
						// 重要：第一个then()回调，放进promise1.callbacks，第二个then()，放进promise2.callback。
						self.onResolvedCallback.push(resolvedCallback)
				})
		}
}

module.exports = Promise













