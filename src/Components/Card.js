import React from "react";

const Card  = (props) =>{
    return(
        <div className={'card'} style={{backgroundImage: `url(${props.img})`}} >
            <p className={"titleMovie"}>{props.title}</p>
        </div>
    )
};

export default Card