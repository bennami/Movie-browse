import { handleResponse, handleError } from "./apiUtils";
import {API_KEY, BASE_URL, PROXY, VIDEO_LINK} from "../utils";

export function searchResults(searchInput) {
    return fetch(`${PROXY}${BASE_URL}/search/movie/${API_KEY}&query=${searchInput}&page=1`)
        .then(handleResponse)
        .catch(handleError);
}

export function loadTrendingMovies() {
    return fetch(`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}

export function loadPopularMovies() {
        return  fetch (`${PROXY}${BASE_URL}/movie/popular${API_KEY}&language=en-US&page=1`)
            .then(handleResponse)
            .catch(handleError);
}

//id  is currentMovie.id
export function loadTrailer(id) {
    return fetch(`${VIDEO_LINK}${id}/videos/${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}


export function getGenreMovies() {
    return fetch(BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}


