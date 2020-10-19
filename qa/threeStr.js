// 将 '10000000000' 形式的字符串，以每 3 位进行分隔展示 '10.000.000.000'
const splitStr = (str, point = 3, split = '.') => {
    let newStr = '';
    const reverseStr = str.split('').reverse().join('');
    for (const s in reverseStr) {
        newStr = (s !== '0' && s % point === 0) ? newStr + split + reverseStr[s] : newStr + reverseStr[s];
    }
    return newStr.split('').reverse().join('');
}
console.log(splitStr('10000000000'))