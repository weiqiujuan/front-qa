const PENDING = 'PENDING';
const RESOLVE = 'RESOLVE';
const REJECTED = 'REJECTED';

function Promise(executor) {
	const self = this;

	self.status = PENDING;
	self.data = undefined;
	self.callbacks = [] // { onResolved: () => {}, onRejected: () => {} }

	function resolve(value) {
		if (self.status !== PENDING) {
			return
		}
		self.status = RESOLVE;
		self.data = value;
		if (self.callbacks.length > 0) {
			setTimeout(() => {
				self.callbacks.forEach(fn => {
					fn.onResolved(value)
				});
			});
		}
	}

	function reject(reason) {
		if (self.status !== PENDING) {
			return
		}
		self.status = REJECTED;
		self.data = reason;
		if (self.callbacks.length > 0) {
			setTimeout(() => {
				self.callbacks.forEach(fn => {
					fn.onRejected(reason)
				});
			});
		}
	}

	try {
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}

Promise.prototype.then = function (onResolved, onRejected) {

	onResolved = typeof onResolved === 'function' ? onResolved : value => value;
	onRejected = typeof onRejected === 'function' ? onRejected : reason => {
		throw reason
	};

	const that = this;
	return new Promise((resolve, reject) => {
		// promise当前状态还是pending状态，将回调函数保存起来
		/*
		1. 如果抛出异常,return的promise就会失败,reason就是error
		// then 里的回调可以是普通值（非promise）和promise 因此要区分奥
		2. 如果回调函数返回不是promise, return的promise就会成功,value就是返回值
		3. 如果回调函数返回的是promise, return的promise结果就是这个promise的结果
		*/
		if (that.status === PENDING) {
			that.callbacks.push({
				onResolved: () => {
					try {
						const result = onResolved(that.data);
						if (result instanceof Promise) {
							result.then(resolve, reject);
						} else {
							resolve(result);
						}
					} catch (e) {
						reject(e);
					}
				},
				onRejected: () => {
					try {
						const result = onRejected(that.data);
						if (result instanceof Promise) {
							result.then(resolve, reject)
						} else {
							resolve(result)
						}
					} catch (e) {
						console.log('try 出错啦', e);
						reject(e);
					}
				}
			})
		} else if (that.status === RESOLVE) {
			setTimeout(() => {
				try {
					const result = onResolved(that.data);
					// 3. 如果回调函数返回的是promise, return的promise结果就是这个promise的结果
					if (result instanceof Promise) {
						result.then(resolve, reject)
					} else {
						// 2. 如果回调函数返回不是promise, return的promise就会成功,value就是返回值
						resolve(result)
					}
				} catch (e) {
					// 1. 如果抛出异常,return的promise就会失败,reason就是error
					reject(e);
				}
			});
		} else {
			setTimeout(() => {
				try {
					const result = onRejected(that.data);
					if (result in Promise) {
						result.then(resolve, reject)
					} else {
						// 非promise 那么返回的这个promise为成功
						resolve(result);
					}
				} catch (e) {
					reject(e);
				}
			});
		}
	})
}

// .catch
// .then(null, rejection) 或是 .then(undefined, rejection)的别名，
// 用于指定发生错误时的回调函数。
Promise.prototype.catch = function (reason) {
	return this.then(null, reason)
}


// Promise.resolve(1)
// Promise.resolve(Promise.resolve(1))
// Promise.resolve(Promise.reject(1))
// 返回一个promise
Promise.resolve = function (value) {
	// value  非promise的值  return一个指定值的成功的promise
	// value promise值， 返回的promise的状态 由 value 的结果决定（一个成功 or 失败的promise）
	return new Promise((resolve, reject) => {
		if (value instanceof Promise) {
			value.then(resolve, reject);
		} else {
			resolve(value);
		}
	})
}

// 返回一个指定reason的失败的promise
Promise.reject = function (reason) {
	return new Promise((resolve, reject) => {
		reject(reason);
	})
}

// 接收一个promise数组
// 遍历到有一个promise是reject状态，则直接返回的promise状态为rejected
// 遍历所有的promise的状态都为resolved,则返回的promise状态为resolved，并且还要每个promise产生的值传递下去
Promise.all = function (promiseArr) {
	let count = 0;
	const result = [];
	return new Promise((resolve, reject) => {
		promiseArr.forEach((promise, index) => {
			Promise.resolve(promise).then(
				value => {
					result[index] = value;
					count++;
					if (count === promiseArr.length) {
						resolve(result);
					}
				},
				reason => {
					reject(reason);
				}
			)
		})
	})
}

// 接收一个promise数组   返回一个promise。状态由第一个promise决定
Promise.race = function (promiseArr) {
	return new Promise((resolve, reject) => {
		promiseArr.forEach(promise => {
			Promise.resolve(promise).then(
				value => {
					resolve(value)
				},
				reason => {
					reject(reason)
				}
			)
		})
	})
}
// 接收一个promise数组，记录每个promise的状态和值
// 返回一个成功的promise
Promise.allSettled = function (promiseList) {
	let count = 0;
	const res = new Array(promiseList.length);
	return new Promise((resolve, reject) => {
		promiseList.forEach((p, i) => {
			p.then(
				value => {
					res[i] = {
						status: 'resolved',
						value
					}
					count++;
					if (count === promiseList.length) {
						resolve(res);
					}
				},
				reason => {
					res[i] = {
						status: 'rejected',
						reason
					}
					count++;
					if (count === promiseList.length) {
						reject(res);
					}
				}
			)
		})
	})
}


const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('not ok')
	}, 100);
})
const p2 = new Promise((resolve, reject) => {
	resolve(1);
})

const p3 = new Promise((resolve, reject) => {
	resolve('not ok');
})

const p = Promise.race([p1, p2, p3])

const p_test = Promise.race([p1, p2, p3])

p_test.then(v => {
	console.log('vvvvv11223333', v);
}).catch(r => {
	console.log('rrrrr123333', r);
})
p.then(v => {
	console.log('vvvvv', v);
}).catch(r => {
	console.log('rrrrr', r);
})


// function promise(fn) {
//     let value = null, successCb = [], failedCb = [];
//     this.then = function (filed, success) {
//         successCb.push(success);
//         failedCb.push(filed);
//         return this;
//     }
//     resolve = function (value) {
//         successCb.forEach(fn => {
//             fn(value)
//         })
//     }
//     reject = function () {
//         failedCb.forEach(fn => {
//             fn(value)
//         })
//
//     }
//     fn(resolve, reject)
// }
