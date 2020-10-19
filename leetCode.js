let arr = [1, 2, 3, 4, 4, 5, 4];
const lastIndex = (arr, target) => {
		let index = null
		for (let i = 0; i < arr.length; i++) {
				if (arr[i] === target) {
						index = i
				}
		}
		return index;
}
const main = lastIndex(arr, 4)
console.log(main)