let log = console.log.bind(console)

/* 大小写替换 */
function transStringLowerUpper(str) {
    return str.split('').map((item) => {
        return item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
    }).join('')
}

log(transStringLowerUpper('AbC'))

/* 驼峰式转换成下划线式 */
function humpToUnderline(str) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase()
}

log(humpToUnderline('humpToUnderline'))

/* 下划线式转换成驼峰式 */
function underlineToHump(str) {
    //当匹配执行后，回调函数就会执行，返回值作为替换字符串
    // 该函数的第一个参数为匹配到的整个字符
    return str.replace(/\_(\w)/g, function (all, letter) {
        return letter.toUpperCase();
    });
}

log(underlineToHump('underline_to_hump'))