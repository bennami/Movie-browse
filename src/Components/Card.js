import React from "react";

const Card  = (props) =>{
    return(
        <>
       <a href={'#'} onClick={()=> props.viewMovieInfo(props.movieId)}>
           <div className={'cardMovie'} style={{backgroundImage: `url(${props.img})`}} >
           </div>
           <p className={"titleMovie"}>{props.title}</p>
       </a>

            </>
    )
};

export default Card
