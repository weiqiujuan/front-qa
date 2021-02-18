//当一个对象的状态发生改变时，所有依赖他的对象都可以得到通知。
let event = {
	clientList: [],
	listen: function (key, fn) {
		if (!this.clientList[key]) { // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
			this.clientList[key] = [];
		}
		this.clientList[key].push(fn); // 订阅的消息添加进消息缓存列表
	},
	trigger: function () {
		var key = Array.prototype.shift.call(arguments),//取出消息类型
			fns = this.clientList[key];// 取出该消息对应的回调函数集合
		if (!fns || fns.length === 0) return false
		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments); // (2) // arguments 是发布消息时附送的参数
		}
	},
	// 取消订阅事件
	remove: function (key, fn) {
		var fns = this.clientList[key];
		if (!fns) return false // 如果key对应的消息队列没有被人订阅，则直接返回
		if (!fn) {//如果没有传入具体的回调函数，表示取消key对应消息的所有订阅
			fns && (fns.length = 0)
		} else {
			for (let l = fns.length - 1; l > 0; l--) {
				let _fn = fns[l]
				if (_fn === fn) {
					fns.splice(l, 1) // 删除订阅者的回调函数
				}
			}
		}
	}
}

// 安装发布订阅模式
var installEvent = function (obj) {
	for (var i in event) {
		obj[i] = event[i]
	}
}

var salesOffices = {};
installEvent(salesOffices);
salesOffices.listen('square-88', fn1 = function (price) { // 小明订阅消息88平的房子
	console.log('价格= ' + price);
});
salesOffices.listen('square-100', fn2 = function (price) { // 小红订阅消息100平的房子
	console.log('价格= ' + price);
});
salesOffices.trigger('square-88', 2000000); // 输出：2000000
salesOffices.trigger('square-100', 3000000); // 输出：3000000
salesOffices.remove('square-88', fn1); // 小明买到房了取消订阅











