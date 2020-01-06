import * as types from '../helpers/types'

const markAsInitialState = {
	likedList: [],
	blockedList: []

};

export default function markedList (state = markAsInitialState, action) {
	switch (action.type) {
		// case types.MARK_FETCH_MARKED:
		// 	return {
		// 		...state
		// 	}
			
		case types.MARK_LIKED:
			return state.likedList.indexOf(action.payload) > -1 ? {...state} : { ...state,
				likedList: [...state.likedList, action.payload],
				blockedList: [...state.blockedList.filter(blocked => blocked !== action.payload)]
			}
			
		case types.MARK_BLOCKED:
			return state.blockedList.indexOf(action.payload) > -1 ? {...state} : { ...state,
				likedList: [...state.likedList.filter(liked => liked !== action.payload)],
				blockedList: [...state.blockedList, action.payload]
			};
		case types.MARK_UNDO_LIKED:
			return {
				...state,
				likedList: [...state.likedList.filter(liked => liked !== action.payload)],

			}
		case types.MARK_UNDO_BLOCKED:
			return {
				...state,
				blockedList: [...state.blockedList.filter(blocked => blocked !== action.payload)]
			}
		default:
			return state;
	}
}