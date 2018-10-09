import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
      <h3>Book detail for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever gets returned from here will show up
  // as props inside of BookList
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
