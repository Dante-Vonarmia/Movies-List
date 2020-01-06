import { combineReducers } from 'redux'

import * as movies from './moviesList';
import * as db from './localMoviesDB';
import pagination from './pagination';
import sortBy from './sort';
import markAs from './markAs';

export default combineReducers({
	...movies,
	...db,
	pagination,
	sortBy,
	markAs
})