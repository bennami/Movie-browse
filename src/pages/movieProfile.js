import React, {useState} from 'react';
import "../utils"
import './movieProfile.scss'

function MovieProfile(props) {
const [genre, setGenre] =useState();

        function isGenre() {

            return props.genre.id === props.currentMovie.genre_ids[0]

        }

    props.currentMovie.genre_ids.map(id =>{
        if(id === props.genre.id){
           console.log(props.genre.name) ;
            return props.genre.name
        }else{
            return ""
        }



    });


        return (
            <>

            <div className={"container-profile bg"}
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.currentMovie.backdrop_path})`}}
            >

                <div className={'content'}>
                    <ion-icon size="large" name="close-outline" onClick={props.closeMovieInfo} style={{color: "whitesmoke", cursor: "pointer"}}/>

                <div className={"profile-img"}>
                   <img src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`} alt={props.currentMovie.title}/>
                </div>
                <div className="profile-text">

                    <h2>{props.currentMovie.title}</h2>

                    <div className={'sub-title'}>
                    <p><small>{props.currentMovie.vote_average === 0 ? "": `Rating: ${props.currentMovie.vote_average}` } </small></p>
                    <p> <small>Release date: {props.currentMovie.release_date.substr(0,4)} </small></p>
                    <p> <small> {

                    }trailer </small></p>
                    </div>
                    <br/>
                    <p>
                        {
                            props.currentMovie.genre_ids.map(id => {
                                if (id === props.genre.id) {
                                    console.log(props.genre.name);
                                    return props.genre.name
                                } else {
                                    return ""
                                }
                            })
                        }

                        </p>
                    <p>{props.currentMovie.overview}</p>

                </div>
                </div>

            </div>
</>
        );
}

export default MovieProfile;
