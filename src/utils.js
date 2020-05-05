import {useState} from "react";

const Utils =() => {
    const API_KEY = '67b347978ffe14fc5d6f8a664a1829f2';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const  PROXY = 'https://cors-anywhere.herokuapp.com/';
    const [TrendingTodayMovies, setTrending] = useState([]);
    const [popularMovies, setPopular] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const [totalResults, setTotalResults] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink, setPagesLink] =useState(0);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieGenres, setMovieGenres] =useState([]);
}


export default Utils;
