import React from "react";
import {Switch, Route} from 'react-router-dom';
import Search from "../src/pages/search"
import Popular from "../src/pages/popular"
import Homepage from "./pages/homePage/Homepage"
import PageNotFound from "./pages/PageNotFound"
import MovieProfile from "./pages/movieProfile/movieProfile";

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/home" component={Homepage}/>
            <Route  path="/popularMovies/:currentMovie" component={MovieProfile}/>
            <Route exact path="/Movie-browse" component={Homepage}/>
            <Route exact path="/popular" component={Popular}/>
            <Route path="/search/:name" component={Search}/>
            <Route path="/searchResult/:currentMovie" component={MovieProfile}/>
            <Route component={PageNotFound}/>
        </Switch>
    )
};

export default Routes;
