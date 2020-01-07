import React from 'react'

const Movie = React.memo(({ id, movie, poster_path, title, popularity, vote_count, overview, hangleOpenModal, handleMarkAsLiked, handleMarkAsBlocked }) => {
	const posterUrl = poster_path ?
		`https://image.tmdb.org/t/p/w200/${poster_path}` :
		'https://image.tmdb.org/t/p/w200/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg';

	return (

		<div key={id} style={{textAlign: 'center'}}>
			<div style={{display: 'flex', justifyContent: 'center'}}>
				<button onClick={ (event) => {event.target.innerHTML = 'Liked'; return handleMarkAsLiked(movie)} }>Like</button>
				&nbsp;
				<button onClick={ (event) => {event.target.innerHTML = 'Liked'; return handleMarkAsBlocked(movie)} }>block</button>
			</div>
			<br />
			<img src={posterUrl} alt={title} onClick={() => hangleOpenModal(id)} />
			<p>Title: {title}</p>
			<p>Popularity: {popularity}</p>
			<p>Vote count: {vote_count}</p>
			<p>Overview: {overview}</p>
		</div>
	)

})
export default Movie