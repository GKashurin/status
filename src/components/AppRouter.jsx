import React from 'react';
import {Route, Switch} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const LazyPosts = React.lazy(() => import('../pages/Posts'))
const LazyAbout = React.lazy(() => import('../pages/About'))

const AppRouter = () => {
	return (
		<Switch>
			<Route path="/about">
				<LazyAbout />
			</Route>
			<Route exact path="/posts">
				<LazyPosts />
			</Route>
			<Route exact path="/posts/:id">
				<PostIdPage />
			</Route>

			<Route path="/error">
				<Error />
			</Route>
			{/* <Redirect to="/error"/> */}
		</Switch>
	);
};

export default AppRouter;