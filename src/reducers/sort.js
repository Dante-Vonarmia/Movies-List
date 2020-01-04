import * as types from '../helpers/types';

const initialState = {
	title: '',
	voteCount: '',
	averageScore: '',
	releaseDate: ''
};

export default function sortBy(state = initialState, action) {
	switch (action.type) {
		case types.BY_TITLE:
			return {
				...state,
				title: !action.payload,
				voteCount: '',
				averageScore: '',
				releaseDate: ''
			};
		case types.BY_VOTECOUNT:
			return {
				...state,
				title: '',
				voteCount: !action.payload,
				averageScore: '',
				releaseDate: ''
			};
		case types.BY_AVERAGESCORE:
			return {
				...state,
				title: '',
				voteCount: '',
				averageScore: !action.payload,
				releaseDate: ''
			};
		case types.BY_RELEASEDATE:
			return {
				...state,
				title: '',
				voteCount: '',
				averageScore: '',
				releaseDate: !action.payload
			};

		case types.BY_DEFAULT:
			return {
				...state,
				title: '',
				voteCount: '',
				averageScore: '',
				releaseDate: ''
			};


		default:
			return state;
	}
}
