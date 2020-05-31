import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                trendingMovies: action.trendingMovies.results,
                totalPages: action.trendingMovies.total_pages,
                currentPage: action.trendingMovies.page
            };
        case types.SET_CURRENT_MOVIE:
            return {...state, currentMovie: action.currentMovie};
        case types.LOAD_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                popularMovies: action.popularMovies.results,
                totalPages: action.popularMovies.total_pages,
                currentPage: action.popularMovies.page
            };
        case types.SEARCH_INPUT:
            return {...state, searchInput: action.payload};
        case types.SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                searchResults: action.searchResults.results,
                totalPages: action.searchResults.total_pages,
                currentPage: action.searchResults.page
            };
        default:
            return state;
    }
}

