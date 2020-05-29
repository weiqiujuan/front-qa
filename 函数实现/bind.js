Function.prototype.bind = function(context) {
    if (typeof this !== "function") {
        throw new TypeError("Error");
    }

    const that = this;
    // 保留之前的参数，为了下面的参数拼接
    const args = [...arguments].slice(1);

    return function F() {
        // 如果被new创建实例，不会被改变上下文！
        if (this instanceof F) {
            return new that(...args, ...arguments);
        }

        // args.concat(...arguments): 拼接之前和现在的参数
        // 注意：arguments是个类Array的Object, 用解构运算符..., 直接拿值拼接
        return that.apply(context, args.concat(...arguments));
    };
};

function deepClone(arr) {
    let res = (arr instanceof Array) ? [] : {}
    for (let i in arr) {
        res[i] = (typeof arr[i] === 'object') ? deepClone(arr[i]) : arr[i]
    }
    return res
}

function transString(str) {
    return str.split('').map((item) => {
        return item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
    }).join('')
}

console.log(transString('AbC'))