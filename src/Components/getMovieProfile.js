const apiCalls ={
  getProfile: () =>{

        async function getMovieProfile({movieId, movieList,setCurrentMovie,currentMovie}) {

            const filteredMovie = movieList.filter(movie => movie.id === movieId);
            const newCurrentMovie = filteredMovie.length > 0? filteredMovie[0]: null;

            setCurrentMovie({currentMovie: newCurrentMovie});

        }


    },

 closeMovieInfo: (setState) => {
    setState=({currentMovie : null})
}
};


export default apiCalls;

