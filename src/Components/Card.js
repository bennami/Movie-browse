import React from "react";


const Card  = (props) =>{
    return(
        <div className={'container'} key={props.key}>
            {
                props.img == null ?  <img src="" alt="no img"/> : <img src={props.image} alt="name img"/>
            }
            <p>{props.title}</p>
        </div>
    )
};

export default Card