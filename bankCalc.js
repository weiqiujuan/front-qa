function bankCalc(num,pos){
	num = leftMove(num,pos)
	let incI =  num>0?1:-1 // 进位值
	num = "" + num
	let start = num.indexOf(".")
	// 相关校验
	if (start === -1) {
		return rightMove(num,pos);
	}
	let tmpPos = start + 1
	if (tmpPos > num.length) {
		return rightMove(num,pos);
	}

	let posNum = ~~num[tmpPos]
	if ( posNum !== 5) {
		if (posNum > 5) {
			return rightMove(trunc(num) + incI,pos)
		} else {
			return rightMove(trunc(num),pos)
		}
	}

	// 查看后面的值是不是大于0，前面的算法保证了如果后面是0是不会显示的
	if(tmpPos + 1 < num.length) {
		return rightMove(trunc(num) + incI,pos)
	}
	// 校验奇偶
	if(num[tmpPos-2]%2===0) {
		return rightMove(trunc(num),pos)
	} else {
		return rightMove(trunc(num) + incI,pos)
	}
}
function leftMove(num,pos){
	return num * Math.pow(10,pos)
}
function rightMove(num,pos){
	return (num / Math.pow(10,pos)).toFixed(pos)
}
function trunc(num){
	if (num > 0) {
		return Math.floor(num)
	} else {
		return Math.ceil(num)
	}
}

console.log(bankCalc(0.005, 2))
