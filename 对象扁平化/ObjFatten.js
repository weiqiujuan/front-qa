//{ cost: 12345, insertBy: 'testUser' } 会成为 cost=12345&insertBy=testUser
//https://segmentfault.com/q/1010000006658882
function objPatten(obj) {
    let result = []
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
        }
    }
    return result.join('&')
}
var obj = { cost: 12345, insertBy: 'testUser' }
console.log(objPatten(obj))

/* 对象的扁平化 */
function deepClone(arr) {
    let res = (arr instanceof Array) ? [] : {}
    for (let i in arr) {
        res[i] = (typeof arr[i] === 'object') ? deepClone(arr[i]) : arr[i]
    }
    return res
}