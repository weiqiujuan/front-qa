var obj = {}
var flag = 1

/*Object.defineProperty(obj,'flag',{
    get:function (){
        return flag
    },
    set:function (value){
        flag=value
    },
    configurable: true,
    enumerable: true
})
console.log(obj.flag)*/

// function observe(obj) {
//     if (!obj || typeof obj != 'object') {
//         return
//     }
//     for (var i in obj) {
//         definePro(obj, i, obj[i]);
//     }
// }
//
// function definePro(obj, key, value) {
//     observe(value);
//     Object.defineProperty(obj, key, {
//         get: function () {
//             return value;
//         },
//         set: function (newval) {
//             console.log('检测变化', newval);
//             value = newval;
//         }
//     })
// }
//
// definePro(obj, 'flag', 1)

