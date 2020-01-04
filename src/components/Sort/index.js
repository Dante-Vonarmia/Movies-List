import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import {byTitle, byVote_Count, byAverage_Score, byRelease_Date, byDefualt} from '../../actions/sort'

const Sort = props => {
	const {
		title,
		voteCount,
		averageScore,
		releaseDate,
		byTitle,
		byVote_Count,
		byAverage_Score,
		byRelease_Date, byDefualt
	} = props;

	return (
		<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<button onClick={()=>byDefualt()}>By: Default</button>
			<button onClick={()=>byTitle(title)}>By: Title</button>
			<button onClick={()=>byVote_Count(voteCount)}>By: Vote Count</button>
			<button onClick={()=>byAverage_Score(averageScore)}>By: Average Score</button>
			<button onClick={()=>byRelease_Date(releaseDate)}>By: Release Date</button>
		</div>
	)
}

const mapStateToProps = state => ({
	title        : state.sortBy.title,
	voteCount    : state.sortBy.voteCount,
	averageScore : state.sortBy.averageScore,
	releaseDate  : state.sortBy.releaseDate
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		byTitle,
		byVote_Count,
		byAverage_Score,
		byRelease_Date, byDefualt
	}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
