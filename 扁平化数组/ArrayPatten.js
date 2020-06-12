//https://github.com/mqyqingfeng/Blog/issues/36

var arr = [1, [2, [3, 4]]];

function flatten(arr) {
    let result = []
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}


function flattenString(arr) {
    return arr.toString().split(',').map(function(item) {
        return +item
    })
}
console.log(flattenString(arr))

function reduceFlatten(arr) {
    return arr.reduce(function(prev, next) {
        return prev.concat(Array.isArray(next) ? reduceFlatten(next) : next)
    }, [])
}
console.log(reduceFlatten(arr))

function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr;
}
console.log(flatten(arr))