// 使用reduce实现
Array.prototype._map = function (fn, cbThis) {
    let res = [];
    let context = cbThis || null
    this.reduce((before, cur, index, arr) => {
        res.push(fn.call(context, cur, index, arr));
    }, null);
    return res;
}

const arr = [1, 2, 3, 4]
const res = arr._map(item => {
        return item *= 2;
    }
)
console.log(res)