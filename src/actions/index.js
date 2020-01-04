import * as fetchMovies from './fetchMovies'
import * as sortBy from './sort'
import * as pagination from './pagination'

export default {
	...fetchMovies,
	...sortBy,
	...pagination
};