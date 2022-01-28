import React from "react"
import Book from './Book.js'
import PropTypes from 'prop-types';

class Shelf extends React.Component{

    //Filter the recieved books due to their shelfs in the API
    filteredBooks = this.props.books.filter((book)=> book.shelf===this.props.shelf)

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.filteredBooks.map((book)=>(
                        <Book book= {book} changeShelfHandler={this.props.changeShelfHandler} key={book.id}/>
                    ))}
                </ol>
                </div>
            </div>
        );
    }
}

Shelf.propTypes ={
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }
                
export default Shelf       