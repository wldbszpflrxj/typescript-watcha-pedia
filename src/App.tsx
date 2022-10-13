import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/route";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.TV} element={<TvPage />} />
        <Route path={`${ROUTES.TV}/:tvId`} element={<TvDetail />} />
        <Route path={`${ROUTES.MOVIE}/:movieId`} element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
