import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {// коллбек возвращает рез-т каких-то вычислений, в массив зависимости.
// хук производит вычисления, запоминает и кэширует рез-т вычислений. Пересчитывает она только при изменении компонента из массива
		console.log("отработала ф-ция getSortedPosts")
		if(sort) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
		} // изначально filter.sort - falsy значение. Если в нем что-то есть, возвращаем отсортированный массив постов. Если нет, то возвращаем первоначальный массив posts
		return posts

	},[sort, posts])
	return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
	const sortedPosts = useSortedPosts(posts, sort)
	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	},[query, sortedPosts])
	return sortedAndSearchedPosts
}