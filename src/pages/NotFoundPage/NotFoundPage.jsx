import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (
        <h1 className={css.title}>Oops... Page not found... Go to the <NavLink className={css.styledLink} to="/">home page</NavLink></h1>
    );
}