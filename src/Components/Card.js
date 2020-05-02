import React from "react";

const Card  = (props) =>{
    return(
       <a href={'#'} onClick={()=> props.viewMovieInfo(props.movieId)}> <div className={'card'} style={{backgroundImage: `url(${props.img})`}} >
            <p className={"titleMovie"}>{props.title}</p>
        </div>
       </a>


    )
};

export default Card
