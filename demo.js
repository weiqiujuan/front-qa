// const filterArray = (arr) => {
// 		let res = [];
// 		arr.map(item => {
// 				Array.isArray(item) ? res = res.concat(filterArray(item)) : res.push(item)
// 		})
// 		return res;
// }
// let arr = [1, [2, [3, 4, 5], 4], 8]
// console.log(filterArray(arr))

// const flatten = () => {
// 		while (arr.some(item => Array.isArray(item))) {
// 				arr = [].concat(...arr)
// 		}
// 		return arr
// }
// const flatten = () => {
//
// }

const makeAdd = (num2) => (num3) => {
		return num2 + num3 + 10
}
console.log(makeAdd(11)(12))