import React, { Component } from 'react'
import SearchBooks from './SearchBooks'
import Home from './Home'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    allBooks: [],
    results: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ 
      	allBooks: books
      })
    })
  }

  changeShelf = (book, shelf) => {
  	BooksAPI.update(book, shelf).then(()=> {
  		book.shelf = shelf
  		this.setState(state => ({
  			allBooks: state.allBooks.filter(b => b.id !== book.id).concat([book])
  		}))
  	})
  }

  searchBooks() {
    BooksAPI.search(this.state.query).then(res => {
      return this.setState({ results: res })
    })
  }

  updateQuery = (query) => {
    if(query){
      this.setState({query: query}, this.searchBooks)
    } else{
      this.setState({query: ''})
    }
  }

  render() {
    return (
      
      <div className="app">
        <Route exact path="/search" render={()=>(
        	<SearchBooks updateQuery={this.updateQuery} change={this.changeShelf} book={this.state} searchBooks={this.searchBooks} />
        )}/>
        <Route exact path="/" render={()=>(
        	<Home book={this.state} change={this.changeShelf}/>
        )}/>
      </div>

    )
  }
}

export default BooksApp
