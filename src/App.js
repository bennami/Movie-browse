import React, {useState, useEffect} from 'react';
import List from "./Components/List";
import SearchBar from "./Components/searchbar";
import Nav from "./Components/nav";
import Routes from "./routes";

import './App.css';

function App() {
  //const apiKey =  process.env.REACT_APP_API;
  const [search, setSearch]  = useState('');
  const  [movieList,  setMovieList]  = useState([]);

  //when user searches for a movie, fetch data and set movieList
  const searchItem = async (e) => {
    e.preventDefault();

    //if search is empty

      if(search === ""){
          alert("please enter a movie title")
      }else{
          //fetch stream of data
          const response1 = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`);
          //convert to json
          const data  = await response1.json();

          //set json object into moviesList array, every time there is a new search this will refresh itself
          setMovieList(data.results);
      }



  };

  //set search while  typing
  const handleChange = (e) =>{
      console.log(e.target.value);
      setSearch(e.target.value);
  };

  return (

    <div className="App">
         <Nav/>
         <SearchBar
             handleSubmit={searchItem}
             handleChange={handleChange}
         />
        <List movieList={movieList}/>
        <Routes/>





    </div>

  );
}

export default App;
