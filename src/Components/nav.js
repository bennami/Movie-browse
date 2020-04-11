import React from "react";

function Nav() {
return(
    <div>
     <nav className={'nav'}>
         <img src="//www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt=""/>
        <div className="navlist">
         <ul>
             <li><a href="">popular</a></li>
             <li><a href="">top 5</a></li>
         </ul>
        </div>
     </nav>
    </div>
)
}

export default Nav;