import React, { Component } from 'react'

class Books extends Component {
	render() {
		const { title, authors, imageLinks, shelf } = this.props.bookInfo

		return(
			<div className="book">
			  <div className="book-top">
				<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : undefined})` }}></div>
				<div className="book-shelf-changer">
				  <select value={shelf ? shelf : "none"} onChange={(event) => { this.props.shelfUpdate(this.props.bookInfo, event.target.value) }}>
					<option value="move" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				  </select>
				</div>
			  </div>
			  <div className="book-title">{title}</div>
			  {authors.map((names) =>
			  	<div className="book-authors">{names}</div>
			  )}
			</div>
		)
	}
}

export default Books