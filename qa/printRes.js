console.log(1 + "1")
console.log(2 * "2")
//  Javascript中所有对象基本都是先调用valueOf方法，如果不是数值，再调用toString方法。
//  所以两个数组对象的toString方法相加，值为："1,22,1"
console.log([1, 2] + [2, 1])
console.log("a" + +"b")