import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from '../Home'
import Movies from '../Movies'
import Liked from '../Marked/liked'
import Blocked from '../Marked/blocked'

const routes = [
	{
		path: "/",
		exact: true,
		main: () => <Home />
	},
	{
		path: "/movies",
		main: () => <Movies />
	},
	{
		path: "/liked",
		main: () => <Liked />
	},
	{
		path: "/blocked",
		main: () => <Blocked />
	}
];

export default function sideBar() {
	return (
		<Router>
			<div style={{ }}>
				<header style={{ padding: "1vw", width: "100vw", background: "#f0f0f0" }}>
					<ul style={{ display: "flex", justifyContent: "space-around", }}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/movies">Movies - Lists</Link>
						</li>
						<li>
							<Link to="/liked">Liked - Lists</Link>
						</li>
						<li>
							<Link to="/blocked">Blocked - Lists</Link>
						</li>
					</ul>
				</header>

				<main style={{ padding: "1vw", width: "100vw", height: "100vh" }}>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.main}
							/>
						))}
					</Switch>
				</main>
			</div>
		</Router>
	);
}
