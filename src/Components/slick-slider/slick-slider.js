import React,{useState,useEffect} from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './App.css';

function SlickSlider() {

    const [TrendingTodayMovies, setTrending] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch (`${proxy}https://api.themoviedb.org/3/trending/all/day?api_key=67b347978ffe14fc5d6f8a664a1829f2`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();
    }, []);
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        autoplay: true,
        arrows: true,
        className: 'slides'
    };

    return (
        <div className="App">
            <Slider {...settings}>
                {
                    TrendingTodayMovies.map((movie, i) => {
                        return <div className="carousel-item" key={i}>
                            <img  style={{width:"100%"}} src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={'hey'} key={i}/>
                        </div>
                    })
                }
            </Slider>
        </div>
    );
}

export default SlickSlider;
