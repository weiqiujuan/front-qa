
Promise.prototype.all = function (promises) {
    let results = [];
    let promiseCount = 0;
    let promisesLength = promises.length;
    return new Promise(function (resolve, reject) {
        for (let val of promises) {
            Promise.resolve(val).then(function (res) {
                promiseCount++;
                results.push(res);
                if (promiseCount === promisesLength) {
                    return resolve(results);
                }
            }, function (err) {
                return reject(err);
            });
        }
    });
};
function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if (!isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedValues = new Array(promiseNum);
        for (var i = 0; i < promiseNum; i++) {
            (function (i) {
                Promise.resolve(promises[i]).then(value => {
                    resolvedCounter++
                    resolvedValues[i] = value
                    if (resolvedCounter === promiseNum) {
                        return resolve(resolvedValues)
                    }
                }, reason => {
                    return reject(reason)
                })
            })(i)
        }
    })
}
