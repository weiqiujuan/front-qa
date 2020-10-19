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
