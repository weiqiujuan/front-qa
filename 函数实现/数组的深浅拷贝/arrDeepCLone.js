// 不能拷贝函数
const arr = ['old', 1, true, ['old1', 'old2'], {old: 1}];
const new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr);

const arr = [function () {
    console.log(a)
}, {
    b: function () {
        console.log(b)
    }
}];
const new_arr = JSON.parse(JSON.stringify(arr));
console.log(new_arr);

const deepCopy = function (obj) {
    if (typeof obj !== 'object') return;
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 如果是对象，递归调用深拷贝函数就ok了。
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
};

var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};
