import * as types from '../helpers/types'

const dbInitialState = {
	db : [],
};

export const localMoviesDB = (state = dbInitialState, action) => {
	switch (action.type) {
		case types.LOCAL_MOVIES_DB:
			return {
				...state,
				db: [...state.db, ...state.db.filter(cached => cached !== action.payload)]
			};
		default:
			return state;
	}
};