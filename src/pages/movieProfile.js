import React from 'react';

function MovieProfile(props) {
        return (
            <>
            <p  onClick={props.closeMovieInfo} style={{cursor:"pointer"}}>go back</p>
            <div className={"container-profile"}>

                <div className={"profile-img"}>
                   <img src={`https://image.tmdb.org/t/p/w200/${props.currentMovie.poster_path}`}/>
                </div>
                <div className="profile-text">
                    <h2>{props.currentMovie.title}</h2>
                    <p><small> Popularity:{Math.floor(props.currentMovie.popularity)}%</small></p>
                    <p>{props.currentMovie.overview}</p>
                    <p>Release date: {props.currentMovie.release_date}</p>
                </div>
            </div>
</>
        );
}

export default MovieProfile;
