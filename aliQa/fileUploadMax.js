// 1. 设计一个上传文件功能，可以最多3个文件并行上传，其中一个上传完成接着上传下个文件，直到上传完所有文件；（建议20分钟）
//      要求：（1）使用面向对象方式实现（2）设计的这个上传功能比较通用
class FileUpload {
	constructor(maxCount, maxSize, url) {
		this.maxLimit = maxCount;
		this.maxSize = maxSize;
		this.actionUrl = url
		this.statusCode = {
			0: 'success',
			1: 'filed',
		}
	}

	beforeUpload(files) {
		let isError = {
			options: false,
			msg: '',
		}
		if (files.length > this.maxLimit) {
			return {
				options: true,
				msg: '上传文件数超过最大文件数'
			}
		}
		for (let i = 0; i < files.length; i++) {
			if (files[i].size > this.maxSize) {
				isError = {
					options: true,
					msg: `${files[i].name}文件过大，请压缩后重新上传`
				}
				break
			}
		}
		return isError

	}

	async uploadFile(files) {
		let fileData = new FormData();
		let fileCount = files.length;
		let filedFileArr = []
		for (let i = 0; i < files.length; i++) {
			fileData.append('file', file[i])
			const res = await fileUploadFun(fileData, this.actionUrl);
			if (res.code === 'filed') {
				filedFileArr.push(files[i].name)
			} else {
				fileCount--;
			}
		}
		return fileCount === 0 ? {code: 0} : {code: 1, filedFileArr}

	}

	afterUpLoad(res) {
		if (res?.code && this.statusCode[res.code] === 'success') {
			return '所选文件全部上传成功'
		} else {
			let files = res.filedFileArr.toString()
			return `${files} 上传失败，请及时查看`
		}
	}
}


const fileUploadFun = (file, url) => {
	let fileXhr = new XMLHttpRequest();
	let uploadInfo = {};
	fileXhr.open('post', url, true)
	fileXhr.onload = (e) => {
		let data = JSON.parse(e.target.responseText);
		if (data.success) {
			uploadInfo = {
				code: 'success',
				msg: `${file.name}上传成功`
			}
		} else {
			uploadInfo = {
				code: 'failed',
				msg: `${file.name}上传失败!`
			}
		}
		return uploadInfo
	}
	fileXhr.onerror = (e) => {
		return {
			code: 'failed',
			msg: `${file.name}上传失败!`
		}
	}
	fileXhr.send(file)
}

// 测试数据
const files = [{size: 60, name: 'teste1'}, {size: 20, name: 'teste3'}, {size: 30, name: 'teste2'}]
const maxCount = 3, maxSize = 40, url = '/api/uploadUrl'

// 实例化
let upLoadFileNew = new FileUpload(maxCount, maxSize, url);
upLoadFileNew.beforeUpload(files)
upLoadFileNew.uploadFile(files).then(res => upLoadFileNew.afterUpLoad(res))
