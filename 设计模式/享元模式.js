class ObjectPool {
	constructor() {
		this._pool = []
	}

	create(Obj) {
		return this._pool.length === 0 ? new Obj(this) : this._pool.shift()
	}

	recover(obj) {
		return this._pool.push(obj)
	}

	size() {
		return this._pool.length
	}
}

class File {
	constructor(pool) {
		this.pool = pool
	}

	downFile() {
		console.log(`从${this.src}开始下载${this.name}`)
		setTimeout(() => {
			console.log(`${this.name}下载完毕`)
			this.pool.recover(this)
		}, 1000)
	}
}

let objPool = new ObjectPool()
let file1 = objPool.create(File)
file1.name = '文件1'
file1.src = 'https://download1.com'
file1.downFile();

let file2 = objPool.create(File);
file2.name = "文件2";
file2.src = "https://download2.com";
file2.downFile();

setTimeout(() => {
	let file3 = objPool.create(File);
	file3.name = "文件3";
	file3.src = "https://download3.com";
	file3.downFile();
}, 200);

setTimeout(
	() =>
		console.log(
			`${"*".repeat(50)}\n下载了3个文件，但其实只创建了${objPool.size()}个对象`
		),
	1000
);
