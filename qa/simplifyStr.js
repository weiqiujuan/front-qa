function transformStr(str) {
    const arr = str.split(',').map(x => parseInt(x));
    let result = [arr[0], arr[1]], i = 1, isContinuous = false;
    arr.forEach((value, index) => {
        if (index > 1) {
            if (value === result[i] + 1 && result[i] - result[i - 1] === 1) {
                result[i] = value;
                isContinuous = true;
            } else {
                isContinuous = false;
                result.push(value);
                i++;
            }
            if (isContinuous || result[i] - result[i - 1] === 1) result[i] = `~${result[i]}`;
        }
    })
    return result.toString().replace(/,(?=~)/g, '');
}

const str = '1,2,3,5,7,8,10,11';
console.log(transformStr(str))