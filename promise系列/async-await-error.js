// 如果try/catch的catch部分有异常，我们应该如何处理呢？
// 只有一个方法：在catch里面接着使用try/catch。所以，run().catch()的模式使得异常处理变得非常简洁。
run()
    .catch(function handleError(err) {
        err.message; // Oops!
    })
    // 在handleError中处理所有的异常
    // 如果handleError出错，则退出。
    .catch(err => {
        let process;
        process.nextTick(() => {
            throw err;
        });
    });

async function run() {
    // await Promise.reject(new Error("Oops!"));
    return Promise.reject(new Error("Oops!"));
}


