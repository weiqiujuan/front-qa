//定义：保证一个类只有一个实例，并提供访问此实例的全局访问点。
//用途: 比如我们单机登录按钮出现登录浮窗，这个登录浮窗是唯一的，无论单击多少次，这个浮窗之后被创建一次
//思路： 用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象
// 基础方法
var Singleton = function (name) {
	this.name = name;
	this.instance = null; // 用此变量来标志当前是否已经为某个类创建过对象，
};
Singleton.getInstance = function (name) {
	if (!this.instance) { //如果没有创建过，则创建
		this.instance = new Singleton(name);
	}
	return this.instance; // 如果创建过。直接返回之前创建的对象
};
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
console.log(a === b); // true

// 用代理实现单例模式：
var Signle = function () {

}
var proxySignle = (function () {
	var instance;
	return function () {
		if (!instance) {
			instance = new Signle()
		}
		return instance
	}
})()
const a = proxySignle()

function strMapToObj(strMap) {
	let obj = Object.create(null);
	for (let [k, v] of strMap) {
		obj[k] = v;
	}
	return obj;
}

const myMap = new Map()
	.set('yes', true)
	.set('no', false);
strMapToObj(myMap)
