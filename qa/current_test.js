const currying = fn => judge = (...args) =>
	args.length >= fn.length
		? fn(...args)
		: (...arg) => judge(...args, ...arg)

const res = currying(1)(2)(3)
console.log(res)
