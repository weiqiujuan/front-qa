// 求两个日期中间的有效日期
const dataDiffList = (startTime, endTime) => {
    let _start = new Date(startTime).getTime(),
        _end = new Date(endTime).getTime(),
        oneDay = 24 * 60 * 60 * 1000,
        timeArr = [];
    if (_end - _start < 0) return timeArr;
    for (let i = _start; i < _end; i += oneDay) {
        timeArr.push(i)
    }
    return timeArr.map(item => {
        let date = new Date(item);
        let year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();
        return `${year}-${month}-${day}`
    })
}
console.log(dataDiffList("2020-8-8", "2020-8-13"))