import MovieCard from "../components/MovieCard";
import {useState} from "react";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Movie 1", description: "Description 1" },
        { id: 2, title: "Movie 2", description: "Description 2" },
        { id: 3, title: "Movie 3", description: "Description 3" },
        { id: 4, title: "Movie 4", description: "Description 4" },
        { id: 5, title: "Movie 5", description: "Description 5" },
        { id: 6, title: "Movie 6", description: "Description 6" },
        { id: 7, title: "Movie 7", description: "Description 7" },
        { id: 8, title: "Movie 8", description: "Description 8" },
        { id: 9, title: "Movie 9", description: "Description 9" },
        { id: 10, title: "Movie 10", description: "Description 10" }
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert("Search for: " + searchQuery);
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

        <div className="movie-grid">
            {movies.map(
                (movie) => 
                (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
}

export default Home;