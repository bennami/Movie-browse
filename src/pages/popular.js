import React, {useEffect, useState} from "react";
import List from "../Components/commons/List";

function Popular() {

    const [popularMovies, setPopular] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";

    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=1
 `);

            const popular = await response.json();
            setPopular(popular.results);
        }
        fetchData();
    }, []);


    return(
        <div className={'popular-container'}>
        <h1>Popular movies</h1>
        <List movieList={popularMovies}/>
        </div>
    )

}

export default Popular;
