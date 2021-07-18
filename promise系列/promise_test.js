// 接收一个promise数组
// 遍历到有一个promise是reject，直接返回的promise状态为rejected
// 遍历所有的promise的状态都为resolved, 则返回的promise状态为resolved，并且还要每个promise产生的值传递下去
Promise.all = function (promiseAll) {
	let count = 0;
	const result = [];
	return new Promise(((resolve, reject) => {
		promiseAll.forEach((item) => {
			item.then(value => {
				result.push(value);
				count++;
				if (count === promiseAll.length) {
					resolve(result)
				}
			}, reason => {
				reject(reason)
			})
		})
	}))
}

// 接收一个promise数组，返回一个promise,状态由第一个promise决定
Promise.race = function (promiseArr) {
	return new Promise((resolve, reject) => {
		promiseArr.forEach(promise => {
			Promise.resolve(promise).then(value => {
				resolve(value)
			}, reason => {
				reject(reason)
			})
		})
	})
}

// 接收一个promise数组，记录每个promise的状态和值
// 返回一个成功的promise
Promise.allSettled = function (promiseList) {
	return new Promise((resolve, reject) => {
		promiseList.forEach((p, i) => {
			p.then(value => {
				res.push({
					status: 'resolved',
					value
				})
				if (i === promiseList.length - 1) {
					resolve(res)
				}
			}, reason => {
				res.push({
					status: 'rejected',
					reason
				})
				if (i === promiseList.length - 1) {
					resolve(res)
				}
			})
		})
	})
}

Promise.resolve = function (value) {
	return new Promise(((resolve, reject) => {
		if (value instanceof Promise) {
			value.then(resolve, reject)
		} else {
			resolve(value)
		}
	}))
}

Promise.reject = function (reason) {
	return new Promise((resolve, reject) => {
		reject(reason)
	})
}



