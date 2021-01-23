import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import List from "../Components/commons/listOfMovies/List";
import {useHistory, useParams} from "react-router-dom";
import MovieProfile from "./movieProfile/movieProfile";
import Spinner from "../Components/commons/spinner/Spinner";
import PropTypes from "prop-types";
import * as homePageAction from "../redux/actions/homePageActions";
import Pagination from "../Components/commons/pagination/Pagination";
import ReactPaginate from "react-paginate";

function Search({
                    setMovie,
                    searchInput,
                    searchResults,
                    loadSearchResults,
                    setCurrentPage,
                    currentMovie,
                    currentPage,
                    setSearch,
                    totalPages
                }) {
    const [movieGenres] = useState([]);
    const history = useHistory();
    const {name} = useParams();

      useEffect(()=>{
          setSearch(name)
         if(searchInput !=='' || currentPage !==1 ) {
             loadSearchResults(searchInput,currentPage).catch(error => {
                 alert("loading search results failed" + error)
             })
             history.push(`/search/${searchInput}`);
         }
      },[searchInput,currentPage,name,loadSearchResults,history,setSearch]);

    const viewMovieInfo = (id) => {
        const filteredMovie = searchResults.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setMovie(newCurrentMovie);

        history.push(`/home/${newCurrentMovie.title}`);
    };

    function clickedNumber(current){
        current = current.selected+1
        if(current !== currentPage){
            setCurrentPage(current);
            loadSearchResults(currentPage);
        }
    }

    return (
        <div>
            { <>

                    {
                        searchResults === undefined
                            ?
                            <>
                                <Spinner/>
                            </>
                            :
                            searchResults.length === 0
                                ?
                                <p>no movies found</p>
                                :
                                <>
                                    <h3>Results for: {searchInput}</h3>
                                    <List movieList={searchResults} viewMovieInfo={viewMovieInfo}/>
                                    <ReactPaginate
                                        pageCount = {totalPages}
                                        pageRangeDisplayed = {4}
                                        marginPagesDisplayed = {0}
                                        onPageChange={clickedNumber}
                                        containerClassName = {'container'}
                                        breakClassName={"break"}
                                    />
                                </>
                    }

                </>

            }

        </div>
    )
}

Search.prototypes = {
    loadSearchResults: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    setSearch:PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    searchResults: PropTypes.array.isRequired,
    currentMovie: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    setMovie: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        searchInput: state.homePageReducer.searchInput,
        searchResults: state.homePageReducer.searchResults,
        currentMovie: state.homePageReducer.currentMovie,
        currentPage: state.homePageReducer.currentPage,
        totalPages: state.homePageReducer.totalPages
    };
}
const mapDispatchToProps = {
    loadSearchResults: homePageAction.loadSearchResults,
    setSearch: homePageAction.setSearch,
    setMovie: homePageAction.setMovie,
    setCurrentPage: homePageAction.setCurrentPage
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
