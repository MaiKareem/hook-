import MovieCard from "./MovieCard"


function MovieList({movies}) {
  
    return(
        <div className="row justify-content-center">
        {movies.map((item,index) => (
            <MovieCard key={index} Movies={item} />
            ))}

        </div>
        
    )
        }
export default MovieList;