import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import css from './SharedLayout.module.css'
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
    return (
        <>
            <Header />
            <div className={css.container}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
}