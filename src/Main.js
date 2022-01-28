import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types';

class Main extends React.Component{
    render(){
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books= {this.props.books} title='Currently Reading' shelf='currentlyReading' changeShelfHandler={this.props.changeShelfHandler}/>
                <Shelf books= {this.props.books} title='Want To Read' shelf='wantToRead' changeShelfHandler={this.props.changeShelfHandler}/>
                <Shelf books= {this.props.books} title='Read' shelf='read' changeShelfHandler={this.props.changeShelfHandler}/>
              </div>
            </div>
            
            <div className="open-search">
              <Link className='link' to='Search' >Add a book</Link>
            </div>
          </div>
        );
    }
}

Main.propTypes ={
  books: PropTypes.array.isRequired,
  changeShelfHandler: PropTypes.func.isRequired
}

export default Main