import * as types from '../helpers/types';

const initialState = {
	pages: 0,
	currentPage: 0,
};

export default function pagination(state = initialState, action) {
	switch (action.type) {
		case types.SET_PAGE_COUNT:
			return {
				...state,
				pages: action.payload,
			};

		case types.CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};

		case types.CHANGE_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};

		default:
			return state;
	}
}
