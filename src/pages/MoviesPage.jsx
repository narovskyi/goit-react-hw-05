import MovieFinder from "../components/MovieFinder/MovieFinder";
import MoviesList from "../components/MoviesList/MoviesList";
import { useState } from "react";

export default function MoviesPage() {
    const [movies, setMovies] = useState();

    return (
        <>
            <MovieFinder setMovies={setMovies} />
            {movies && <MoviesList path={''} movies={movies} />}
        </>
    );
}