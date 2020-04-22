import React from "react";
import {Switch, Route} from 'react-router-dom';
import Search from "../src/pages/search"
import Popular from "../src/pages/popular"

const Routes = () =>{
    return(
        <Switch>
            <Route  path="/" component={Popular}/>
            <Route path="/popular" component={Popular}/>
            <Route  path="/Movie-browse" component={Popular}/>
            <Route  path="/top5"/>
            <Route  path="/search/:name" component={Search}/>
            <Route path="/search/:name" component={Search}/>
        </Switch>

    )
};

export default Routes;