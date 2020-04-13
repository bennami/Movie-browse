import React, {useState, useEffect} from 'react';
import List from "./Components/List";
import Search from "./Components/search";
import Nav from "./Components/nav";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  //const apiKey =  process.env.REACT_APP_API;
  const [search, setSearch]  = useState('');
  const  [movieList,  setMovieList]  = useState([]);
  const [popularMovies, setPopular] = useState([]);


  //on load, load List with popular movies
  useEffect(() => {
        async function fetchData() {
            const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=1`);
            const popular = await response.json();
            setPopular(popular.results);
        }
        fetchData();
  }, []);

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

  return (

    <div className="App">
         <Nav/>
         <Search
             handleSubmit={searchItem}
             handleChange={handleChange}
         />

        {/* <Route path="/search"  exact  compoonent={List}/>*/}
         <List movieList={movieList}/>
         <h1>Popular movies</h1>
         <List movieList= {popularMovies}/>
    </div>

  );
}

export default App;
