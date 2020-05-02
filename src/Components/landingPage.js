import React from "react";
function Landing(props) {

    return(
        <div style={{width: '100%'}}>
            {
                props.movieList.map((movie, i) =>{

                    return <div key={i}
                        style={{background: `linear-gradient(to bottom, rgba(0,0,0,0)39%,rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}'), #1c1c1c`,
                            height:'90vh',
                            backgroundSize:'100%,cover',
                            backgroundPosition: 'center,center',
                            width:'100%',
                        }}>
                        </div>

                })
            }
        </div>

    )
}

export default Landing;
