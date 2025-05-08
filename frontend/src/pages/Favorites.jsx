import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites) {
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <p>Click on the heart icon to add or remove movies from your favorites</p>
            return <div className="movie-grid">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    }

    return <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites</p>
    </div>
}

export default Favorites;