import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >{book.title}</li>
      );
    })
  }

  render() {
    return (
      <div>
        <h1>Active book: {this.props.activeBook ? this.props.activeBook.title : 'none'}</h1>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will show up
  // as props inside of BookList
  return {
    books: state.books,
    activeBook: state.activeBook,
  };
}

// Anything returned from this function will end up as props
// on BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote BookList from component to container - it needs to know about
// this new dispatch method selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
