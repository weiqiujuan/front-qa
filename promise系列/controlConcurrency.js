/**
 * @param listArr 需发送的请求
 * @param limit 并发控制数
 * @param asyncHandle list处理函数
 * @returns {Promise}
 */
const controlConcurrency = (listArr ,limit, asyncHandle) => {
    let listCopy = [].concat(listArr);// 需发送请求copy,防止变量污染
    let asyncList = [];// // 正在进行的所有并发异步操作
    const recursion = (listArr) => {
        return asyncHandle(listArr.shift()).then(() => {
            if (listArr.length !== 0) return recursion(listArr)
            else return 'finish'
        })
    }
    while (limit--) {
        asyncList.push(recursion(listCopy))
    }
    return Promise.all(asyncList) // 所有并发异步操作都完成后，本次并发控制迭代完成
}
/**
 * @param item
 * @returns {Promise<>}
 */
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
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 100, 123];
const limit = 4;
let count = 0;
controlConcurrency(list, limit, asyncHandle).then(response => {
    console.log('finish', response)
})