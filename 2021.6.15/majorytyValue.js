const majorityElement = (nums) => {
	let candidate;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (count === 0) {
			candidate = nums[i];
			count++;
		} else {
			if (candidate !== nums[i]) count--;
			else count++;
		}
	}

	return candidate;
}
const arr = [2,3,4,5,4,3,2,1,2,3,4,,3]
const main = majorityElement(arr)
console.log(main)
