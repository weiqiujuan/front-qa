/**
 * 在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。
 例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
 */
const arr = ["红", "蓝", "蓝", "黄", "红", "黄", "蓝", "红", "红", "黄", "红"]
const rules = {
    黄: 1,
    红: 2,
    蓝: 3
}
const classSort = (arr, rules) => {
    return arr.sort((pre, next) => {
        return rules[pre] - rules[next]
    })
}
console.log(classSort(arr, rules))