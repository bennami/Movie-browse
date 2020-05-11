import React from "react";
import {Link,useParams} from "react-router-dom";


const Card  = (props) =>{
    const {currentMovie} = useParams();
    return(
        <Link  to={`/movieProfile/${currentMovie}`} >
            <div  onClick={()=> props.viewMovieInfo(props.movieId)}>

                <div className={'cardMovie'} style={{backgroundImage: `url(${props.img})`}} />
                <p className={"titleMovie"}>{props.title}</p>
           </div>
        </Link>


    )
};

export default Card
