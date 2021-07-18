// [3, 5, 7, 2, 1, 8, 9, 0, 5, 23, 15, 5, 1, 5, 8]
const array = [3, 5, 7, 2, 1, 8, 9, 0, 5, 23, 15, 5, 1, 5, 8];

function splice(){
	var _arr=[3,5,7,2, 1, 8, 9, 0, 5, 23, 15, 5, 1, 5, 8];
	for(var i=0;i<_arr.length;i++){
		for(var n=i+1;n<_arr.length;n++){
			if(_arr[i]===_arr[n]){
				_arr.splice(n--,1);//因为元素数量减少了，如果向前挪动一个下标3个以上的连续重复的元素会有遗漏
			}
		}
	}
	console.log(_arr);
}
splice();

const res = Array.from(new Set(array))
console.log(res)
