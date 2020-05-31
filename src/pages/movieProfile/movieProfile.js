import React, {useState} from 'react';
import "../../utils";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import * as homePageAction from "../../redux/actions/homePageActions";
import './movieProfile.scss'
import axios from "axios";
import{VIDEO_LINK,API_KEY} from "../../utils";
import ModalVideo from "react-modal-video";
import 'react-modal-video/scss/modal-video.scss';

function MovieProfile({closeMovieInfo,currentMovie,genre,searchTrailer}) {

    const {vote_average, id, release_date, backdrop_path, overview, poster_path, genre_ids, title} = currentMovie;

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


        /* if(trailer=== undefined){
             searchTrailer(id).catch(error => {
                 alert("loading popular" + error)
             });
         }*/

     }
    console.log(mov)
    return (
        <>
           <div className={"container-profile bg"}
                style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`}}
           >
                    <div className={'content'}>
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
                                    ''
                            }
                        <div  className={'cross'}>
                            <ion-icon size="large" name="close-outline" onClick={closeMovieInfo} style={{color: "whitesmoke", cursor: "pointer"}}/>
                        </div>
                        <div className={"info"}>
                            <div className={"profile-img"}>



                                <div className={"img-container"}>
                                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>

                                </div>
                            </div>
                            <div className="profile-text">
                                <h2>{title}</h2>


                                <div className={'sub-title'}>
                                    <p><small>{vote_average === 0 ? "": `Rating: ${vote_average}` } </small></p>
                                    <p  className={trailer}> <small>Release date: {release_date.substr(0,4)} </small></p>
                                    <p  onClick={checkTrailer}> <small> trailer </small></p>
                                </div>
                                <br/>
                                <p>
                                    {
                                        genre_ids.map(id => {

                                                console.log(id);


                                        })
                                    }
                                </p>
                                <p>{overview}</p>
                            </div>
                        </div>
                    </div>
                </div>

        </>



    )
}
MovieProfile.prototypes = {
    trailer: PropTypes.array.isRequired,
    searchTrailer: PropTypes.func.isRequired,
    currentMovie :PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps) {
    return {
        trailer: state.homePageReducer.trailer,
        currentMovie: state.homePageReducer.currentMovie
    };
}

const mapDispatchToProps = {
    searchTrailer:  homePageAction.searchTrailer()
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieProfile);
