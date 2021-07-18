// 实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
// const retry = (fn, maxTime) => {
//     return new Promise((resolve, reject) => {
//         let index = 0;
//         let action = (resolve, reject) => {
//             fn().then(resolve).catch(err => {
//                 if (maxTime === 0) {
//                     reject(err)
//                 } else {
//                     maxTime--;
//                     index++
//                     console.log(`已重试${index}次`)
//                     action(resolve, reject)
//                 }
//             })
//         }
//         action(resolve, reject)
//     })
// }
const retry = async (fn, maxTime) => {
	while (maxTime > 0) {
		try {
			const res = await fn()
			console.log(res)
			return
		} catch (e) {
			console.log('try again')
			maxTime--
		}
	}
	console.log('error: no more time, now reject')
}
const cb = () => {
	let num = Math.random() * 200 + 1
	return new Promise((resolve, reject) => {
		if (num % 2 !== 0) {
			resolve(num)
		} else {
			reject(num)
		}
	})
}
retry(cb, 3).then(res => {
	console.log(res)
}).catch(err => {
	console.log('失败', err)
})
