import React, { useState, useCallback } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetchMovieDetails } from "../../actions/fetchMovies"
import { undoMarkAsLiked, markAsBlocked } from '../../actions/markAs'
import MovieModal from '../Movies/MovieModal';
import MarkedList from './MarkedList'

const Liked = props => {
	const {
		movies,
		undoMarkAsLiked,
		markAsBlocked,
		movieDetails,
		movieDetailsLoading,
		movieDetailsError,
		fetchMovieDetails,
	} = props;

	const [isModalOpen, toggleModal] = useState(false);

	const hangleOpenModal = useCallback(
		id => {
			fetchMovieDetails(id);
			toggleModal(true);
		}, [fetchMovieDetails],
	);

	return (
		<div>
			<MarkedList 
				movies           = {movies}
				hangleOpenModal  = {hangleOpenModal}
				undoMarkAs       = {undoMarkAsLiked}
				handleSwitchList = {markAsBlocked} />
				
			<MovieModal
				isModalOpen      = {isModalOpen}
				toggleModal      = {toggleModal}
				details          = {movieDetails}
				loading          = {movieDetailsLoading}
				error            = {movieDetailsError} />
		</div>
	)
}

const mapStateToProps = state => ({
	movies              : state.markAs.likedList,
	movieDetails        : state.movieDetails.details,
	movieDetailsLoading : state.movieDetails.loading,
	movieDetailsError   : state.movieDetails.error,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		fetchMovieDetails,
		undoMarkAsLiked,
		markAsBlocked
	}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Liked)