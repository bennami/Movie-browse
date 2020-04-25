import React, {useEffect, useState} from "react";
import List from "../Components/List";
import {useParams} from "react-router-dom";
import Pagination from "../Components/Pagination";

function Search() {

    const [movieList, setMovieList] = useState(['hey']);
    const [search, setSearch] = useState('');
    const {name} = useParams();
    const [totalResults, setTotalResults] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    const proxy = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        async function fetchData() {
            //fetch stream of data
            const response1 = await fetch(`${proxy}https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${name}&page=${currentPage}`);
            //convert to json
            const data = await response1.json();

            //set json object into moviesList array, every time there is a new search this will refresh itself
            setMovieList(data.results);
            setSearch(name);
            setTotalPages(data.total_pages);
            setTotalResults(data.total_results);
        }

        fetchData();
    }, [name,currentPage]);


    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const Next = ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage+1)
        }
    };
    const Previous = ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage-1)
        }else{
            setCurrentPage(currentPage)
        }
    };

    return(

        <div>
            <h3>Results for: {search}</h3>
            <List movieList={movieList}/>
            <div className={"pagination-with-btn"}>
            <button onClick={Previous}>previous</button>
            {totalResults > 20 ? <Pagination pages={totalPages} nextPage={nextPage} currentPage={currentPage}/> : ""}
            <button onClick={Next}>next</button>
            </div>
        </div>
    )
}

export default Search;