function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，
        //用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        });
    });

    (async function loop() {
        let p = Promise.race(promises);
        for (let i = 0; i < sequence.length; i++) {
            p = p.then((res) => {
                promises[res] = handler(sequence[i]).then(() => {
                    return res
                });
                return Promise.race(promises)
            })
        }
    })()
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123];
let count = 0;

const asyncHandle = (item) => {
    return new Promise((resolve, reject) => {
        count++
        setTimeout(() => {
            console.log(item, '当前并发量', count--)
            // if (item > 4) reject('error happen')
            resolve()
        }, Math.random() * 2000)
    })
}

limitLoad(list, asyncHandle, 3)