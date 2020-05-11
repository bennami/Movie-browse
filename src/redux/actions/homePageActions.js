import * as types from "./actionTypes";
import * as HomePageApi from "../../api/movieApi.js";
import {apiCallError, beginApiCall} from "./apiStatus";

//action creators
export function loadTrendyMoviesSuccess(trendingMovies) {
    return {type: types.LOAD_TRENDY_MOVIES_SUCCESS , trendingMovies};
}

export function loadPopularMoviesSuccess(popularMovies) {
    return {type: types.LOAD_POPULAR_MOVIES_SUCCESS , popularMovies};
}

//thunks
export function loadTrendyMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadTrendyMovies().then(trendyMovies => {
            dispatch(loadTrendyMoviesSuccess(trendyMovies));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw new error ("trendy movies not loaded");
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
            throw new error ("popular movies not  loaded")  ;
        });
    };
}
