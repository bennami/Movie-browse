import React, {useState} from 'react';
import SearchBar from "./Components/searchbar";
import Nav from "./Components/nav";
import Routes from "./routes";
import {useHistory} from "react-router-dom";
import './App.css';


function App() {
  //const apiKey =  process.env.REACT_APP_API;
  const [search, setSearch]  = useState('');
  const  [movieList,  setMovieList]  = useState([]);

  const proxy = "https://cors-anywhere.herokuapp.com/";
  const history= useHistory();
  console.log(history);
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
              <Routes/>

          </div>
      )

}

export default App;
