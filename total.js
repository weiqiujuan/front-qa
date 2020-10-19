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



// function sumString(a, b) {
//     a = '0' + a;
//     b = '0' + b;  //加'0'首先是为了转为字符串，而且两个数相加后可能需要进位，这样保证了和的长度就是a、b中长的那个字符的长度
//     var arrA = a.split(''),  //将字符串转为数组
//         arrB = b.split(''),
//         res = [],  //相加结果组成的数组
//         temp = '',  //相同位数相加的值
//         carry = 0,  //同位数相加结果大于等于10时为1，否则为0
//         distance = a.length - b.length,  //计算两个数字字符串的长度差
//         len = distance > 0 ? a.length : b.length;  //和的长度
//     // 在长度小的那个值前加distance个0，保证两个数相加之前长度是想等的
//     if (distance > 0) {
//         for (let i = 0; i < distance; i++) {
//             arrB.unShift('0');
//         }
//     } else {
//         for (let i = 0; i < distance; i++) {
//             arrA.unShift('0');
//         }
//     }
//     // 现在得到了两个长度一致的数组，需要做的就是把他们想通位数的值相加，大于等于10的要进一
//     // 最终得到一个和组成的数组，将数组转为字符串，去掉前面多余的0就得到了最终的和
//     for (let i = len - 1; i >= 0; i--) {
//         temp = Number(arrA[i]) + Number(arrB[i]) + carry;
//         if (temp >= 10) {
//             carry = 1;
//             res.unshift((temp + '')[1])
//         } else {
//             carry = 0;
//             res.unshift(temp)
//         }
//     }
//     res = res.join('').replace(/^0/, '');
//     console.log(res)
// }
//
// sumString(9007199254740991,1234567899999999999)


function outer() {
    var b = 10;
    return function inner() {

        var a = 20;
        a++
        b++
        console.log(a, b);
    }
}

var m = outer()
var n = outer()

//flex-direction: column;
// justify-content: flex-start;
// align-items: center;