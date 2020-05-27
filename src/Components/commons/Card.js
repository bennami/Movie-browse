import React from "react";
import {Link,useParams} from "react-router-dom";


const Card  = ({movieId,img,title,viewMovieInfo}) =>{
    const {currentMovie} = useParams();
    return(
        <Link  to={`/movieProfile/${currentMovie}`} >
            <div  onClick={()=> viewMovieInfo(movieId)}>
                <div className={'cardMovie'} style={{backgroundImage: `url(${img})`}} />
                <p className={"titleMovie"}>{title}</p>
           </div>
        </Link>


    )
};

export default Card
