// a.js
console.log('a模块start');
exports.test = 1;
undeclaredVariable = 'a模块未声明变量'
const b = require('./b');
console.log('a模块加载完毕: b.test值：', b.test);
// 小米官网的写法
!function (n) {　　　
	// 获取window的document、dom-ele元素、i（ui设置图尺寸）、
	// 换算比率、监听对象名（orientationchange ios移动端横/纵向查看模式，resize 为window窗口尺寸改变事件）、
	// 定义方法a（处理html的font-size值）
	// 首先获取当前window的可见宽度，存在则为320，最大为750像素，也就是说只针对2种尺寸的变化、document对象监听之前得到的事件名（resize或ios的change）当文档加载完毕或者重置尺寸的时候重新设置
	var e = n.document, t = e.documentElement, i = 750, d = i / 100,
		o = "orientationchange" in n ? "orientationchange" : "resize", a = function () {
			var n = t.clientWidth || 320;
			n > 750 && (n = 750);
			t.style.fontSize = n / d + "px"
		};
	e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);


var permutation = function(s) {
	const res = new Set()
	const visit = {}
	function dfs(path) {
		if(path.length === s.length) return res.add(path)
		for (let i = 0; i < s.length; i++) {
			if (visit[i]) continue
			visit[i] = true
			dfs(path + s[i])
			visit[i] = false
		}
	}
	dfs('')
	return [...res]
};
