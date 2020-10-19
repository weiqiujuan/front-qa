function promise(fn) {
    let value = null, successCb = [], failedCb = [];
    this.then = function (filed, success) {
        successCb.push(success);
        failedCb.push(filed);
        return this;
    }
    resolve = function (value) {
        successCb.forEach(fn => {
            fn(value)
        })
    }
    reject = function () {
        failedCb.forEach(fn => {
            fn(value)
        })

    }
    fn(resolve, reject)
}