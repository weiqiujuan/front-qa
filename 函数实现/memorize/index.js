// // 将参数和对应的结果进行存储，调用时，判断参数对应的数据是否存在，存在就返回对应的结果数据
// function memorize(f) {
//     let cache = {};
//     return function () {
//         let key = arguments.length + Array.prototype.join.call(arguments, ",");
//         console.log(key)
//         if (key in cache) {
//             return cache[key]
//         } else return cache[key] = f.apply(this, arguments)
//     }
// }
//
// const add = (a, b, c) => {
//     return a + b + c
// }
//
// const memoizedAdd = memorize(add);
// console.time('use memorize')
// let i;
// for (i = 0; i < 10; i++) {
//     memoizedAdd(1, 2, 3)
// }
// console.timeEnd('use memorize')
var memorize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    memoize.cache = {};
    return memoize;
};
var add = function(a, b, c) {
    return a + b + c
}
var memoizedAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    return JSON.stringify(args)
})

console.log(memoizedAdd(1, 2, 3)) // 6
console.log(memoizedAdd(1, 2, 4)) // 7
