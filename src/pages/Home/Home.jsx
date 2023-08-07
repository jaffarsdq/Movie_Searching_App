// Components import
import MovieCard from "../../components/movieCard/MovieCard";
import useMovieList from "../../hooks/useMovieList";

// CSS imports
import './Home.css';

function Home() {

    const {movieList} = useMovieList('harry', 'avengers', 'batman')

    return (
        <>
            <div className="movie-card-wrapper">
                {movieList.length > 0 && movieList.map(movie => <MovieCard 
                                                                    key={movie.imdbID}
                                                                    {...movie} 
                                                                />
                )}
            </div>
            
        </>
    )
}

export default Home;