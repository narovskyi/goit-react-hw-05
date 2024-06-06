import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './MovieReviews.module.css';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b6e502cbaaa880d060a13b6a3192abd0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                if (!response.success) {
                    setIsError(response.status_message);
                }
                if (response.results.length === 0) {
                    return;
                }
                setReviews(response.results);
            })
            .catch(err => {
                console.log(err);
                setIsError(err);
            });
    }, [movieId]);

  
    return (
        <>
            {!isError && reviews.length < 1 && <h3 className={css.notification}>We do not have any reviews for this movie</h3>}
            {reviews.length > 0 && <ul className={css.reviewList}>
                {reviews && reviews.map(({ id, author, content }) => {
                    return (
                        <li className={css.review} key={id}>
                            <p className={css.author}>{author}</p>
                            <p className={css.content}>{content}</p>
                        </li>
                    );
                })}
            </ul>}
            {isError && <h3 className={css.notification}>Sorry, something went wrong...</h3>}
        </>
    );
}