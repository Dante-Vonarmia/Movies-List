import React from 'react'

const Movie = React.memo(({ id, poster_path, title, popularity, vote_count, overview, hangleOpenModal }) => {
	const posterUrl = poster_path ?
		`https://image.tmdb.org/t/p/w200/${poster_path}` :
		'https://image.tmdb.org/t/p/w200/xPu5camdNW7ga5QeHGJhiMbQ62B.jpg';

	return (
		<div key={id} style={{textAlign: 'center'}} onClick={() => hangleOpenModal(id)}>
			<img src={posterUrl} alt={title} />
			<p>Title: {title}</p>
			<p>Popularity: {popularity}</p>
			<p>Vote count: {vote_count}</p>
			<p>Overview: {overview}</p>
		</div>
	)

})
export default Movie