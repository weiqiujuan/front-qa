// 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
const normalize = (str) => {
    // str的处理1
    // let arr = str.split('[').splice(1)
    // let index = arr.length - 1
    // let [lastArr,] = arr[index].split(']')
    // arr.splice(index, 1, lastArr)

    // str的处理2
    let arr = str.split(/[\[\]]/g).filter(Boolean)
    let obj;
    while (arr.length) {
        let tmp = {
            value: arr.pop()
        }
        if (obj) {
            tmp.children = obj
        }
        obj = tmp
    }
    return obj
}
const main = normalize('[abc[bcd[def]]]')
console.log(main)
