import { handleResponse, handleError } from "./apiUtils";
import {API_KEY, BASE_URL, VIDEO_LINK} from "../utils";

export function searchResults(searchInput,currentPage) {
    return fetch(`${BASE_URL}/search/movie${API_KEY}&query=${searchInput}&page=${currentPage}`)
        .then(handleResponse)
        .catch(handleError);
}

export function loadTrendingMovies() {
    return fetch(`${BASE_URL}/trending/all/day${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}

export function loadPopularMovies(currentPage) {
        return  fetch (`${BASE_URL}/movie/popular${API_KEY}&language=en-US&page=${currentPage}`)
            .then(handleResponse)
            .catch(handleError);
}

//id  is currentMovie.id
export function loadTrailer(id) {
    return fetch(`${VIDEO_LINK}${id}/videos/${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}


export function loadGenresMovies() {
    return fetch(`${BASE_URL}/genre/movie/list${API_KEY}&language=en-US`)
        .then(handleResponse)
        .catch(handleError);
}


