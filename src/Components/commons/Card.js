import React from "react";


const Card = ({movieId, img, title, viewMovieInfo}) => {

    return (

        <div onClick={() => viewMovieInfo(movieId)}>
            <div className={'cardMovie'} style={{backgroundImage: `url(${img})`}}/>
            <p className={"titleMovie"}>{title}</p>
        </div>


    )
};

export default Card
