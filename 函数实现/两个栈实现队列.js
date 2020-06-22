/* 思路，将两个栈嵌套，首先给内部的栈push进value,
*  之后对内部的栈pop,到外部的栈，
* 最后将外部的栈pop*/

let CQueue = function () {
    this.outStack = [];
    this.inStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    let {outStack, inStack} = this;
    if (!outStack.length) {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop() || -1;
};