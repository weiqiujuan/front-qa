// 获取文章列表，文章分类，并将文章列表返回的数据分类 ID 映射到分类的名字

import React, {useEffect, useCallback, useMemo, useState} from "react";
import _ from 'lodash'
import useAsync from './asyncHooks'

const endpoint = "https://myserver.com/api/";
const useArticles = () => {
	// 获取文章列表
	const {execute, data, loading, error} = useAsync(
		useCallback(async () => {
			const res = await fetch(`${endpoint}/posts`);
			return await res.json();
		}, [])
	)
	useEffect(() => execute(), [execute])
	// 返回语义化的数据结构
	return {articles: data, articlesLoading: loading, articlesError: error,};
}
const useCategories = () => {
	// 使用上面创建的 useAsync 获取分类列表
	const {execute, data, loading, error} = useAsync(useCallback(async () => {
		const res = await fetch(`${endpoint}/categories`);
		return await res.json();
	}, []),);
	// 执行异步调用
	useEffect(() => execute(), [execute]);
	// 返回语义化的数据结构
	return {categories: data, categoriesLoading: loading, categoriesError: error,};
};

const useCombinedArticles = (articles, categories) => {
	return useMemo(() => {
		if (!articles || !categories) return null;
		return articles.map(item => {
			return {
				...item,
				category: categories.find(c => {
					String(c.id) === String(item.categoryId)
				})
			}
		})
	}, [articles, categories])
}

const useFilteredArticles = (articles, selectedCategory) => {
	// 实现按照分类过滤
	return useMemo(() => {
		if (!articles) return null;
		if (!selectedCategory) return articles;
		return articles.filter((article) => {
			return String(article?.category?.name) === String(selectedCategory);
		});
	}, [articles, selectedCategory]);
}
export default function BlogList() {
	const [selectedCategory, setSelectedCategory] = useState(null);
	// 获取文章列表
	const { articles, articlesError } = useArticles();
	// 获取分类列表
	const { categories, categoriesError } = useCategories();
	// 组合数据
	const combined = useCombinedArticles(articles, categories);
	// 实现过滤
	const result = useFilteredArticles(combined, selectedCategory);
	return (
		<div>
			{/*test*/}
			<Select option={result}/>
		</div>
	)
}
