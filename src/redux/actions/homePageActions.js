import * as types from "./actionTypes";
import * as HomePageApi from "../../Api/movieApi";
import {apiCallError, beginApiCall} from "./apiStatus";
import initialState from "../reducers/initialState";
import axios from "axios";
import {API_KEY, BASE_URL, PROXY} from "../../utils";
import {handleError, handleResponse} from "../../Api/apiUtils";


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

export function searchMoviesResultsSuccess(searchResults) {
    return {type: types.SEARCH_RESULTS_SUCCESS, searchResults:searchResults};
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

export function loadSearchMovieResults (name,searchResults){
    return function (dispatch,getState) {
        const state = getState();
        dispatch(beginApiCall());
        return HomePageApi.loadSearchResults().then(searchResults =>{
            dispatch(searchMoviesResultsSuccess(searchResults));
        }).catch(error =>{
            dispatch(apiCallError(error));
            throw error;
        });
    }
}


