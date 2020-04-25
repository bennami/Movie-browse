import React from "react";
function Pagination(props) {

    const pageLinks=[];

    for(let i =1; i <= props.pages; i++){
        let active = props.currentPage === i ? 'active': '';
        pageLinks.push(<li className={` ${active}`} key={i} onClick={()=>{props.nextPage(i)}}>{i}</li>)
    }

    return(
        <div className={"container"}>
            <div className="row">
                <ul className={"pagination"}>
                    { pageLinks}
                </ul>
            </div>

        </div>
    )

}
export default Pagination