import { put, takeLatest, all } from "redux-saga/effects";

import actions from "../actions";
import * as types from '../helpers/types'

function* fetchMarkedAsLiked ( {payload: movie} ) {
	try {
		yield put(actions.markAsLiked(movie))
	} catch(e) {
		console.log(e);
		return;
	}
}

function* fetchMarkedAsBlocked ( {payload: movie} ) {
	try {
		yield put(actions.markAsBlocked(movie))
	} catch(e) {
		console.log(e);
		return;
	}
}

export default function* markAsListener() {
	yield all([
		takeLatest(types.MARK_FETCH_MARKED, fetchMarkedAsLiked),
		takeLatest(types.MARK_FETCH_MARKED, fetchMarkedAsBlocked),
	]);
}