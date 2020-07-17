Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments)
    }
}
// var push = Array.prototype.push.uncurrying();
// (function () {
//     push(arguments, 4);
//     console.log([].slice.call(arguments)); // 输出：[1, 2, 3, 4]
// })(1, 2, 3);

// 一次性的把Array.prototype上的方法复制到array对象上去。
for (let i = 0, type = ['push', 'shift', 'pop']; fn = type[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying()
}

Function.prototype.uncurrying = function () {
    let that = this;
    return function () {
        return Function.prototype.call.apply(that, arguments)
    }
}