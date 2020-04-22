import React from "react";
import {Link} from "react-router-dom";


function Nav() {

return(
    <div>
     <nav className={'nav'}>
         <img src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt=""/>
        <div className="navlist">
         <ul>
             <li><Link to={'/'}>home</Link></li>
             <li><Link to={'/popular'}>popular</Link></li>
             <li><Link to={'/top 10'}>top 10</Link></li>
             <li  className={"hide"}><i >search</i></li>
         </ul>
        </div>
     </nav>
    </div>

)
}

export default Nav;