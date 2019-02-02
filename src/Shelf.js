import React, { Component } from 'react'
import Books from './Books'

class Shelf extends Component {
	
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map((details)=> (
							<li key={details.title}>
								<Books shelfUpdate={this.props.c} bookInfo={details}/>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf