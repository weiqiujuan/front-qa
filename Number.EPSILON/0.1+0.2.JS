console.log(0.1 + 0.2 === 0.3)
console.log(0.1 + 0.2 == 0.3)

//Number.EPSILON的实质是一个可以接受的最小误差范围。
//我们设置其误差范围为2的-50次方
function jisuan(num, sum) {
    return Math.abs(num - sum) - Number.EPSILON * Math.pow(2, 2) < 0
}

let res = jisuan(0.1 + 0.2, 0.3)

console.log(res)


Number.EPSILON === Math.pow(2, -52)