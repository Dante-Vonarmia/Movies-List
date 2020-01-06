import * as types from '../helpers/types'

export const fetchMovies = () => ({
	type    : types.FETCH_MOVIES,
});

export const LocalMoviesDB = data => ({
	type    : types.LOCAL_MOVIES_DB,
	payload : data,
});

export const fetchMoviesSuccess = movies => ({
	type    : types.FETCH_MOVIES_SUCCESS,
	payload : movies,
});

export const fetchMoviesFailure = error => ({
	type    : types.FETCH_MOVIES_FAILURE,
	payload : error,
});

export const fetchDefaultMovies = () => ({
	type    : types.FETCH_DEFAULT_MOVIES,
});

export const fetchMovieDetails = id => ({
	type    : types.FETCH_MOVIE_DETAILS,
	payload : id,
});

export const fetchMovieDetailsSuccess = details => ({
	type    : types.FETCH_MOVIE_DETAILS_SUCCESS,
	payload : details,
});

export const fetchMovieDetailsFailure = error => ({
	type    : types.FETCH_MOVIE_DETAILS_FAILURE,
	payload : error,
});