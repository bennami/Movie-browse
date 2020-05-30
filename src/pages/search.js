import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import List from "../Components/commons/List";
import {useHistory, useParams} from "react-router-dom";
import MovieProfile from "./movieProfile/movieProfile";
import Spinner from "../Components/commons/spinner/Spinner";
import PropTypes from "prop-types";
import * as homePageAction from "../redux/actions/homePageActions";



function Search({
                    setMovie,
                    searchInput,
                    searchResults,
                    loadSearchResults,
                    currentMovie
                }) {
    const [movieGenres, setMovieGenres] = useState([]);
    const history = useHistory();
    console.log(searchResults)
    console.log(currentMovie)

    const viewMovieInfo = (id) => {
        const filteredMovie = searchResults.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setMovie(newCurrentMovie);
    };

    /*useEffect(()=>{
   if(searchInput !=='') {

       loadSearchResults(searchInput).catch(error => {
           alert("loading popular" + error)
       })
       history.push(`/search/${searchInput}`);
        }
    },[])*/

console.log(searchInput)
    return (
        <div>
            { currentMovie.length <= 0
                ?
                <>

                    {
                        searchResults === undefined
                            ?
                            <>
                                <h1>search undefined</h1>
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
                                    <div className={"pagination-with-btn"}>

                                    </div>
                                </>
                    }

                </>
                :
                <MovieProfile
                    viewMovieInfo={viewMovieInfo}
                    genre={movieGenres}
                    currentMovie={currentMovie}
                    closeMovieInfo={() => {
                        setMovie([]);
                    }}/>
            }

        </div>
    )
}

Search.prototypes = {
    loadSearchResults: PropTypes.func.isRequired,
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
        currentMovie: state.homePageReducer.currentMovie
    };
}


const mapDispatchToProps = {
    loadSearchResults: homePageAction.loadSearchResults,
    setMovie: homePageAction.setMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
