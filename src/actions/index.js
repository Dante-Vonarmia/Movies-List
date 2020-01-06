import * as fetchMovies from './fetchMovies'
import * as sortBy from './sort'
import * as pagination from './pagination'
import * as markAs from './markAs'

export default {
	...fetchMovies,
	...sortBy,
	...pagination,
	...markAs
};