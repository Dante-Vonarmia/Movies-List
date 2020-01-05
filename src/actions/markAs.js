import * as types from '../helpers/types'

export const fetchMarked = () => ({
	type: types.MARK_FETCH_MARKED,
})

export const markAsLiked = movie => ({
	type: types.MARK_LIKED,
	payload: movie,
});

export const markAsBlocked = movie => ({
	type: types.MARK_BLOCKED,
	payload: movie,
});