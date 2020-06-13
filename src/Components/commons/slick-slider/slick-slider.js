import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './slick-slider.css';


function SlickSlider({popularMovies}) {


    const settings = {
        dots: false,
        fade: true,

        speed: 200,

        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        className: 'slides',

    };

    return (
        <div className="App">
            <Slider {...settings}>
                {
                    popularMovies.map((movie, i) => {
                        return <div key={i}>
                            <div className="carousel-item" key={i} style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`}}>
                                <div className={'slider-text'}>
                                    <h1>Movie DB</h1>
                                    <h3>browse through the biggest movie library</h3>
                                    <a href="#popularSection"><ion-icon size={"large"} name="arrow-down"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default SlickSlider;
