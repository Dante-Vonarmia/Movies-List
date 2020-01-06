import fetchMoviesListener from './fetchMovies';
// import markAsListener from './markMovies';
import { fork, all } from 'redux-saga/effects';

function* rootSaga() {
	yield all([
		fork(fetchMoviesListener),
		// fork(markAsListener)
	]);
}

export default rootSaga;
