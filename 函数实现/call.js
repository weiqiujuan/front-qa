// 使用call用它来获取数组中最大的一项。
const arr = [2, 3, 4, 51, 6, 22]
console.log(Math.max.call(null, ...arr))
// 合并两个数组

const arr1 = [1, 3, 5, 7, 9]
const arr2 = [2, 4, 6, 8, 10]
const result = Array.prototype.push.call(arr1, ...arr2)
console.log(arr1)

// call的实现只是少了一层判断
// apply的实现
Function.prototype.myapply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this
    var result;
    if (!arr) {
        result = context.fn()
    } else {
        let args = []
        for (let i = 0; i < arr.length; i++) {
            args.push(arr[i])
        }
        result = context.fn(...args)
    }
    delete context.fn
    return result
}

const arrTest = [2, 3, 4, 51, 6, 22]
console.log(Math.max.myapply(null, arrTest))