import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';
import PropTypes from 'prop-types';


class Search extends React.Component{
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.props.searchHandler}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {Array.isArray(this.props.searchedBooks) && this.props.searchedBooks.map((book)=> <Book book={book} changeShelfHandler={this.props.changeShelfHandler} key={book.id}/>)}
              </ol>
            </div>
          </div>
        );
    }
}

Search.propTypes ={
  searchHandler: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  changeShelfHandler: PropTypes.func.isRequired
}

export default Search