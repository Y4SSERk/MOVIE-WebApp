import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (error) {
                console.error("Failed to fetch popular movies", error);
                setError("Failed to fetch popular movies");
            }
            finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return;
        if (loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.error("Failed to fetch search results", error);
            setError("Failed to fetch search results");
        }   
        finally {
            setLoading(false);
        }

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? ( 
            <div className="loading">Loading...</div> 
        ) : ( 
            <div className="movie-grid">
                {movies.map(
                    (movie) => 
                    (
                        <MovieCard movie={movie} key={movie.id}/>
                    )
                )}
            </div>
            )
        }
    </div>
}

export default Home;