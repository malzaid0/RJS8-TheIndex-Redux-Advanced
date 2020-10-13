import axios from "axios";
import {FETCH_BOOKS} from "./actionType";

export const fetchBooks = () => {
    return async dispatch => {
        try {
            const response = await axios.get("https://the-index-api.herokuapp.com/api/books/")
            const books = response.data;
            dispatch({
                type: FETCH_BOOKS,
                payload: books
            })
        } catch (err) {
        }
    };
}