// var cost = (function () {
//         var args = [];
//         return function () {
//             if (arguments.length === 0) {
//                 var money = 0;
//                 for (var i = 0, l = args.length; i < l; i++) {
//                     money += args[i];
//                 }
//                 return money;
//             } else {
//                 [].push.apply(args, arguments);
//             }
//         }
//     }
// )();
var current = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args)
        } else {
            [].push.apply(args, arguments)
            return arguments.callee
        }
    }
}
var costs = (function () {
    var moneny = 0;
    return function () {
        for (let i = 0, len = arguments.length; i < len; i++) {
            moneny += arguments[i]
        }
        return moneny;
    }
})()

var cost = current(costs)
cost(100)// 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
console.log(cost());

var curry = function (fn, args) {
    let l = fn.length
    args = args || []
    return function () {
        let _args = args.slice(0)
        for (let i = 0, len = arguments.length; i < len; i++) {
            _args.push(arguments[i])
        }
        if (_args.length < l) {
            return curry.call(this, fn, args)
        } else {
            return fn.apply(this, _args);
        }
    }
}













