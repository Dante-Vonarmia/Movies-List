import * as fetchMovies from './fetchMovies'
import * as sortBy from './sort'
import * as pagination from './pagination'
import * as markAs from './markAs'
import * as localMoviesDB from './localMoviesDB'

export default {
	...fetchMovies,
	...sortBy,
	...pagination,
	...localMoviesDB,
	...markAs
};