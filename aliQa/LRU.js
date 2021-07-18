class LRUCache {
	constructor(maxLimit) {
		this.cache = {};
		this.maxLimit = maxLimit
		this.mark = []
	}

	get(key) {
		if (this.cache[key]) {
			this.update(key)
			return this.cache[key]
		} else {
			return -1;
		}
	}

	update(key) {
		let index = this.mark.indexOf(key);
		if (index !== -1) {
			this.mark.splice(index, 1);
		}
		this.mark.push(key);
	}

	put(key, value) {
		if (this.cache[key]) {
			this.cache[key] = value// 若存在即更新
			this.update(key);
			return;
		}
		if (Object.keys(this.cache).length < this.maxLimit) {
			this.update(key);
			this.cache[key] = value
		} else {
			delete this.cache[this.mark[0]];
			this.mark.shift();
			this.cache[key] = value;
			this.mark.push(key);
		}
	}
}
