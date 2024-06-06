import MovieList from "../../components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css';

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState('');
    const [query, setQuery] = useState(searchParams.get("query"));
    

    const handleInputChange = (e) => {
        setMovieTitle(e.target.value);
        setSearchParams({ query: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(movieTitle.trim());
    }
    
    useEffect(() => {
        if (query === undefined || query === '' || query === null) {
            return;
        }
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6e502cbaaa880d060a13b6a3192abd0&query=${query}&include_adult=false&language=en-US&page=1`)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results);
            })
            .catch(err => {
                console.log(err);
            });

    }, [query, setMovies])

    return (
        <>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <div className={css.borderWrap}>
                    <button className={css.searchButton} type="submit">
                        <AiOutlineSearch />
                    </button>
                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        value={movieTitle}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            {movies.length > 0 && <MovieList path={''} movies={movies} />}
        </>
    );
}