import React from "react"
import PropTypes from 'prop-types';

class Book extends React.Component{

    changeShelf = (e) =>{
        this.props.changeShelfHandler(this.props.book, e.target.value);
    }

    render(){

        if(this.props.book.imageLinks === undefined ) {
            this.props.book.imageLinks = ['smallThumbnail'];
            this.props.book.imageLinks.smallThumbnail = 'https://library.britishcouncil.org.in/static-content/isbn/noimage.jpg';
        }

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.changeShelf} value={this.props.book.shelf || 'none'}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
            </li>
        );
    }
}

Book.propTypes ={
    book: PropTypes.object.isRequired,
  }

export default Book