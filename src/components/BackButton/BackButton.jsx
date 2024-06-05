import { NavLink } from 'react-router-dom';
import css from './BackButton.module.css'
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function BackButton({ pathTo }) {
    // console.log(typeof(pathTo));
    return (
        <NavLink className={css.btn} to={pathTo}>
            <HiArrowNarrowLeft />
            Back
        </NavLink>
    );
}