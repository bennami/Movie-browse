import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import List from "../Components/commons/List";
import {useHistory} from "react-router-dom";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from "./movieProfile/movieProfile";
import Spinner from "../Components/commons/spinner/Spinner";
import PropTypes from "prop-types";
import * as searchAction from "../redux/actions/searchActions";
import * as homePageAction from "../redux/actions/homePageActions";



function Search({
    searchInput,
    searchResults,
    currentPage,
    loadSearchResults
}) {
    const [movieGenres, setMovieGenres] =useState([]);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(null)
    const history = useHistory();


    useEffect(() => {
        if (loadSearchResults === undefined) {
            loadSearchResults(searchInput)
                .catch(error => {
                    alert("loading popular" + error)
                })
        }
    }, [loadSearchResults,searchInput,searchResults ]);


    const viewMovieInfo = (id) =>{
        const filteredMovie = searchResults.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0]: null;
        setCurrentMovie(newCurrentMovie);
        history.push(`/movieProfile/${currentMovie}`);
    };

    const  closeMovieInfo = () => {
        setCurrentMovie( []);
    };

    const nextPage = (currentPage) => {
        return currentPage;
    };
    return(

        <div>
            {searchInput === '' ?
            <h1>please,search something</h1>
            :

            currentMovie === null
             ?
            <>
            <h3>Results for: {searchInput}</h3>
                {
                    searchResults === undefined
                    ?
                        <h1>search for something</h1>
                        :
                    searchResults.length <=0
                    ?
                    <Spinner/>

                    :
                    <>
                    <List movieList={searchResults} viewMovieInfo={viewMovieInfo}/>
                    <div className={"pagination-with-btn"}>
                    <Pagination pagesLink={pagesLink} pages={totalPages} currentpages={currentPage}  nextPage={nextPage} currentPage={currentPage}/>
                    </div>
                    </>
                }

            </>
            :
            <MovieProfile
                viewMovieInfo={viewMovieInfo}
                genre={movieGenres}
                currentMovie={currentMovie}
                closeMovieInfo={closeMovieInfo}/>
            }


       </div>
    )

}
Search.prototypes = {
    setSearch:PropTypes.func.isRequired,
    loadSearchResults: PropTypes.func.isRequired,
    searchInput:PropTypes.string.isRequired,
    searchResults:PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return{
        searchInput: state.searchInput,
        searchResults: state.searchResults
    };
}


const mapDispatchToProps = {
    setSearch: homePageAction.setSearch,
    loadSearchResults: homePageAction.loadSearchResults,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
