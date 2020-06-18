// 对数组中每个元素执行一个reducer函数，返回一个结果值
const reduce = (arr, cb, init) => {
    let result = init;
    for (let i = 0; i < arr.length; i++) {
        /* params : result 累计结果，*/
        result = cb(result, arr[i], i, arr);
    }
    return result;
};

const arr = [1, 3, 4, 5, 6]
const res = reduce(arr, function (a, b) {
    return a - b
},90)
console.log(res)