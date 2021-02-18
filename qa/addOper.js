// 实现一个方法，对一个数组中的元素作加法运算，元素可能是字符串，数字，对象，仅对可转为数字的元素作累加。
const add = (arr) => {
	const numberArr = arr.filter(item => {
		return typeof item === 'number' && !isNaN(item)
	})
	return numberArr.reduce((item1, item2) => {
		return item1 + item2
	})
}

console.log(add([1,2,',',5,6,7,'---','kkk',NaN]))
console.log(add([1,2,'3',null,undefined,'err',{a:'gh'}]))
