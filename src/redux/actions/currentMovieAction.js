
import * as types from "./actionTypes";

export function setCurrentMovie( currentMovie) {
    return {type: types.SET_CURRENT_MOVIE , currentMovie};
}
