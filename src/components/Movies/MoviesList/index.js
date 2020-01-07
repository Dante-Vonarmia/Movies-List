import React from 'react'

import Movie from './Movie'

const MoviesList = React.memo(({ movies, hangleOpenModal, handleMarkAsLiked, handleMarkAsBlocked }) => 
		movies.map( movie => (
			<div key = {movie.id}>
				<Movie 
					id                  = {movie.id}
					movie               = {movie}
					poster_path         = {movie.poster_path}
					title               = {movie.title}
					popularity          = {movie.popularity}
					vote_count          = {movie.vote_count}
					overview            = {movie.overview}
					handleMarkAsLiked   = {handleMarkAsLiked}
					handleMarkAsBlocked = {handleMarkAsBlocked}
					hangleOpenModal     = {hangleOpenModal} />
			</div>
		)
	)
)

export default MoviesList;
