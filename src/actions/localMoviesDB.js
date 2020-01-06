import * as types from '../helpers/types'

export const LocalMoviesDB = data => ({
	type    : types.LOCAL_MOVIES_DB,
	payload : data,
});