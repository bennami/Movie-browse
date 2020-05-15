import React from 'react';
import {IMG_BASE_1280} from "../../utils";
import './movieProfile.scss'
import {useParams} from "react-router-dom";

function MovieProfile(props) {
    const {currentMovie} = useParams();
   // const {vote_average, release_date, backdrop_path, overview, poster_path, genre_ids, title} = currentMovie;

    /* const [genre, setGenre] = useState();
    function isGenre() {
        return props.genre.id === genre_ids[0]

    }*/
console.log(currentMovie);
    return (
        <>
            <div className={"container-profile bg"}
                 style={{backgroundImage: `url(${IMG_BASE_1280}${currentMovie.backdrop_path})`}}
            >
                <div className={'content'}>
                    <div className={"icon"} style={{display:"flex"}}>
                        <ion-icon size="large" name="close-outline" onClick={props.closeMovieInfo} style={{color: "whitesmoke", cursor: "pointer"}}/>
                    </div>
                    <div className={"profile-img"}>
                        <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt={currentMovie.title}/>
                    </div>
                    <div className="profile-text">
                        <h2>{currentMovie.title}</h2>
                            <div className={'sub-title'}>
                                <p><small>{currentMovie.vote_average === 0 ? "": `Rating: ${currentMovie.vote_average}` } </small></p>
                               {/* <p> <small>Release date: {currentMovie.release_date.substr(0,4)} </small></p>*/}
                                <p> <small> trailer </small></p>
                            </div>
                        <br/>
                        <p>
                          {/*  {
                                currentMovie.genre_ids.map(id => {
                                    if (id === props.genre.id) {
                                        console.log(props.genre.name);
                                        return props.genre.name
                                    } else {
                                        return ""
                                    }
                                })
                            }*/}
                        </p>
                        <p>{currentMovie.overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieProfile;