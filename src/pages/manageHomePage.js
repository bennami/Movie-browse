import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from "../Components/commons/spinner/Spinner"
import {loadTrendingMovies,loadPopularMovies,searchMovie} from "../redux/actions/homePageActions";
import List from "../Components/commons/List";
import {bindActionCreators} from "redux";
import * as homePageAction from "../redux/actions/homePageActions";

function ManageHomePage({
    trendingMovies,
    popularMovies,
    ...props
    }) {


    //from homepage
    const [trendingMovies,  setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [totalResults, setTotalResults] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(null);
    const [movieGenres, setMovieGenres] = useState([]);
    const [loading, setLoading] = useState(false)


    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    //loads courses and authors on load
    useEffect( ()=>{
        if (trendingMovies.length === 0) {
            loadTrendingMovies().catch(error => {
                alert("Loading trending" + error);
            });
            loadPopularMovies().catch(error => {
                alert("loading popular"+error)
            });
        }else {
            setTrendingMovies({ ...props.trendingMovies });
            setPopularMovies({...props.popularMovies});
        }
        console.log(trendingMovies)
        console.log(popularMovies)
    },[props.trendingMovies,popularMovies]);



    return(
        trendingMovies.length === 0
            ?(<Spinner/>)
            :(
                <List
                    movieList={trendingMovies}
                />
            )
    );

}

ManageHomePage.prototypes={
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.array.isRequired,
}

//redux mapping function (converted to an object now) that determine what we want to access
function mapStateToProps(state, ownProps) {
    return {
        trendingMovies: state.trendingMovies,
        popularMovies: state.popularMovies
    };
}


//by using mapDispatchToProps as object redux automatically wraps all actions inside a dispatch
function mapDispatchToProps(dispatch) {
    return{
        actions: bindActionCreators(homePageAction,dispatch)
    }
}

//call to connect to redux
export default connect(mapStateToProps, mapDispatchToProps)(ManageHomePage);
