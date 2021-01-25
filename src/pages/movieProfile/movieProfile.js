import React, {useState} from 'react';
import "../../utils";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {FaPlay} from "react-icons/all";
import * as homePageAction from "../../redux/actions/homePageActions";
import './movieProfile.scss'
import axios from "axios";
import{VIDEO_LINK,API_KEY} from "../../utils";
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss';

function MovieProfile({currentMovie,genres}) {

    const {vote_average, id, release_date, backdrop_path, overview, poster_path, title} = currentMovie;

const [mov,setMov] = useState('');
const [trailer,setTrailer]=useState(false);

   async function checkTrailer(){
        if(mov === ''){
            const url = `${VIDEO_LINK}${id}/videos${API_KEY}`;
            axios.get(url).then(response => {
                setMov( response.data.results[0].key );

            });

        }
        setTrailer(true);

     }

    return (
        <>
           <div className={"container-profile"} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`}}>
                {
                    trailer
                    ?
                    <ModalVideo
                        channel="youtube"
                        isOpen={trailer}
                        videoId={mov}
                        onClose={() => setTrailer(false)}
                    />
                    :
                    <div className={'content'}>
                        <div className={"info"}>
                            <div className={"profile-img"}>
                                <div className={"img-container"}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                                </div>
                            </div>
                            <div className="profile-text">
                                <h2>{title}</h2>
                                <ul className={'sub-title'}>
                                    <li><small>{vote_average === 0 ? "No ratings yet" : `Rating: ${vote_average}`} </small></li>
                                    <li> <small>Year: {release_date.substr(0, 4)} </small></li>
                                </ul>
                                <br/>
                               <ul className={"genres"}>
                                   <li>{genres.genres[0].name}</li>
                                   <li>{genres.genres[1].name}</li>
                                   <li>{genres.genres[2].name}</li>
                               </ul>
                                <p className={"description"}>{overview}</p>
                                <ul>
                                    <li className={'trailer-btn'} onClick={checkTrailer}>
                                        trailer
                                        <FaPlay/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                }
           </div>
        </>
    )
}
MovieProfile.prototypes = {
    trailer: PropTypes.array.isRequired,
    searchTrailer: PropTypes.func.isRequired,
    currentMovie :PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        trailer: state.homePageReducer.trailer,
        currentMovie: state.homePageReducer.currentMovie,
        genres: state.homePageReducer.genres
    };
}

const mapDispatchToProps = {
    searchTrailer:  homePageAction.searchTrailer()
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
