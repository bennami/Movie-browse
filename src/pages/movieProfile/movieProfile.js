import React, {useState} from 'react';
import "../../utils"
import './movieProfile.scss'

function MovieProfile(props) {

    const {vote_average, release_date, backdrop_path, overview, poster_path, genre_ids, title} = props.currentMovie;

    /* const [genre, setGenre] = useState();
    function isGenre() {
        return props.genre.id === genre_ids[0]

    }*/

    return (
        <>
            <div className={"container-profile bg"}
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`}}
            >
                <div className={'content'}>
                    <div className={"icon"} style={{display:"flex"}}>
                        <ion-icon size="large" name="close-outline" onClick={props.closeMovieInfo} style={{color: "whitesmoke", cursor: "pointer"}}/>
                    </div>
                    <div className={"profile-img"}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                    </div>
                    <div className="profile-text">
                        <h2>{title}</h2>
                            <div className={'sub-title'}>
                                <p><small>{vote_average === 0 ? "": `Rating: ${vote_average}` } </small></p>
                                <p> <small>Release date: {release_date.substr(0,4)} </small></p>
                                <p> <small> trailer </small></p>
                            </div>
                        <br/>
                        <p>
                            {
                                genre_ids.map(id => {
                                    if (id === props.genre.id) {
                                        console.log(props.genre.name);
                                        return props.genre.name
                                    } else {
                                        return ""
                                    }
                                })
                            }
                        </p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieProfile;
