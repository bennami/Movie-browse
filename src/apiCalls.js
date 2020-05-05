import axios from "axios";
import {VIDEO_LINK, API_KEY} from "./utils";
import {useState} from "react";

const [movieTrailer, setMovieTrailer]= useState('');
export function getMovieTrailer() {
    const id = this.props.modal;
    const url = `${VIDEO_LINK}${id}/videos${API_KEY}`;
    axios.get(url).then(response => {
        setMovieTrailer( response.data.results[0].key );
    });
}
