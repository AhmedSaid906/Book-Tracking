import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Main from './Main'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    search: '',
    searchedBooks: [],
  }

    componentDidMount(){
     BooksAPI.getAll().then((res)=>{
      this.setState({books: res})
    })
  }

  changeShelfHandler = async (book, shelf) => {
    await BooksAPI.update(book,shelf);
    await BooksAPI.getAll().then((res)=>{
      this.setState({books: res})
    })
}

  searchHandler = async (e) =>{
    await this.setState({search: e.target.value})
    await BooksAPI.search(this.state.search).then((res)=>{
      if(res && Array.isArray(res)){
        res.map((searchedBook)=>{
          this.state.books.forEach((book)=>{
              if(searchedBook.id === book.id){
                searchedBook.shelf = book.shelf;
              }
            }
          )
          return searchedBook
        })
      }
      this.setState({searchedBooks: res || []})
    })
  }

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Main books= {this.state.books} changeShelfHandler={this.changeShelfHandler}/>} />
          <Route exact path="/Search" element={<Search searchHandler = {this.searchHandler} search= {this.state.search} searchedBooks= {this.state.searchedBooks} changeShelfHandler={this.changeShelfHandler}/>} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp
