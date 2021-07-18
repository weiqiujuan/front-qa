// 根据窗口大小变化重新布局
// 在页面滚动时，需要根据滚动条位置，来决定是否显示一个返回顶部的按钮。

import {useState, useEffect} from "react";

const getPosition = (document) => {
	return {
		x: document.body.scrollLeft,
		y: document.body.scrollTop
	}
}
const useScroll = () => {
	// 定一个position的state保存滚动条位置
	const {position, setPosition} = useState(getPosition(document))
	useEffect(() => {
		const handler = () => {
			setPosition(getPosition(document))
		}
		// 监听scroll事件，更新滚动条位置
		window.addEventListener('scroll', handler)
		return () => {
			// 组件销毁时，取消事件监听
			document.removeEventListener("scroll", handler);
		};
	},[])
	return position;
}
