let setTimout_my = (fn, timeout, ...args) => {
	const start = +new Date() // 记录当前时间
	let timer, now;
	const loop = () => {
		timer = window.requestAnimationFrame(loop)
		now = +new Date();
		// 当前运行时间-初始运行时间>=等待时间==>跳出
		if (now - start >= timeout) {
			fn.apply(this, args)
			window.cancelAnimationFrame(timer)
		}
	}
	window.requestAnimationFrame(loop)
}

function showName() {
	console.log('hello')
}

let timeID = setTimout_my(showName, 1000)
console.log(timeID)
