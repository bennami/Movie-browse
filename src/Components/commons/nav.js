import React from "react";
import {Link} from "react-router-dom";
import "../../assets/css/navbar.scss"
import {LOGO_NAV} from "../../utils";

import SearchBar from "./searchbar";

const Nav =()=> (
    <div>
     <nav className={'nav'}>
         <div className={"nav-links"}>
             <img src={LOGO_NAV} alt=""/>
             <ul>
             <li><Link to={'/'}>home</Link></li>
             <li><Link to={'/login'}>login</Link></li>
             <li className={"hide"}><i >search</i></li>
             </ul>
         </div>
         <div className={'nav-search'}>
            <SearchBar/>
         </div>
     </nav>
    </div>
)


export default Nav;
