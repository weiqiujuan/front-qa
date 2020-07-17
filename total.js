// const arr = [1, 3, 4, 6, 8, 9]
// const s = 9;
// const main = (arr, s) => {
//     if (!arr.length || !s) return
//     for (let i = 0; i < arr.length; i++) {
//         let number = s - arr[i]
//         if (arr.includes(number)) {
//             console.log([arr[i], number])
//             return [arr[i], number]
//         }
//     }
//     return
// }
// main(arr, s)


// 例如n=12，k=1，在 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]，我们发现1出现了5次 (1, 10, 11, 12)
// const totalCount = (s, n) => {
//     let str = '',s1 = s + '',count = 0;
//     for (let i = 0; i <= n; i++) {
//         str += i
//     }
//     for (let i = 0; i < str.length; i++) {
//         str[i] === s1 ? count++ : null
//     }
//     return count
// }
// const main = totalCount(1, 12)
// console.log(main)

// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const singleNumber = function (nums) {
//     let res = nums.sort();
//     for (let i = 0; i < res.length;) {
//         if (res[i] === res[i + 2]) {
//             res.splice(0, 3)
//         } else {
//             return res.splice(0, 1)[0]
//         }
//     }
// };
// const main = singleNumber([1, 7, 4, 1, 4, 1, 7, 4, 3, 7])
// console.log(main)

console.time()
var singleNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = 0;
        let bit = 1 << i;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] & bit) cnt++;
        }
        if (cnt % 3 !== 0) res = res | bit;
    }
    return res;
};
const main = singleNumber([1, 7, 4, 1, 4, 1, 7, 4, 3, 7])
console.log(main)
console.timeEnd()