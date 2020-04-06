import React from "react";


const Card  = (props) =>{
    return(
        <div className={'card'} >
            {
                props.img == null ?  <img src="" alt="no poster available"/> : <img src={props.img} alt="name img"/>
            }
            <p>{props.title}</p>
        </div>
    )
};

export default Card