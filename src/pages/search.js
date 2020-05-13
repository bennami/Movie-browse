import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import List from "../Components/commons/List";
import {useParams,useHistory} from "react-router-dom";
import {API_KEY,PROXY,nextPage} from "../utils";
import Pagination from "../Components/commons/Pagination";
import MovieProfile from "./movieProfile/movieProfile";
import Spinner from "../Components/commons/spinner/Spinner";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

function Search() {

    const [movieList, setMovieList] = useState([]);
    const [search, setSearch] = useState('');
    const {name} = useParams();
    const [movieGenres, setMovieGenres] =useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [pagesLink] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(null)
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            setMovieList(null)
            //fetch stream of data
            const response = await fetch(`${PROXY}https://api.themoviedb.org/3/search/movie/${API_KEY}&query=${name}&page=${currentPage}`);
            //convert to json
            const data = await response.json();
            //set json object into moviesList array, every time there is a new search this will refresh itself
            setMovieList(data.results);
            setSearch(name);
            setTotalPages(data.total_pages);

        }
        fetchData();
    }, [name,currentPage]);

    const viewMovieInfo = (id) =>{
        const filteredMovie = movieList.filter(movie => movie.id === id);
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0]: null;
        setCurrentMovie(newCurrentMovie);
        history.push(`/movieProfile/${currentMovie}`);
    };

    const  closeMovieInfo = () => {
        setCurrentMovie( null);
    };

    const nextPage = (currentPage) => {
        setCurrentPage(currentPage);
    };
    return(

        <div>
            {currentMovie === null
             ?
            <>
            <h3>Results for: {search}</h3>
                {
                    movieList === null
                    ?
                        <Spinner/>
                    :
                    <>
                    <List movieList={movieList} viewMovieInfo={viewMovieInfo}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
