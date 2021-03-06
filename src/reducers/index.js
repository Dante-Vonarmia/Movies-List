import { combineReducers } from 'redux'

import * as movies from './moviesList';
import pagination from './pagination';
import sortBy from './sort';
import markAs from './markAs';

export default combineReducers({
	...movies,
	pagination,
	sortBy,
	markAs
})