import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case types.SEARCH_INPUT:
            return {...state,  searchInput: action.payload};
        case types.SEARCH_RESULTS_SUCCESS:
            return {...state, searchResults: action.loadSearchResults};
        default:
            return state;
    }
}
