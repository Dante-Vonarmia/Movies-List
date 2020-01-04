import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { changePage } from '../../actions/pagination'

const Pagination = ({ pages, currentPage, changePage }) => {
	const handleChangePage = e => {
		if (parseInt(currentPage + e.target.value) > 1) {
			currentPage += parseInt(e.target.value);
			changePage(currentPage);
		}
	}

	return (
		<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<button onClick={e => handleChangePage(e)} value='-1'>Prev</button>
			<span> {currentPage} &#47; {pages}</span>
			<button onClick={e => handleChangePage(e)} value='1'>Next</button>
		</div>
	)
}
const mapStateToProps = state => ({
	pages       : state.pagination.pages,
	currentPage : state.pagination.currentPage,
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		changePage
	}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
