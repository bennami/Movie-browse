import React from "react";
import  "./card.scss";

const Card  = (props) =>{
    return(

            <div onClick={()=> props.viewMovieInfo(props.movieId)}>
                <div className={'cardMovie'} style={{backgroundImage: `url(${props.img})`}} />
                <p className={"titleMovie"}>{props.title}</p>
           </div>

    )
};

export default Card
