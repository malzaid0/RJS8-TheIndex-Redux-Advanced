import axios from "axios";
import {FETCH_AUTHORS} from "./actionType";

export const fetchAuthors = () => {
    return async dispatch => {
        try {
            const response = await axios.get("https://the-index-api.herokuapp.com/api/authors/")
            const authors = response.data;
            dispatch({
                type: FETCH_AUTHORS,
                payload: authors
            })
        } catch (err) {
        }
    };
}