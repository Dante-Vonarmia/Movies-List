/*
	Step 2 - 1: Router Setup: <Router /> <Switch />

	Step 2 - 2: Sidebar Setup
 */


import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from '../Home'
import Movies from '../Movies'

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


function Liked() {
	return (
		<div>
			<h2>Liked - Lists</h2>
		</div>
	);
}

function Blocked() {
	return (
		<div>
			<h2>Blocked - Lists</h2>
		</div>
	);
}