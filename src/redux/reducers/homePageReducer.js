import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState.trendingMovies, action) {
    switch (action.type) {
        case types.LOAD_TRENDY_MOVIES_SUCCESS:
            return action.trendingMovies;
        default:
            return state;
    }
}
