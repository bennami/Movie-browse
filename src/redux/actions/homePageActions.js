import * as types from "./actionTypes";
import * as HomePageApi from "../../api/movieApi.js";
import {apiCallError, beginApiCall} from "./apiStatus";

//action creators
export function loadTrendyMoviesSuccess(trendingMovies) {
    return {type: types.LOAD_TRENDY_MOVIES_SUCCESS , trendingMovies};
}

//thunks
export function loadTrendyMovies() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return HomePageApi.loadTrendyMovies().then(movies => {
            dispatch(loadTrendyMoviesSuccess(movies));
        }).catch(error => {
            dispatch(apiCallError(error));
            throw error;
        });
    };
}
