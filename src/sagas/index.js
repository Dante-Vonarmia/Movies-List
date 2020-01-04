import fetchMoviesListener from './fetchMovies';
import { fork, all } from 'redux-saga/effects';

function* rootSaga() {
	yield all([fork(fetchMoviesListener)]);
}

export default rootSaga;
