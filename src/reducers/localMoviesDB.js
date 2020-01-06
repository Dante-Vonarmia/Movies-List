import * as types from '../helpers/types'

const dbInitialState = {
	db : [],
};

export const localMoviesDB = (state = dbInitialState, action) => {
	switch (action.type) {
		case types.LOCAL_MOVIES_DB:
			return {
				...state,
				db: [...state.db, action.payload]
			};
		default:
			return state;
	}
};