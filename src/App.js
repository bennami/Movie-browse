import React, {useState} from 'react';
import Card from "./Components/card";
import Search from "./Components/search";
import Nav from "./Components/nav";
import './App.css';



function App() {
  const apiKey =  process.env.REACT_APP_API;
  const [imgSrc, setImgSrc] = useState();
  const [movieId, setMovieId]  =useState('');
  const [search, setSearch]  = useState('505');
  const  [movieList,  setMovieList]  = useState([]);


  const API = async (e) => {
/*      //fetch stream of data
      const response2 = await fetch(`https://api.themoviedb.org/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`);


      (`https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`)

      //convert to json
      const allData  = await response1.json();
console.log(allData);*/
        e.preventDefault();
      console.log(apiKey);
    //fetch stream of data
    const response1 = await fetch(`https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=${search}`);
    //convert to json
    const data  = await response1.json();

     //set json object into moviesList array
     setMovieList  (...movieList,data.results);
     console.log(movieList);

        setImgSrc(  `http://image.tmdb.org/t/p/w185/${movieList[2].poster_path}`)
console.log(imgSrc)
  };

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

      <Card
      movieList={movieList}
      src={imgSrc}
      moviename={movieList.title}
      movieTitle={movieList.title}
      description={movieList.overview}
      />
        <Card
            movieList={movieList}
            src={imgSrc}
            moviename={movieList.title}
            movieTitle={movieList.title}
            description={movieList.overview}
        />
    </div>
  );
}

export default App;
