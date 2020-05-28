import * as types from "./actionTypes";
import * as HomePageApi from "../../Api/movieApi";
import {apiCallError, beginApiCall} from "./apiStatus";
import {API_KEY, BASE_URL, PROXY} from "../../utils";
import {handleError, handleResponse} from "../../Api/apiUtils";

//action creators
export function loadTrendingMoviesSuccess(trendingMovies) {
    return {type: types.LOAD_TRENDING_MOVIES_SUCCESS, trendingMovies};
}

export function loadPopularMoviesSuccess(popularMovies) {
    return {type: types.LOAD_POPULAR_MOVIES_SUCCESS, popularMovies};
}

export function setInputUser(searchInput) {
    return {type: types.SEARCH_INPUT, searchInput:searchInput};
}

export function searchMoviesResultsSuccess(searchResults,currentPage) {
    return {type: types.SEARCH_RESULTS_SUCCESS, searchResults:searchResults,currentPage:currentPage};
}

export function setCurrentMovie(currentMovie) {
    return {type: types.SET_CURRENT_MOVIE, currentMovie};
}

//thunks
export function loadTrendingMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi
            .loadTrendingMovies()
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

export function setSearch (searchInput,currentPage){
    return function (dispatch) {
        dispatch(setInputUser(searchInput));
     /*   dispatch(beginApiCall());
        return HomePageApi.loadSearchResults(searchInput,currentPage)
            .then(searchResults => {
                dispatch(searchMoviesResultsSuccess(searchResults));
            }).catch(error => {
                dispatch(apiCallError(error));
                throw error;
            })*/
    }
}

export function loadSearchResults(searchInput,currentPage) {
    return fetch(`${PROXY}${BASE_URL}search/movie/${API_KEY}&query=${searchInput}&page=${currentPage}`)
        .then(handleResponse)
        .catch(handleError);
}

/*export function searchMovie(searchInput,currentPage) {
    return function (dispatch){
        dispatch(beginApiCall());
        return HomePageApi.loadSearchResults(searchInput,currentPage)
            .then((searchInput,currentPage) => {
                dispatch(searchMoviesResultsSuccess(searchInput,currentPage));
            }).catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    }

}
*/
export function setMovie (currentMovie){
    return function (dispatch) {
        dispatch(setCurrentMovie(currentMovie));
    }
}





