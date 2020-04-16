import React, {useState} from "react";
import List from "../Components/List";
import SearchBar from "../Components/searchbar";
function Search(){

    const  [movieList,  setMovieList]  = useState([]);
    const [search, setSearch]  = useState('');

    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
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


    return(
        <div  className={'search'}>
            <SearchBar
                handleSubmit={searchItem}
                handleChange={handleChange}
            />
            <List movieList={movieList}/>
            <h1>HELLO</h1>
        </div>
    )

}

export default Search;