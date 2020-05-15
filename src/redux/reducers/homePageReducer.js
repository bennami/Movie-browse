import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TRENDING_MOVIES_SUCCESS:
            return {...state, trendingMovies: action.trendingMovies.results};
        case types.SET_CURRENT_MOVIE:
            return {...state,currentMovie: action.currentMovie};
        case types.LOAD_POPULAR_MOVIES_SUCCESS:
            return {...state, popularMovies: action.popularMovies.results};
        case types.SEARCH_INPUT:
            return {...state,  searchInput: action.searchInput};
        case types.SEARCH_RESULTS_SUCCESS:
            return {...state, searchResults: action.searchResults.results}
        default:
            return state;

    }
}

//  if a variable is not in the initial state:
// return {...state, {...action.searchInput}