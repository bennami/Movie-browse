import React, {useEffect, useState} from "react";
import List from "../Components/List";
import {useParams} from "react-router-dom";

function Search(){

    const  [movieList,  setMovieList]  = useState(['hey']);
    const [search, setSearch]  = useState('');
    const {name}= useParams();

    useEffect(() => {
        async function fetchData() {
            //fetch stream of data
            const response1 = await fetch(`//api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${name}`);
            //convert to json
            const data  = await response1.json();
            //set json object into moviesList array, every time there is a new search this will refresh itself
            setMovieList(data.results);
            setSearch(name)
        }
        fetchData();
    }, [name]);

    return(
        <div>
            <h3>Results for: {search}</h3>
            <List movieList={movieList}/>
        </div>
    )
}

export default Search;