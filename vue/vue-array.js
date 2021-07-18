// 对原有数组的重写push，pop, shift等等
const arrayProto = Array.prototype; // 数组的原型
const arrayMethods = Object.create(arrayProto) // 创建一个空对象，arrayMethods的原型指向Array.prototype
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methodsToPatch.forEach(method => {
	// 保存一分当前的方法对应的数组原始方式
	const original = arrayProto(method);
	// 将重写后的方法定义到arrayMethods对象上,mutator{}重写后的方法
	Object.defineProperty(arrayMethods, method, function mutator (...args) {
		// 调用数组原始方法，并传入参数args，并将执行结果赋给result
		const result = original.apply(this, args)
		// 当数组调用重写后的方法时，this指向该数组，当该数组为响应式时，就可以获取到其__ob__属性
		const ob = this.__ob__
		let inserted
		switch (method) {
			case 'push':
			case 'unshift':
				inserted = args
				break
			case 'splice':
				inserted = args.slice(2)
				break
		}
		if (inserted) ob.observeArray(inserted)
		// 将当前数组的变更通知给其订阅者
		ob.dep.notify()
		// 最后返回执行结果result
		return result
	})
})


