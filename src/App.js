import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";
import {connect} from "react-redux";


const App = (props) => {

  const getView = () => {
    if (props.loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID">
            <AuthorDetail />
          </Route>
          <Route path="/authors/">
            <AuthorsList />
          </Route>
          <Route path="/books/:bookColor?">
            <BookList />
          </Route>
        </Switch>
      );
    }
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
    return {
        authors: state.authors.authors,
        loading: !(state.authors.authors.length && state.books.books.length)
    }
};

export default connect(mapStateToProps)(App);
