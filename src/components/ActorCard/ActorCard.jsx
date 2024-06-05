import css from './ActorCard.module.css';

export default function ActorCard({ name, character, photoPath }) {
    return (
        <li className={css.card}>
            <img className={css.image} src={`https://image.tmdb.org/t/p/w200${photoPath}`} alt="" />
            <p className={css.name}>{name}</p>
            <p className={css.character}>{character}</p>
        </li>
    );
}