import { NavLink, useLocation } from "react-router-dom";
import css from './MoviesList.module.css';

export default function MoviesList({ movies, path }) {
    const location = useLocation();

    return (
        <>
            {movies &&
                <ul className={css.list}>
                    {movies.map(({ title, id, poster_path }) => (
                        <li className={css.filmCard} key={id}>
                            <NavLink className={css.styledLink} to={`${path}${id}`} state={{from: location }}>
                                <img className={css.image} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
                            </NavLink>
                            <NavLink className={css.styledLink} to={`${path}${id}`} state={{ from: location }}><h3 className={css.movieTitle}>{title}</h3></NavLink>
                        </li>
                    ))}
                </ul>
            }
        </>
    );
}