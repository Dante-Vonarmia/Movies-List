import React from 'react'
import { connect } from "react-redux"


const Liked = props => props.movies.length < 1 ? (
		<div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
			<a href='movies'>Go Movies - List </a>.
		</div>
	) : (props.movies.map( movie => (
		<div key={movie.id} style={{textAlign: 'center'}}>
			<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
			<p>Title: {movie.title}</p>
			<p>Popularity: {movie.popularity}</p>
			<p>Vote count: {movie.vote_count}</p>
			<p>Overview: {movie.overview}</p>
		</div>)
	)
)

const mapStateToProps = state => ({
	movies : state.markAs.likedList
})

// const mapDispatchToProps = {
	
// }

export default connect(mapStateToProps)(Liked)