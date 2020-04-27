import React, {useState} from 'react';
import SearchBar from "./Components/searchbar";
import Nav from "./Components/nav";
import Routes from "./routes";
import {useHistory} from "react-router-dom";

import './App.css';


function App() {


      return (
          <div className="App">
              <Nav/>
              <Routes/>
          </div>
      )

}

export default App;
