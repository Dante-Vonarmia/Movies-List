import React, { useState, useCallback } from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetchMovieDetails } from "../../actions/fetchMovies"
import { undoMarkAsBlocked, markAsLiked } from '../../actions/markAs'
import MovieModal from '../Movies/MovieModal';
import MarkedList from './MarkedList'

const Blocked = props => {

	const {
		movies,
		undoMarkAsBlocked,
		movieDetails,
		movieDetailsLoading,
		movieDetailsError,
		fetchMovieDetails,
		markAsLiked
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
				undoMarkAs       = {undoMarkAsBlocked}
				handleSwitchList = {markAsLiked} />
				
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
	movies              : state.markAs.blockedList,
	movieDetails        : state.movieDetails.details,
	movieDetailsLoading : state.movieDetails.loading,
	movieDetailsError   : state.movieDetails.error,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		fetchMovieDetails,
		undoMarkAsBlocked,
		markAsLiked
	}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Blocked)