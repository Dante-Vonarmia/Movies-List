import axios from 'axios';

const MOVIEDB_API_KEY = process.env.REACT_APP_API_KEY;
const MOVIEDB_BASE_URL = 'https://api.themoviedb.org/3';

const getDefaultMovies = async currentPage =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${currentPage || 1}`,
	);

const getMoviesByOriginalTitle = async (order, currentPage) =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=original_title.${order || 'desc'}&include_adult=false&include_video=false&page=${currentPage || 1}`,
	);

const getMoviesByVoteCount = async (order, currentPage) =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=vote_count.${order || 'desc'}&include_adult=false&include_video=false&page=${currentPage || 1}`,
	);

const getMoviesByVoteAverage = async (order, currentPage) =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=vote_average.${order || 'desc'}&include_adult=false&include_video=false&page=${currentPage || 1}`,
	);

const getMoviesByReleaseDate = async (order, currentPage) =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/discover/movie?api_key=${MOVIEDB_API_KEY}&language=en-US&sort_by=release_date.${order || 'desc'}&include_adult=false&include_video=false&page=${currentPage || 1}`,
	);

const getMovieDetails = async id =>
	await axios.get(
		`${MOVIEDB_BASE_URL}/movie/${id}?api_key=${MOVIEDB_API_KEY}&language=en-US`,
	);

export const api = {
	getDefaultMovies,
	getMoviesByOriginalTitle,
	getMoviesByVoteCount,
	getMoviesByVoteAverage,
	getMoviesByReleaseDate,
	getMovieDetails
};