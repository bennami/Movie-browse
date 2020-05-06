import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState.TrendingMovies, action) {
    switch (action.type) {
        case types.LOAD_TRENDY_MOVIES_SUCCESS:
            return action.movies;
        default:
            return state;
    }
}
