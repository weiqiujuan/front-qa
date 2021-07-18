import axios from 'axios';
// 定义相关的 endpoint
const endPoints = {
	test: "https://test.mockapi.io/",
	prod: "https://prod.myapi.io/",
	pre: "https://pre.myapi.io/"
};

const instance = axios.create({
	baseURL: endPoints["test"],// 根据当前环境确定
	timeout: 3000,
	headers: {Authorization: "Bear mytoken"} // 为所有请求设置头部信息
})
// 定义拦截器预处理所有请求
instance.interceptors.response.use(res => {
	return res
}, error => {
	if (error.response.status === 403) {
		// 统一处理未授权请求，跳转到登录界面
		document.location = '/login';
	}
	return Promise.reject(error);
})

export default instance;
