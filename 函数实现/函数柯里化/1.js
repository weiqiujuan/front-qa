const curry = function (fn) {
  const args = [].slice.call(arguments, 1);// 参数
  return function () {
    let newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};
function add(a, b) {
    return a + b;
}

const addCurry = curry(add, 1, 2);
addCurry() // 3
//或者
// var addCurry = curry(add, 1);
// addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// addCurry(1, 2) // 3