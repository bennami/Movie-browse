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

export function searchInputUser(searchInput) {
    return {type: types.SEARCH_INPUT, searchInput:searchInput};
}


//thunks
export function loadTrendingMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadTrendingMovies().then(trendingMovies => {
            dispatch(loadTrendingMoviesSuccess(trendingMovies));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error ;
        });
    };
}

export function loadPopularMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadPopularMovies().then(popularMovies => {
            dispatch(loadPopularMoviesSuccess(popularMovies));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    };
}

export function searchMovie (){
    return function (dispatch) {
        dispatch(searchInputUser(searchInputUser));
    }
}
