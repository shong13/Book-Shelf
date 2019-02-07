# MyReads Project

## Get started

* install all project dependencies with `npm install`
* start the server with `npm start`

## Dependencies

* this project uses react-router-dom libraries for both { Route } and { Link }
* use: npm install --save react-router-dom to install dependencies 

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Known Bug

There is a bug where pressing and holding "back space button" will result in the searched book to behave as intended but reappear when search bar has been cleared of all texts
