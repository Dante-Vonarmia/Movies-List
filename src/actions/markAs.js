import * as types from '../helpers/types'

export const fetchMarkedList    = () => ({
	type    : types.FETCH_MARKED_LIST
});

export const markAsLiked        = movie => ({
	type    : types.MARK_LIKED,
	payload : movie,
});

export const markAsBlocked      = movie => ({
	type    : types.MARK_BLOCKED,
	payload : movie,
});

export const undoMarkAsLiked    = movie => ({
	type    : types.MARK_UNDO_LIKED,
	payload : movie,
});

export const undoMarkAsBlocked  = movie => ({
	type    : types.MARK_UNDO_BLOCKED,
	payload : movie,
});