import React, { Component } from 'react'
import SearchBooks from './SearchBooks'
import Home from './Home'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    allBooks: []
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
  			allBooks: state.allBooks
  		}))
  	})
  }

  render() {
    return (
      
      <div className="app">
        <Route exact path="/search" render={()=>(
        	<SearchBooks book={this.state} />
        )}/>
        <Route exact path="/" render={()=>(
        	<Home book={this.state} change={this.changeShelf}/>
        )}/>
      </div>

    )
  }
}

export default BooksApp
