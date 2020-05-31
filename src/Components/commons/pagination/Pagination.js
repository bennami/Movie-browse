import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as homePageAction from "../../../redux/actions/homePageActions";
import {setCurrentPage} from "../../../redux/actions/homePageActions";
import "./pagination.scss"
function Pagination({totalPages,currentPage,loadPopularMovies,setCurrentPage}) {

    const [pagesLink, setPagesLink]= useState(0);
    const pageLinks=[];
    const arrayOfPageLinks=[];

    //for every page, create li with its corresponding number, if page is the current page add .active class

    for(let i =1; i <= totalPages; i++){
        let active = currentPage === i ? 'active': '';
            pageLinks.push(<li className={` ${active}`} key={i} onClick={()=>{clickedNumber(i)}}>{i}</li>)
    }

    //slice array of links in smaller arrays of ten, so that you can  display 5 pages at the time
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

    function clickedNumber(current){
        console.log(current);
        setCurrentPage(current);
        loadPopularMovies(currentPage);
    }

    const nextPage = ()=>{
       setCurrentPage(currentPage+1);
       loadPopularMovies(currentPage);
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

                        <button>prev</button>
                        </>
                    }
                    {arrayOfPageLinks[pagesLink]}

                    <button onClick={Next}>...</button>

                </ul>
            </div>
        </div>
    )

}

Pagination.prototypes = {
    setCurrentPage: PropTypes.func.isRequired,
    loadPopularMovies: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    currentMovie:  PropTypes.array.isRequired,
}

function mapStateToProps(state) {
    return {
       totalPages: state.homePageReducer.totalPages,
       currentPage: state.homePageReducer.currentPage

    };
}

const mapDispatchToProps = {
    setCurrentPage: homePageAction.setCurrentPage,
    loadPopularMovies: homePageAction.loadPopularMovies,
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
