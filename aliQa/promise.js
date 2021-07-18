// 2. 实现Promise.all()功能 （建议15分钟）
// 接收一个promise数组
// 遍历到有一个promise是reject，直接返回的promise状态为rejected
// 遍历所有的promise的状态都为resolved, 则返回的promise状态为resolved，并且还要每个promise产生的值传递下去
Promise.all = function (promiseAll) {
	let count = 0;
	const result = [];
	return new Promise(((resolve, reject) => {
		promiseAll.forEach((item) => {
			Promise.resolve(item).then(value => {
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
