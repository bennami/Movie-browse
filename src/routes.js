import React from "react";
import {Switch, Route} from 'react-router-dom';
import Search from "../src/pages/search"
import Popular from "../src/pages/popular"
import Homepage from "./pages/Homepage"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/popular" component={Popular}/>
            <Route exact path="/Movie-browse" component={Popular}/>
            <Route exact path="/top5"/>
            <Route exact path="/search/:name" component={Search}/>
        </Switch>
    )
};

export default Routes;
