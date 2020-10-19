// 基础实现
const uniqueApi = (arr, isSorted) => {
    const res = [];
    let seen;
    for (let i = 0; i < arr.length; i++) {
        if (isSorted) {
            if (!i || seen !== arr[i]) {
                res.push(arr[i])
            }
            seen = arr[i]
        } else {
            res.indexOf(arr[i]) === -1 ? res.push(arr[i]) : null
        }
    }
    return res
}

// filter实现
function unique(arr) {
    return arr.filter(function (item, index, arr) {
        return arr.indexOf(item) === index;
    })
}

// 键值对的方法
function uniqueObj(arr) {
    let obj = {}
    return arr.filter(function (item) {
        // console.log(typeof item + JSON.stringify(item)) string"1"
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}

// es6方式: 数组，但是成员的值都是唯一的，没有重复的值。
function uniqueSet1(arr) {
    return Array.from(new Set(arr))
}

// 简化
const uniqueSet2 = (a) => [...new Set(a)]

// 使用map
function uniqueMap(arr) {
    const seen = new Map()
    return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

const array1 = [1, 2, '1', 2, 1];
const array2 = [1, 1, '1', 2, 2];
const array = [{value: 1}, {value: 1}, {value: 2}];
// console.log(uniqueApi(array1)); // [1, 2, "1"]
// console.log(unique(array2))
console.log(uniqueObj(array))
// console.log(uniqueSet2(array2))
// console.log(uniqueMap(array2))
// console.log(uniqueApi(array2, true)); // [1, "1", 2]