import { useEffect, useState } from "react";
import css from './HomePage.module.css';
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
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
            {!isError && <h1 className={css.title}>Trending Today</h1>}
            {trendingMovies && <MovieList path={`movies/`} movies={trendingMovies} />}
            {isError && <h1 className={css.title}>Sorry, something went wrong...</h1>}
        </>
    );
}