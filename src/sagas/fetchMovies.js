import { call, put, takeLatest, all, select } from "redux-saga/effects";

import actions from "../actions";
import * as types from '../helpers/types'
import { api } from "../api";


function* requestMovies(apiMethod, args = []) {
	let response;
	try {
		// if ((yield select(state => state.movies.results)).length) {
		// 	console.log('here')
		// 	return;
		// }
		// else 
			yield put(actions.fetchMovies());
		response = yield call(apiMethod, ...args);
	} catch (e) {
		yield put(actions.fetchMoviesFailure('Failed to load!'));
		return;
	}
	
	const { results, page, total_pages: pageCount } = response.data;
	console.log((yield select(state=>state.movies.results)).length)
	yield put(actions.fetchMoviesSuccess(results));
	yield put(actions.setPageCount(pageCount));
	yield put(actions.currentPage(page));
}

function* fetchByChangePage({ payload: turnPage }) {
	const sorted = yield select(state => state.sortBy);
	const { title, voteCount, averageScore, releaseDate } = sorted;
	if (title !== "") {
		yield requestMovies(api.getMoviesByOriginalTitle, [[toggleSort(!title)], turnPage]);
	} else if (voteCount !== "") {
		yield requestMovies(api.getMoviesByVoteCount, [[toggleSort(!voteCount)], turnPage]);
	} else if (averageScore !== "") {
		yield requestMovies(api.getMoviesByVoteAverage, [[toggleSort(!averageScore)], turnPage]);
	} else if (releaseDate !== "") {
		yield requestMovies(api.getMoviesByReleaseDate, [[toggleSort(!releaseDate)], turnPage]);
	} else
		yield requestMovies(api.getDefaultMovies, [turnPage]);
}

function* fetchDefaultMovies() {
	yield requestMovies(api.getDefaultMovies);
}

function* fetchMoviesByOriginalTitle({ payload: title }) {
	yield requestMovies(api.getMoviesByOriginalTitle, toggleSort(title));
}

function* fetchMoviesByVoteCount({ payload: voteCount }) {
	yield requestMovies(api.getMoviesByVoteCount, toggleSort(voteCount));
}

function* fetchMoviesByVoteAverage({ payload: averageScore }) {
	yield requestMovies(api.getMoviesByVoteAverage, toggleSort(averageScore));
}

function* fetchMoviesByReleaseDate({ payload: releaseDate }) {
	yield requestMovies(api.getMoviesByReleaseDate, toggleSort(releaseDate));
}

function* fetchMovieDetails({ payload: id }) {
	let response;
	try {
		response = yield call(api.getMovieDetails, id);
	} catch (e) {
		yield put(actions.fetchMovieDetailsFailure('Failed to load!'));
		return;
	}
	const movieDetails = response.data;
	yield put(actions.fetchMovieDetailsSuccess(movieDetails));
}

function toggleSort(value) {
	if (value) 
		return ["asc"] 
	else
		return ["desc"] 
}

export default function* fetchMoviesListener() {
	yield all([
		takeLatest(types.FETCH_DEFAULT_MOVIES, fetchDefaultMovies),
		takeLatest(types.CHANGE_PAGE, fetchByChangePage),
		takeLatest(types.BY_TITLE, fetchMoviesByOriginalTitle),
		takeLatest(types.BY_VOTECOUNT, fetchMoviesByVoteCount),
		takeLatest(types.BY_AVERAGESCORE, fetchMoviesByVoteAverage),
		takeLatest(types.BY_RELEASEDATE, fetchMoviesByReleaseDate),
		takeLatest(types.BY_DEFAULT, fetchDefaultMovies),
		takeLatest(types.FETCH_MOVIE_DETAILS, fetchMovieDetails),
	]);
}
