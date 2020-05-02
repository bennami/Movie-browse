import React from "react";
import Landing from "./landingPage";
import "./../assets/css/slider.scss"

function Carousel(props) {




    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    props.movie.map((movie, i) => {

                       return <li data-target="#carouselExampleIndicators" data-slide-to={i} className="active"></li>

                    })
                }


            </ol>
            <div className="carousel-inner" role={"listbox"}>
{/*
                <img className={"d-block w-100 active "} src={`https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`} alt={"hey"}/>
*/}
                {
                    props.movie.map((movie, i) => {

               return <div className="carousel-item">
                    <img className={"d-block w-100 "} src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={i}/>
                    </div>
                    })
                }

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>





    )

}

export default Carousel
