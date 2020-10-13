import React from "react";

// Components
import BookTable from "./BookTable";

//Route
import { useParams } from "react-router-dom";
import {connect} from "react-redux";


const AuthorDetail = props => {
  const { authorID } = useParams();

  const author = props.authors.find(author => author.id === +authorID)
  const books = props.books.filter(book => author.books.includes(book.id))

  const authorName = `${author.first_name} ${author.last_name}`;
  return (
    <div className="author">
      <div>
        <h3>{authorName}</h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail img-fluid"
          alt={authorName}
        />
      </div>
      <BookTable books={books} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    authors: state.authors.authors,
    books: state.books.books
  }
};

export default connect(mapStateToProps)(AuthorDetail);