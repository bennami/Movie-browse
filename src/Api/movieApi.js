import { handleResponse, handleError } from "./apiUtils";
import {API_KEY, BASE_URL,PROXY} from "../utils";

export function loadTrendyMovies() {
    return fetch(`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);
}

export function getPopularMovies() {
    return fetch(BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}

export function getGenreMovies() {
    return fetch(BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}

export function getSearch(){
    return fetch (BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}
