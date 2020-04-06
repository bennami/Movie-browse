import React, {useState} from 'react';
import List from "./Components/List";
import Search from "./Components/search";
import Nav from "./Components/nav";
import './App.css';



function App() {
  //const apiKey =  process.env.REACT_APP_API;
  //const [imgSrc, setImgSrc] = useState();
  //const [movieId, setMovieId]  =useState('');
  const [search, setSearch]  = useState('');
  const  [movieList,  setMovieList]  = useState([]);


  const API = async (e) => {
    e.preventDefault();

    //fetch stream of data
    const response1 = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`);
    //convert to json
    const data  = await response1.json();

    //set json object into moviesList array
    setMovieList  (data.results);

  };
  console.log(movieList);

  //set search while  typing
  const handleChange =  (e) =>{
      setSearch(e.target.value);

  };

  return (
        <div className="App">
            <Nav/>
            <Search
              handleSubmit={API}
              handleChange={handleChange}

            />
            <List
              movieList={movieList}

            />
    </div>
  );
}

export default App;
