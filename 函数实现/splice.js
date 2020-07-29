// 如何模拟实现 Array.prototype.splice
const splice = (start, deleteNum, str, arr) => {
    let leftArr = [], rightArr = [], newArr = [];
    if (arr.length < 2) return arr
    if (start >= 1) {
        for (let i = 0; i <start; i++) {
            leftArr.push(arr[i])
        }
    }
    if (deleteNum === 0) {
        for (let i = start; i < arr.length; i++) {
            rightArr.push(arr[i])
        }
    } else {
        for (let i = start + deleteNum; i < arr.length; i++) {
            rightArr.push(arr[i])
        }
    }
    newArr = str ? leftArr.concat(str, rightArr) : leftArr.concat(rightArr)
    return newArr
}
const months = ['Jan', 'March', 'April', 'June'];
const res = splice(1, 1, 'May', months)
console.log(res)