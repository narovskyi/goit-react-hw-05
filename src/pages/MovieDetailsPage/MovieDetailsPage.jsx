import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import css from './MovieDetailsPage.module.css';
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/BackButton/BackButton";

export default function MovieDetailsPage() {
    const { movieId }  = useParams();
    const [movie, setMovie] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
                setImageUrl(`https://image.tmdb.org/t/p/w300/${response.poster_path}`);
            })
            .catch(err => console.error(err));
    }, [movieId])
    
    const { title, overview, genres, vote_average, vote_count } = movie;

    return (
        <>
            <BackButton pathTo={backLinkRef.current} />
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
        </>     
    );
}