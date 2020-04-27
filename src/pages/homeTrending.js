import React, {useEffect, useState} from "react";
import List from "../Components/List";
import Home from "../Components/introhome";
import Pagination from "../Components/Pagination";
import '../assets/css/slider.scss'

function Popular() {

    const [TrendingTodayMovies, setTrending] = useState([]);
    const [popularMovies, setPopular] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const [totalResults, setTotalResults] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink, setPagesLink] =useState(0);

    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/trending/all/day?api_key=67b347978ffe14fc5d6f8a664a1829f2`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=${currentPage}`);
            const popular = await response.json();
            setPopular(popular.results);
            setTotalPages(popular.total_pages);
            setTotalResults(popular.total_results);
        }
        fetchData();
    }, [currentPage]);
    console.log(TrendingTodayMovies);

    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    return(
        <div>
            <Home movieList={TrendingTodayMovies}/>


        <h1>Browse all popular movies</h1>
        <List movieList={popularMovies}/>
            {totalResults > 20 ? <Pagination pagesLink={pagesLink} pages={totalPages} currentpages={currentPage}  nextPage={nextPage} currentPage={currentPage}/> : ""}

        </div>
    )

}

export default Popular;
