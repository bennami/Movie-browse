import React, {useState} from 'react';
import SearchBar from "./Components/searchbar";
import Nav from "./Components/nav";
import Routes from "./routes";
import {useHistory} from "react-router-dom";

import './App.css';


function App() {


      return (
          <div className="App">
              <img className={"d-block w-100 active "} src={`https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg}`} alt={"hey"}/>
              <Nav/>
              <Routes/>
          </div>
      )

}

export default App;
