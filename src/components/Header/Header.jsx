import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.styledLink, isActive && css.active);
};

export default function Header() {
    return (
        <header className={css.headerWrap}>
            <nav className={css.navigation}>
                <NavLink className={buildLinkClass} to="/">Home</NavLink>
                <NavLink className={buildLinkClass} to="/movies">Movies</NavLink>
            </nav>
        </header>
    );
} 