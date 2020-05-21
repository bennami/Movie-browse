import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import apiStatusReducer from "../redux/reducers/apiStatusReducer";
import List from "../Components/commons/List";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from './movieProfile/movieProfile';
import Spinner from "../Components/commons/spinner/Spinner";
import SlickSlider from "../Components/slick-slider/slick-slider";
import {PROXY, API_KEY, BASE_URL, IMG_BASE_200} from "../utils";
import "./App.scss"
import * as homePageAction from "../redux/actions/homePageActions";
import {useSelector} from "react-redux";
import Card from "../Components/commons/Card";


function HomePage({
    loadPopularMovies,
    loadTrendingMovies,
    popularMovies,
    trendingMovies,
    results,
    ...props
    }) {

    useEffect( ()=>{
        if(popularMovies === undefined){
            loadPopularMovies()
                .catch(error => {
                    alert("loading popular" + error)
                })
        }
    },[popularMovies,loadPopularMovies])

    console.log(popularMovies)

   //this way works, but not  using the state as a prop
    const popular = useSelector(state => state.homePageReducer.popularMovies)
    console.log(popular)

    return(
        <>
           {
               popularMovies === undefined
               ?
                  <Spinner/>
               :

                   <List
                       movieList={popularMovies}
                       viewMovieInfo={''}/>



            }
        </>
    )
}

HomePage.prototypes ={
    loadPopularMovies: PropTypes.func.isRequired,
    loadTrendingMovies: PropTypes.func.isRequired,
    popularMovies: PropTypes.array.isRequired,
    trendingMovies: PropTypes.object.isRequired,
    apiStatusReducer:PropTypes.number.isRequired
}
function mapStateToProps(state, ownProps) {
    return{
        trendingMovies: state.homePageReducer.trendingMovies,
        popularMovies: state.homePageReducer.popularMovies,

    };
}

const mapDispatchToProps={
   loadPopularMovies: homePageAction.loadPopularMovies,
   loadTrendingMovies: homePageAction.loadTrendingMovies,
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);




