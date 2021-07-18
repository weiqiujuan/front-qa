var myObj = {
		name: "极客时间",
		showThis: function () {
				// console.log(this)

				// var self = this;

				function bar() {
						this.name = '被修改后的极客时间'
						// 嵌套函数中的this不会从外层函数中继承
						//console.log(this)
				}

				bar()
		}
}
myObj.showThis()
console.log(myObj.name)
console.log(window.name)


// 通过userInfo.updateInfo 来改变userInfo
// let userInfo = {
// 	name: "jack.ma",
// 	age: 13,
// 	sex: 'male',
// 	updateInfo: function () {
// 		//模拟xmlhttprequest请求延时
// 		let that = this;//使用外部缓存this的方法
// 		setTimeout(function () {
// 			that.name = "pony.ma"
// 			that.age = 39
// 			that.sex = 'female'
// 		}, 100)
// 	}
// }
// userInfo.updateInfo()
// setTimeout(() => {
// 	console.log(userInfo)
// }, 300)

