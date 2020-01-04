import * as types from '../helpers/types'

const moviesInitialState = {
	results  : [],
	loading : false,
	error   : null,
};

export const movies = (state = moviesInitialState, action) => {
	switch (action.type) {
		case types.FETCH_MOVIES:
			return {
				...state,
				loading : true
			};

		case types.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				results : action.payload,
				loading : false,
				error   : null
			};

		case types.FETCH_MOVIES_FAILURE:
			return {
				...state,
				error   : action.payload,
				loading : false
			};

		default:
			return state;
	}
};

const movieDetailsinitialState = {
	details: {},
	loading: false,
	error: null,
};

export const movieDetails = (state = movieDetailsinitialState, action) => {
	switch (action.type) {
		case types.FETCH_MOVIE_DETAILS:
			return {
				...state,
				loading: true,
			};

		case types.FETCH_MOVIE_DETAILS_SUCCESS:
			return {
				...state,
				error: null,
				details: action.payload,
				loading: false,
			};

		case types.FETCH_MOVIE_DETAILS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};