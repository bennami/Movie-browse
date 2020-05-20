import React from "react";
import "./../assets/css/slider.scss"
/*import 'bootstrap/dist/css/bootstrap.min.css';*/

function Carousel(props) {

    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    props.movie.map((movie, i) => {
                           return <li data-target="#carouselExampleIndicators" data-slide-to={i} className="active"/>
                    })
                }

            </ol>
            <div className="carousel-inner" role={"listbox"}>
                {
                    props.movie.map((movie, i) => {
                        if(i === 0){
                            return   <div className="carousel-item active">
                                    <img className={"d-block w-100 "} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={i}/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>Browse through the biggest movie library</h3>
                                </div>
                                    </div>
                        }else{
                            return  <div className="carousel-item">
                                    <img className={"d-block w-100 "} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={i}/>
                                    </div>
                        }
                    })
                }

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )

}

export default Carousel
