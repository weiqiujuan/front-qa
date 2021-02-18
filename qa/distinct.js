/**
 * 两个对象集合合并去重的方法
 *
 * list1: [{name:1,age:1},{name:2,age:2}]
 * list2: [{name:3,age:3},{name:2,age:4}]
 * distinct(list1,list2,'name') ====> [{name:1,age:1},{name:2,age:2},{name:3,age:3}]
 * distinct(list2,list1,'name') ====> [{name:3,age:3},{name:2,age:4},{name:1,age:1}]
 * distinct(list1,list2,'age') ====> [{name:1,age:1},{name:2,age:2},{name:3,age:3},{name:2,age:4}]
 * distinct(list2,list1,'age') ====> [{name:3,age:3},{name:2,age:4},{name:1,age:1},{name:2,age:2}]
 *
 * @param list1 原始集合,需要保留该集合的所有元素
 * @param list2 新集合,如果发现指定param在list1中 '不' 存在, 则添加进入list1中
 * @param param 指定相同对象的参数
 * @returns {*}
 */
function distinct(list1, list2, param) {
	if (list1.length > 0 && list2.length > 0) {
		list2.forEach(l1 => {
			if (list1.every((l2) => l1[param] !== l2[param])) {
				list1 = list1.concat([l1]);
			}
		})
		return list1;
	} else {
		return list1.concat(list2)
	}
}

const list1 = [{name: 1, age: 1}, {name: 2, age: 2}];
const list2 = [{name: 3, age: 3}, {name: 2, age: 4, sex: 1}]
const main = distinct(list1, list2, 'sex')
console.log(main)


