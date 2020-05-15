import { handleResponse, handleError } from "./apiUtils";
import {API_KEY,BASE_URL,PROXY} from "../utils";
import axios  from "axios"

export function loadTrendingMovies() {
    return fetch(`${PROXY}${BASE_URL}/trending/all/day${API_KEY}`)
        .then(handleResponse)
        .catch(handleError);

}

export function loadSearchResults(name,currentPage) {
    return fetch(`${PROXY}${BASE_URL}search/movie/${API_KEY}&query=${name}&page=${currentPage}`)
        .then(handleResponse)
        .catch(handleError);
}


export function loadPopularMovies() {
        return  fetch (`${PROXY}${BASE_URL}/movie/popular${API_KEY}&language=en-US&page=${"1"}`)
            .then(handleResponse)
            .catch(handleError);
}

export function getGenreMovies() {
    return fetch(BASE_URL)
        .then(handleResponse)
        .catch(handleError);
}


