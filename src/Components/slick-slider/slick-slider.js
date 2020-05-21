import React from 'react';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import './slick-slider.css';

<<<<<<< HEAD
function SlickSlider({popularMovies}) {
=======
function SlickSlider() {

    const [TrendingTodayMovies, setTrending] = useState([]);
    const proxy = "https://cors-anywhere.herokuapp.com/";

    //on load, load List with popular movies
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${proxy}https://api.themoviedb.org/3/trending/all/day?api_key=67b347978ffe14fc5d6f8a664a1829f2`);
            const trending = await response.json();
            setTrending(trending.results);
        }
        fetchData();
          /*  return () => {


            };*/


    }, [TrendingTodayMovies]);
>>>>>>> adding spinner

    const settings = {
        dots: false,
        fade: true,
<<<<<<< HEAD
        infinite: true,
        speed: 150,
=======
        speed: 200,
>>>>>>> fixed weird navbar on safari
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
                                   <ion-icon size={"large"} name="arrow-down"/>
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
