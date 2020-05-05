import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import SearchBar from "./searchbar";


function Nav() {
    //const apiKey =  process.env.REACT_APP_API;
    const [search, setSearch]  = useState('');
    const  [movieList,  setMovieList]  = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const history= useHistory();

    //when user searches for a movie, fetch data and set movieList
    const searchItem = async (e) => {
        e.preventDefault();

        if(search === ""){
            alert("please enter a movie title")
        }else{
            //fetch stream of data
            const response1 = await fetch(`${proxy}https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`);
            //convert to json
            const data  = await response1.json();

            setMovieList(data.results);
            history.push(`/search/${search}`);
        }
    };

    //set search while  typing
    const handleChange = (e) =>{

        setSearch(e.target.value);
    };
return(
    <div>
     <nav className={'nav'}>
         <div className={"nav-links"}>
             <img src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt=""/>
             <ul>
             <li><Link to={'/'}>home</Link></li>
             <li><Link to={'/'}>login</Link></li>
             <li  className={"hide"}><i >search</i></li>
            </ul>
         </div>
         <div className={'nav-search'}>
            <SearchBar
                handleSubmit={searchItem}
                handleChange={handleChange}
            />
         </div>
     </nav>
    </div>

)
}

export default Nav;
