import React from "react";

function Card(props) {




return(

    <div  className={'card'}>
        <img src={props.src} alt={props.movieTitle}/>
        <p>{props.movieTitle}</p>
        <p>{props.description}</p>
    </div>
)
}

export default Card;