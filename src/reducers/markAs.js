import * as types from '../helpers/types'

const markAsInitialState = {
	likedList: [],
	blockedList: []

};

export default function markedList (state = markAsInitialState, action) {
	switch (action.type) {
		case types.MARK_FETCH_MARKED:
			return {
				...state
			}
			
		case types.MARK_LIKED:
			return state.likedList.indexOf(action.payload) > -1 ? {...state} : { ...state,
				likedList: [...state.likedList, action.payload]
			}
			
		case types.MARK_BLOCKED:
			return state.blockedList.indexOf(action.payload) > -1 ? {...state} : { ...state,
				blockedList: [...state.blockedList, action.payload]
			};

		default:
			return state;
	}
}