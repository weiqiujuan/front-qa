// 根据位数排序
// [217, 151, 61, 72, 893, 73, 5]
// 151 61 72 73 893 5 217
const sortByDigits = (arr) => {
	let obj = dpDigits(arr);
	dpObj(obj)
	// console.log(dpObj(obj))
}

const dpObj = (obj) => {
	for (let item in obj) {
		const childObj = dpDigits(obj[item]);
		if (Object.keys(childObj).length > 1) {
			dpObj(childObj)
		} else {
			obj[item] = childObj
		}
	}
	// return obj
}
const dpDigits = (arr) => {
	if (arr.length === 1 && arr[0] !== '') {
		return arr[0]
	}
	if (arr.length === 1 && arr[0] === '') {
		return ''
	}
	const newArr = arr.map(item => {
		return item.toString().length && item.toString().split('').reverse();
	})
	let obj = {};
	for (let i = 0; i < newArr.length; i++) {
		if (!obj[newArr[i][0]]) {
			obj[newArr[i][0]] = [];
		}
		obj[newArr[i][0]].push(newArr[i].slice(1).reverse().join(''));
	}
	return obj;
}
let arr = [217, 151, 61, 72, 893, 73, 5]
sortByDigits(arr)
// 151 61 72 73 893 712
