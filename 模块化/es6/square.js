console.log('square 加载')

import {multiply} from "./multiply.js";

const square = function (num) {
    return multiply(num,num)
}
export {square}