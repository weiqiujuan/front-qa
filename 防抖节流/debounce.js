function debounce(method, wait) {
		let timeout
		// args为返回函数调用时传入的参数，传给method
		return function (...args) {
				let context = this
				if (timeout) {
						clearTimeout(timeout)
				}
				timeout = setTimeout(() => {
						return method.apply(context, args)
				}, wait)
		}
}


function sayHi(id) {
		let result;
		return new Promise((resolve, reject) => {
				result = 3 + id
				console.log('11111', result)
		}).catch(err => {
				console.log('出错了', id)
		}).then(() => {
				result = 5 + id
				console.log('then', result)
		})
}

const delayFun = debounce(sayHi, 200)
delayFun(123);
// var inp = document.getElementById('inp');
// inp.addEventListener('input', function () {
// 		delayFun(1)
// 		// sayHi(222).then(()=>{
// 		// 		console.log('then')
// 		// })
// }); // 防抖