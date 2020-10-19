const makeCancelable = (promise) => {
    let hasCanceled_ = false;
    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then((val) =>
            hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
        ).catch((error) =>
            hasCanceled_ ? reject({isCanceled: true}) : reject(error)
        );
    });
    return {
        promise: wrappedPromise,
        cancel() {
            hasCanceled_ = true;
        },
    };
};

const somePromise = new Promise(r => setTimeout(r, 1000));//创建一个异步操作
const cancelable = makeCancelable(somePromise);//为异步操作添加可取消的功能
cancelable
    .promise
    .then(() => console.log('resolved'))
    .catch(({isCanceled, ...error}) => console.log('isCanceled', isCanceled));
// 取消异步操作
cancelable.cancel();