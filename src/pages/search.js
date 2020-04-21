import React, {useState} from "react";
import List from "../Components/List";
import {useParams} from "react-router-dom";
import {useLocation,useHistory} from "react-router-dom";
function Search(){

    const  [movieList,  setMovieList]  = useState([]);
    const [search, setSearch]  = useState('');

    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
        console.log("hey");
        e.preventDefault();

        //fetch stream of data
        const response1 = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`);
        //convert to json
        const data  = await response1.json();

        //set json object into moviesList array, every time there is a new search this will refresh itself
        setMovieList(data.results);


    };

    //set search while  typing
    const handleChange =  (e) =>{
        console.log(e.target.value);
        setSearch(e.target.value);
    };

const location = useLocation();
console.log(location);
    return(
        <div>
            <h1>{search}</h1>
            <List movieList={movieList}/>

        </div>
    )

}

export default Search;