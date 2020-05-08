import { handleResponse, handleError } from "./apiUtils";
import {API_KEY, BASE_URL,PROXY} from "../utils";

export function loadTrendyMovies() {
    return fetch(`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}

export function loadSearch(name,currentPage) {
    return fetch(`${PROXY}${BASE_URL}search/movie/${API_KEY}&query=${name}&page=${currentPage}`)
        .then(handleResponse)
        .catch(handleError);
}
export function getPopularMovies(currentPage) {
    return fetch(`${PROXY}${BASE_URL}/movie/popular/all/day${API_KEY}&page=${currentPage}`)
        .then(handleResponse)
        .catch(handleError);
}

export function getGenreMovies() {
    return fetch(BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}

