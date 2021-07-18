//节流
function throttle(fn) {
	let canrun = true //是否执行的标记
	return function () {
		if (!canrun) return
		canrun = false //当定时器没有执行的时候标记永远是false
		fn.apply(this, args) // 将方法放在外面, 这样即便该函数是异步的，也可以保证在下一句之前执行
		setTimeout(function () {
			canRun = true
		}, 500)
	}
}

function sayHi(e) {
	console.log(e.target.innerWidth, e.target.innerHeight);
}

window.addEventListener('resize', throttle(sayHi));

function throttle(fn, time) {
	let canRun = true;
	return function () {
		if (!canRun) return;
		canRun = false;
		fn.apply(this, arguments)
		setTimeout(function () {
			canRun = true;
		}, time)
	}
}

