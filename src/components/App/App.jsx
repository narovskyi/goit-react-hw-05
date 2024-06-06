import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:id' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route> 
      </Routes>
    </>
  );
};

export default App;