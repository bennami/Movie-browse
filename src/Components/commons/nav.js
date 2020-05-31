import React from "react";
import {Link} from "react-router-dom";
import "../../assets/css/navbar.scss"
import {LOGO_NAV} from "../../utils";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "./searchbar";
import * as homePageAction from "../../redux/actions/homePageActions";

function Nav ({setMovie}) {
    function emptyMovie(){setMovie([]);}
    return(
    <div>
     <nav className={'nav'}>
         <div className={"nav-links"}>
             <img src={LOGO_NAV} alt=""/>
             <ul>
             <li onClick={emptyMovie}><Link to={'/home'}>home</Link></li>
             <li onClick={emptyMovie}><Link to={'/login'}>login</Link></li>
             <li onClick={emptyMovie} className={"hide"}><i >search</i></li>
             </ul>
         </div>
         <div className={'nav-search'}>
            <SearchBar/>
         </div>
     </nav>
    </div>
    )
}
Nav.prototypes  ={
    setMovie: PropTypes.func.isRequired,

}

const mapDispatchToProps = {
    setMovie:  homePageAction.setMovie
}
export default  connect(null,mapDispatchToProps)(Nav);
