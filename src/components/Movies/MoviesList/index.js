import React from 'react'
import Movie from './Movie'

const MoviesList = props => props.movies.map( movie =>(
		<div key = {movie.id}>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<button onClick={()=>alert('Under Construction')}>like</button>
				<button onClick={()=>alert('Under Construction')}>block</button>
			</div>
			<Movie 
				id              = {movie.id}
				poster_path     = {movie.poster_path}
				title           = {movie.title}
				popularity      = {movie.popularity}
				vote_count      = {movie.vote_count}
				overview        = {movie.overview}
				hangleOpenModal = {props.hangleOpenModal}
			/>
		</div>
	))

export default MoviesList