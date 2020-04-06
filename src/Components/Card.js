import React from "react";


const Card  = (props) =>{
    return(
        <div className={'card'} >
            {
                props.img == null ?  <img src="" alt="no img"/> : <img src={props.image} alt="name img"/>
            }
            <p>{props.title}</p>
        </div>
    )
};

export default Card