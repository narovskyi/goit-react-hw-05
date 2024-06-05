import { useEffect, useState } from "react";
import css from './TrendingMovies.module.css';
import MoviesList from "../MoviesList/MoviesList";

export default function TrendingMovies() {
    const [trendingMovies, setTrendingMovies] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US')
            .then(response => response.json())
            .then(response => {
                if (!response.success) {
                    setIsError(response.status_message);                   
                }
                setTrendingMovies(response.results);
            })
            .catch(err => {
                console.log(err);
                setIsError(err);
            });
    }, [])

    return (
        <>
            <h1 className={css.title}>Trending Today</h1>
            {trendingMovies && <MoviesList path={`movies/`} movies={trendingMovies} />}
            {isError && <h1 className={css.title}>Sorry, something went wrong...</h1>}
        </>
    );
}