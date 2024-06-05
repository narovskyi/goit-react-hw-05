import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './AboutMovie.module.css';
import Loader from "../Loader/Loader";

export default function AboutMovie({ movie: { title, overview, genres, vote_average, vote_count }, imageUrl }) {
    
    return (
        <div className={css.container}>
            <div className={css.flexContainer}>
                <img
                    className={css.image}
                    src={imageUrl}
                    alt=""
                />
                <div>
                    <h1 className={css.title}>{title}</h1>
                    <p className={css.paragraph}><span className={css.subtitle}>Avarage rating:</span> <span className={css.highlight}>{vote_average}</span> ({vote_count})</p>
                    <p className={css.paragraph}><span className={css.subtitle}>Overview:</span></p>
                    <p className={css.overview}>{overview}</p>
                    <p className={css.paragraph}><span className={css.subtitle}>Genres:</span> {genres && genres.map(genre => (<span className={css.highlight} key={genre.id}>{genre.name}</span>))}</p>
                    <NavLink className={css.informationLink} to='cast'>Cast</NavLink>
                    <NavLink className={css.informationLink} to='reviews'>Reviews</NavLink>
                </div>
            </div>
            <Suspense fallback={<Loader />}>
                    <Outlet />
            </Suspense>    
        </div>
    );
}