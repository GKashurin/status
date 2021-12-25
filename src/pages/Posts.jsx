import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

const Posts = () => {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10)
	const [page, setPage] = useState(1)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data)
		const totalCount = (response.headers['x-total-count'])
		setTotalPages(getPagesCount(totalCount, limit))
	})

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id))
	}

	useEffect(() => {
		fetchPosts()
	},[page])

	const changePage = page => {
		setPage(page)
	}

	return (
		<BrowserRouter>
			<div className="App">
				<Button style={{marginTop: 30}} onClick={() => setModal(true)}>Создать пользователя</Button>
				<Modal visible={modal}
					   setVisible={setModal}>
					<PostForm create={createPost}/>
				</Modal>
				<hr style={{margin: "15px 0"}}/>
				<PostFilter filter={filter} setFilter={setFilter}/>
				{postError &&
				<h1>Произошла ошибка ${postError}</h1>}
				{isPostsLoading ?
					<div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div> :
					<PostList
						posts={sortedAndSearchedPosts}
						title="Список постов"
						remove={removePost}
					/>
				}
				<Pagination
					page={page}
					changePage={changePage}
					totalPages={totalPages}
				/>
			</div>
		</BrowserRouter>
	);
}

export default Posts;

