const mergeArr = (arr1, arr2) => {
    return Array.from(new Set(arr1.concat(arr2))).filter(item => {
        return item % 2 === 0
    }).sort((a, b) => {
        return b - a
    })
}
const main = mergeArr([1, 4, 6, 9], [3, 6, 4, 2, 10])
console.log(main)