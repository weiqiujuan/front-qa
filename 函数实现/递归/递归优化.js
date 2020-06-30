// 尾递归
function factorial(n, res) {
    if (n == 1) return res;
    return factorial(n - 1, n * res)
}

console.log(factorial(4, 1))