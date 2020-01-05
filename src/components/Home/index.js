import React from 'react'

export default class Home extends React.Component {
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh"}}>
            	<img src="https://www.themoviedb.org/assets/2/v4/logos/293x302-powered-by-square-green-3ee4814bb59d8260d51efdd7c124383540fc04ca27d23eaea3a8c87bfa0f388d.png" alt="logo" />
				<h1>Welcome - Simple Movies List</h1>
				<p>By: <a href='movies'>DVA89</a></p>
			</div>
		)
	}
}