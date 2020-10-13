import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {compose} from 'redux';
import { createStore } from 'redux'
import rootReducer from "./reducers"
import {fetchAuthors, fetchBooks} from "./actions";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

export default store