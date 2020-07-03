function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
    return {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = {value: nextIndex, done: false}
                nextIndex += step;
                iterationCount++
                return result
            }
            return {value: iterationCount, done: true}
        }
    };
}

let it = makeRangeIterator(10, 100, 5)
let result = it.next()
while (!result.done){
    console.log(result.value)
    result = it.next()
}