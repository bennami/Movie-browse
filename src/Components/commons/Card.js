import React from "react";
import {useParams} from "react-router-dom";


const Card  = ({movieId,img,title,viewMovieInfo}) =>{
    const {currentMovie} = useParams();
    return(

            <div  onClick={()=> viewMovieInfo(movieId)}>
                <div className={'cardMovie'} style={{backgroundImage: `url(${img})`}} />
                <p className={"titleMovie"}>{title}</p>
           </div>



    )
};

export default Card
