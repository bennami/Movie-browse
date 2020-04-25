import React, {useEffect, useState} from "react";
import List from "../Components/List";
import {useParams} from "react-router-dom";
import Pagination from "../Components/Pagination";

function Search(){

    const  [movieList,  setMovieList]  = useState(['hey']);
    const [search, setSearch]  = useState('');
    const {name}= useParams();
    const [totalResults, setTotalResults] =useState();
    const [currentPage, setCurrentPage] =useState(1);
    const proxy = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        async function fetchData() {
            //fetch stream of data
            const response1 = await fetch(`${proxy}https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${name}`);

            //convert to json
            const data  = await response1.json();
            //set json object into moviesList array, every time there is a new search this will refresh itself
            setMovieList(data.results);
            setSearch(name);

        }
        fetchData();
    }, [name]);


   const nextPage = (pageNumber)=>{
       fetch(`${proxy}https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${name}&page=${pageNumber}`)
           .then(data =>data.json()).then(data=>{
           console.log(data);
           setMovieList(data.results);
           setCurrentPage(pageNumber);

       })
    };
    const numberPages = Math.floor(totalResults/10);

    return(

        <div>
            <h3>Results for: {search}</h3>
            <List movieList={movieList}/>
            {totalResults > 10 ? <Pagination pages ={numberPages} nextPage={nextPage(currentPage)} currentPage={currentPage}/> : ""}
        </div>
    )
}

export default Search;