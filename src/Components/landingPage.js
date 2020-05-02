import React from "react";
function Landing(props) {

    return(
        <div style={{width: '100%', margin:0}}>
            {
                props.movie.map((movie, i) =>{

                    return <div key={i}
                        style={{background: `linear-gradient(to bottom, rgba(0,0,0,0)39%,rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('https://image.tmdb.org/t/p/w780/${movie.poster_path}'), #1c1c1c`,
                            height:'100vh',
                            backgroundSize:'100%,cover',
                            backgroundPosition: 'center,center',
                            width:'100%',
                            position:'relative'
                        }}>
                        </div>

                })
            }



            <div style={{position:'absolute', maxWidth:'500px',bottom:'2rem',marginLeft:'2rem'}}>
                        <h1 style={{color:'white'}} >title</h1>
                        <p style={{color:'white', fontSize:'1rem'}}>text</p>
             </div>
        </div>

    )
}

export default Landing;
