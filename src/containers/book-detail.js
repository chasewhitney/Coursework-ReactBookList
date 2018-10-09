import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>
      <h1>Book Detail!</h1>
      <h1>{this.props.book ? this.props.book.title : 'none'}</h1>
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
