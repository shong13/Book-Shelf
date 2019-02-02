import React, { Component } from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<Shelf c={this.props.change} shelfName="Currently Reading" books={this.props.book.allBooks.filter(books => books.shelf === "currentlyReading")}/>
						<Shelf c={this.props.change} shelfName="Want To Read" books={this.props.book.allBooks.filter(books => books.shelf === "wantToRead")}/>
						<Shelf c={this.props.change} shelfName="Finished Reading" books={this.props.book.allBooks.filter(books => books.shelf === "read")}/>
					</div>
				</div>
				<div className="open-search">
					<Link
						to="/search"
						className="open-search"
					><button>Add a book</button></Link>
				</div>
			</div>
		)
	}
}

export default Home