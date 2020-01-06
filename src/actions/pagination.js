import * as types from '../helpers/types';

export const setPageCount = count => ({
	type    : types.SET_PAGE_COUNT,
	payload : count,
});

export const currentPage = page => ({
	type    : types.CURRENT_PAGE,
	payload : page,
});

export const changePage = turnPage => ({
	type    : types.CHANGE_PAGE,
	payload : turnPage,
});