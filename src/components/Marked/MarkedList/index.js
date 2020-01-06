import React from 'react'

const MarkedList = React.memo( ({movies, hangleOpenModal, undoMarkAs, handleSwitchList}) =>
	 movies.length < 1 ? (
		<div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
			<a href='movies'>Go Movies - List</a>.
		</div>
	) : ( movies.map( movie => (
		<div key={movie.id} style={{textAlign: 'center'}}>
			<div>
				<img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
				<div>
					<button onClick={()=>undoMarkAs(movie)}>Undo</button>
					<button onClick={()=>handleSwitchList(movie)}>Switch</button>
					<button onClick={()=>hangleOpenModal(movie.id)}>See Detail</button>
				</div>
				<p>Title: {movie.title}</p>
				<p>Popularity: {movie.popularity}</p>
				<p>Vote count: {movie.vote_count}</p>
				<p>Overview: {movie.overview}</p>
			</div>
		</div>
	)))
)
export default MarkedList