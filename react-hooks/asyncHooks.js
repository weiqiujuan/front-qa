import React, {useCallback, useState} from "react";

export const useAsync = (asyncHandle) => {
	// 设置三个异步逻辑相关的state
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	// 定义一个callback 用于执行异步逻辑
	const execute = useCallback(() => {
		// 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
		setLoading(true);
		setData(null);
		setError(null);
		return asyncHandle().then(res => {
			// 请求成功，塞数据进去
			setData(res)
			setLoading(false)
		}).catch(error => {
			// 请求失败，设置错误状态
			setError(error);
			setLoading(false);
		})
	}, [asyncHandle])

	return {execute, loading, data, error}
}

export function UserList() {
	const {execute: fetchUsers, data: users, loading, error} = useAsync(async () => {
		const res = await fetch('https://reqres.in/api/users/')
		const json = await res.json();
		return json.data
	})
	return (
		<div>
			<button onClick={() => fetchUsers()}/>
		</div>)
}

// export default function UserList() {
// 	const [users, setUsers] = React.useState([])
// 	const [loading, setLoading] = React.useState(false)
// 	const [error, setError] = React.useState(null)
//
// 	const fetchUsers = async () => {
// 		setLoading(true)
// 		try {
// 			const res = await fetch('https://reqres.in/api/users/')
// 			const json = await res.json();
// 			setUsers(json.data)
// 		} catch (err) {
// 			setError(err)
// 		}
// 		setLoading(false)
// 	}
// 	return (
// 		<div>
// 			<button onClick={() => fetchUsers()}/>
// 		</div>)
// }
