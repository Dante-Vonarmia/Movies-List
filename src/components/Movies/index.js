import React, { useEffect, useState, useCallback } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetchDefaultMovies, fetchMovieDetails } from "../../actions/fetchMovies"

import Sort from '../Sort'
import Pagination from '../Pagination'
import MoviesList from './MoviesList'
import MovieModal from './MovieModal';

const Movies = props => {
	const {
		movies,
		fetchDefaultMovies,
		movieDetails,
		movieDetailsLoading,
		movieDetailsError,
		moviesloading,
		fetchMovieDetails,
	} = props;

	const [isModalOpen, toggleModal] = useState(false);

	useEffect(() => {
		fetchDefaultMovies();
	}, [fetchDefaultMovies]);

	const hangleOpenModal = useCallback(
		id => {
			fetchMovieDetails(id);
			toggleModal(true);
		}, [fetchMovieDetails],
	);

	return !moviesloading ? (
		<div>
			<Sort />
			<hr />
			<Pagination />
			<hr />
			<MoviesList 
				movies={movies}
            	hangleOpenModal={hangleOpenModal} />
			<hr />
			<Pagination />
			<MovieModal
				isModalOpen={isModalOpen}
				toggleModal={toggleModal}
				details={movieDetails}
				loading={movieDetailsLoading}
				error={movieDetailsError}
			/>
		</div>
	) : (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: "100vh"}}>LOADING...</div>
	)
}

const mapStateToProps = state => ({
	movies              : state.movies.results,
	moviesloading       : state.movies.loading,
	movieDetails        : state.movieDetails.details,
	movieDetailsLoading : state.movieDetails.loading,
	movieDetailsError   : state.movieDetails.error,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		fetchDefaultMovies,
		fetchMovieDetails
	}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Movies);