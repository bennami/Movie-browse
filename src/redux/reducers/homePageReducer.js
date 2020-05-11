import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function homePageReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_TRENDY_MOVIES_SUCCESS:
            return [...state,{...action.trendingMovies}];
        case types.SET_CURRENT_MOVIE:
            return [...state,{...action.currentMovie}];
        default:
            return state;

    }
}
