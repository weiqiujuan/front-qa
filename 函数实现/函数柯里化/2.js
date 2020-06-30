// const sub_curry = function (fn) {
//     let args = [].slice.call(arguments, 1)
//     return function () {
//         return fn.call(this, args.concat([].slice.call(arguments)))
//     }
// }
// const curry = function (fn, length) {
//     length = length || fn.length;
//     const slice = Array.prototype.slice;
//     return function () {
//         if (arguments.length < length) {
//             const combined = [fn].concat(slice.call(arguments));
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     };
// }

function curry(fn, args) {
    const length = fn.length;
    args = args || [];
    return function () {
        let _args = args.slice(0),
            arg, i;
        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            _args.push(arg);
        }
        if (_args.length < length) {
            return curry.call(this, fn, _args);
        } else {
            return fn.apply(this, _args);
        }
    }
}

const fn = curry(function (a, b, c) {
    return [a, b, c];
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]