import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// e735b0b6
const API_URL = 'http://www.omdbapi.com/?apikey=e735b0b6&s=';

const App = () => {

    const [movies, setMovies] = useState([]);

    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    } // async means asynchronous data i.e, it takes some time to fetch data from the server

    useEffect(() => {
        searchMovies('avengers');
    }, [])
    var currentYear= new Date().getFullYear(); 
    return (
        <div className="app">
            <h1>Movie Verse</h1>

            <div className="search">
                <input type="text" placeholder="Search for a movie"
                value={searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)}
                onKeyPress = {(event) => {if (event.key === "Enter") searchMovies(searchTerm)}}/>

                <img src={SearchIcon} 
                alt="Search"
                onClick={() => searchMovies(searchTerm)} />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard dummyData = {movie} />
                        ))}
                    </div>
                )
                : (
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
        <footer>
            <a className="font-effect-shadow-multiple font-effect-3d-float" href="https://soumyadev-portfolio-1.netlify.app" target="_blank" rel="noreferrer">Soumyadev's Creations &copy; {currentYear}</a>
        </footer>
        </div>
    );
}

export default App;