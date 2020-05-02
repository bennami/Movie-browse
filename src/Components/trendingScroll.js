import React from "react"

function TrendingScroll(props){
        return (
            <div className={'wrapper container'}>
                <h1>Trending right now</h1>
                <section className={"carousel"} id={"section1"}>
                    {
                        props.movieList.map((movie, i) => {
                            return <div key={i} className={"item"}><img src={`https://image.tmdb.org/t/p/w200/.${movie.poster_path}`} alt=""/></div>
                        })
                    }
                </section>
            </div>


        )
}

export default TrendingScroll;
