import React from 'react'

export default class Home extends React.Component {
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh"}}>
				<h1>Welcome - Simple Movies List</h1>
				<p>By: <a href='movies'>DVA89</a></p>
			</div>
		)
	}
}