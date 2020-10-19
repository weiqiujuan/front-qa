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