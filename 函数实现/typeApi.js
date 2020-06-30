let classType = {}
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function (item, index) {
    classType["[object " + item + "]"] = item.toLowerCase();
})
console.log(classType)
const typeApi = (obj) => {
    if (obj === null) {
        return obj + ''
    }
    return typeof obj === "object" || typeof obj === "function"
        ? classType[Object.prototype.toString.call(obj)] || "object"
        : typeof obj;
}
console.log(typeApi(undefined))

//isFunction
const isFunction = (obj) => {
    return typeApi(obj) === "function"
}
console.log(isFunction(function () {}))

//isArray
const isArray = Array.isArray || function (obj) {
    return type(obj) === "array";
};
console.log(isArray([1,2,3,4]))