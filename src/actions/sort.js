import * as types from '../helpers/types';

export const byTitle         = title => ({
	type    : types.BY_TITLE,
	payload : title,
});

export const byVote_Count    = voteCount => ({
	type    : types.BY_VOTECOUNT,
	payload : voteCount,
});

export const byAverage_Score = averageScore => ({
	type    : types.BY_AVERAGESCORE,
	payload : averageScore,
});

export const byRelease_Date  = releaseDate => ({
	type    : types.BY_RELEASEDATE,
	payload : releaseDate,
});

export const byDefualt  = () => ({
	type    : types.BY_DEFAULT,
});