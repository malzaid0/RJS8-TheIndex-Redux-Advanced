import {FETCH_AUTHORS} from "../actions/actionType";

const initialState = {
    authors: [],
    // newAuthorId: authors.length
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTHORS:
            return {
                ...state,
                authors: action.payload
            }
        default:
            return state;
    }
};
