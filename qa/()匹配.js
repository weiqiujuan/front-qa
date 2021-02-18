function validateText(str) {
    let stack = [];
    let textLength = str.length; // 取出文本长度
    for (let i = 0; i < textLength; i++) {
        if (!!stack.length && (stack[stack.length - 1] == "(" && str[i] == ")")) {
            stack.pop();
        } else if (str[i] == "(" || str[i] == ")") {
            stack.push(str[i]);
        }
    }
    return !stack.length;
}

console.log(validateText('(((('))
