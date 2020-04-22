import React, {useEffect, useState} from "react";
import List from "../Components/List";

function Popular() {

    const [TrendingTodayMovies, setTrending] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/trending/all/day?api_key=67b347978ffe14fc5d6f8a664a1829f2`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();
    }, []);


    return(
        <div className={'popular-container'}>
            <div className={"section-banner"}>

            </div>
        <h1>Trending right now</h1>
        <List movieList={TrendingTodayMovies}/>
        </div>
    )

}

export default Popular;