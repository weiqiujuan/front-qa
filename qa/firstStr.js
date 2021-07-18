// // 第一次出现且只出现一次的字符
// function findStr(str) {
//     if (!str.length) return
//     let obj = {};
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] in obj)) {
//             obj[str[i]] = 0
//         }
//         obj[str[i]] += 1
//     }
//     for (let item in obj) {
//         if (obj[item] === 1) {
//             result.push(item)
//         }
//     }
//     return result.shift();
// }
//
// const str = 'abcdabc'
// const main = findStr(str);
// console.log(main);

// let outArg = Array.prototype.slice(arguments);
// return function(){
//     let intArg = Array.prototype.slice(arguments);
//     let len = intArg.length;
//     let args = [...intArg,...outArg];
//     if(outArg.length===args.length){
//         return args.reduce((a,b)=>{
//             return a+b
//         })
//     }else{
//         addNum(args)
//     }
// }


// var a = sum();
let add = ()=>{
    let args = [];
    let a = 1;
    return function(){
        if(arguments.length){
            args = args.concat([].slice.call(arguments));
            console.log(args);
            return arguments.callee
        }else{
            args.forEach(item => {
                a = a* item;
            })
        }
    }
}


add(2)(3)(4)(5)
console.log(data)
