import React, {useState} from "react";
function Pagination(props) {

    const [pagesLink, setPagesLink]= useState(0);
    const pageLinks=[];
    const arrayOfPageLinks=[];

    //for every page, create li with its corresponding number, if page is the current page add .active class
    for(let i =1; i <= props.pages; i++){
        let active = props.currentPage === i ? 'active': '';
            pageLinks.push(<li className={` ${active}`} key={i} onClick={()=>{props.nextPage(i)}}>{i}</li>)
    }

    //slice array of links in smaller arrays of ten, so that you can  display 10 pages at the time
    function chunkArray(arr,val) {
        for(let i =0; i <= arr.length; i += val){
            arrayOfPageLinks.push(arr.slice(i, val + i));
        }
    }
    chunkArray(pageLinks,5);

    //show next set of pages, stop at last page.you could also setPagesLink to 0 to go back to the beginning of your pages
    const Next = ()=>{
        if(arrayOfPageLinks.length -1 === pagesLink){
            setPagesLink(arrayOfPageLinks.length -1)
        }else{
            setPagesLink(pagesLink+1);
        }
    };

    //same as next, but backwards
    const Previous = ()=>{
        if(pagesLink > 0){
            setPagesLink(pagesLink-1)
        }
        if(pagesLink < 0){
            setPagesLink(pagesLink);
        }
    };

    return(
        <div className={"container"}>
            <div className="row">
                <ul className={"pagination"}>
                    {pagesLink <= 0
                        ? ''
                        :
                        <>
                        <button onClick={Previous}>...</button>
                        <button>prev</button>
                        </>
                    }
                    {arrayOfPageLinks[pagesLink]}
                    <button onClick={props.nextPage}>next</button>
                    <button onClick={Next}>...</button>

                </ul>
            </div>
        </div>
    )

}
export default Pagination
