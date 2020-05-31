import * as types from "./actionTypes";
import * as HomePageApi from "../../Api/movieApi";
import {apiCallError, beginApiCall} from "./apiStatus";

//action creators
export function loadTrendingMoviesSuccess(trendingMovies) {
    return {type: types.LOAD_TRENDING_MOVIES_SUCCESS, trendingMovies};
}

export function loadPopularMoviesSuccess(popularMovies) {
    return {type: types.LOAD_POPULAR_MOVIES_SUCCESS, popularMovies};
}

export function setCurrentMovie(currentMovie) {
    return {type: types.SET_CURRENT_MOVIE, currentMovie};
}

export function setInputUser(searchInput) {
    return {type: types.SEARCH_INPUT, payload:searchInput};
}

export function searchMoviesResultsSuccess(searchResults) {
    return {type: types.SEARCH_RESULTS_SUCCESS,searchResults:searchResults};
}

export function searchTrailerSuccess(trailer) {
    return {type: types.SEARCH_TRAILER_SUCCESS,trailer}
}

export function setCurrentPageSuccess(currentPage) {
    return{type: types.SET_CURRENT_PAGE,currentPage}

}

//thunks
export function loadTrendingMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadTrendingMovies()
            .then(trendingMovies => {
            dispatch(loadTrendingMoviesSuccess(trendingMovies));
        })
            .catch(error => {
            dispatch(apiCallError(error));
            throw error ;
        });
    };
}

export function loadPopularMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi
            .loadPopularMovies()
            .then(popularMovies => {
            dispatch(loadPopularMoviesSuccess(popularMovies));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    };
}

export function setMovie (currentMovie){
    return function (dispatch) {
        dispatch(setCurrentMovie(currentMovie));
    }
}

export function setSearch (searchInput){
    return function (dispatch) {
        dispatch(setInputUser(searchInput));
    }
}

export function loadSearchResults(searchInput) {
    return function (dispatch) {
        dispatch(beginApiCall());
       return HomePageApi.searchResults(searchInput)
            .then(searchResults => {
                dispatch(searchMoviesResultsSuccess(searchResults));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function searchTrailer(id) {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadTrailer(id)
            .then(trailer =>{
                dispatch(searchTrailerSuccess(trailer));
            })
            .catch(
                error => {
                    dispatch(apiCallError(error));
                    throw error;
                });
    };
}

export function setCurrentPage (currentPage){
    return function (dispatch) {
        dispatch(setCurrentPageSuccess(currentPage));
    }
}



