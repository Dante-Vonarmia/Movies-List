import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { undoMarkAsBlocked, markAsLiked } from '../../actions/markAs'

const Blocked = props => {

	const {
		movies,
		undoMarkAsBlocked,
		markAsLiked
	} = props;

	return movies.length < 1 ? (
		<div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
			<a href='movies'>Go Movies - List </a>.
		</div>
	) : (movies.map( movie => (
		<div key={movie.id} style={{textAlign: 'center'}}>
			<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
			<div>
				<button onClick={()=>undoMarkAsBlocked(movie)}>Undo Blocked</button>
				<button onClick={()=>markAsLiked(movie)}>Liked</button>
			</div>
			<p>Title: {movie.title}</p>
			<p>Popularity: {movie.popularity}</p>
			<p>Vote count: {movie.vote_count}</p>
			<p>Overview: {movie.overview}</p>
		</div>)
	)
)}

const mapStateToProps = state => ({
	movies : state.markAs.blockedList
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		undoMarkAsBlocked,
		markAsLiked
	}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Blocked)
