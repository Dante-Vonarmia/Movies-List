import React from 'react'

import Movie from './Movie'

const MoviesList = React.memo(({ movies, hangleOpenModal, handleMarkAsLiked, handleMarkAsBlocked, blockedList }) => 
		movies.filter(movie => blockedList.indexOf(movie) === -1).map( movie => (
			<div key = {movie.id}>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<button onClick={ () => handleMarkAsLiked(movie) }>like</button>
					&nbsp;
					<button onClick={ () => handleMarkAsBlocked(movie) }>blocked</button>
				</div>
				<br />
				<Movie 
					id              = {movie.id}
					poster_path     = {movie.poster_path}
					title           = {movie.title}
					popularity      = {movie.popularity}
					vote_count      = {movie.vote_count}
					overview        = {movie.overview}
					hangleOpenModal = {hangleOpenModal}
				/>
			</div>
		)
	)
)

export default MoviesList;
