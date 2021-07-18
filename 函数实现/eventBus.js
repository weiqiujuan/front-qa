class EventBus {
	constructor() {
		this.listeners = {}
	}

	/**
	 * 缓存事件监听
	 * @param {String} type 事件类型
	 * @param {Function} cb 回调函数
	 */
	on(type, cb) {
		if (!this.listeners[type]) {
			this.listeners[type] = []
		}
		this.listeners[type].push(cb)
	}

	/**
	 *
	 * @param {String} type 事件类型
	 * @param  {...params} args 参数列表，传回给callback
	 */
	emit(type, ...args) {
		if (this.listeners[type] && this.listeners[type].length > 0) {
			const types = this.listeners[type]
			types.forEach(cb => cb(...args));
		}
	}

	/**
	 * 移除事件监听
	 * 传两个参 移除该事件类型的 回调函数
	 * 传一个类型 移除该类型下的所有回调函数列表
	 * @param {*} type
	 * @param {*} cb
	 */
	off(type, cb) {
		if (this.listeners[type]) {
			const curIndex = this.listeners[type].findIndex(it => it === cb)
			if (curIndex >= 0) {
				this.listeners[type].splice(curIndex, 1)
			}
			// 只传type时，移除该事件的所有监听者
			if (this.listeners[type].length === 0) {
				delete this.listeners[type]
			}
		}
	}
}

// 实例化事件总线
const eb = new EventBus()

// 注册一个下班事件监听
eb.on('下班', (params) => {
	console.log('下班啦，撤了！')
})
// 发布`下班`事件
eb.emit('下班')

// 注册一个回家事件监听
eb.on('回家', (eat, sleep) => {
	console.log(`下班回家${eat}、${sleep}。`)
})
// 发布`回家`事件
eb.emit('回家', '吃饭', '睡觉')

// 移除事件监听 测试
const toBeOffFn = () => {
	console.log('这是一个可以被移除的事件。')
}
eb.on('offFn', toBeOffFn)
eb.emit('offFn')
eb.off('offFn', toBeOffFn)
eb.emit('offFn')
eb.off('offFn')

console.log(eb)
