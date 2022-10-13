import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import MovieDetailPage from "../features/movie/detail";

const MovieDetail: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <MovieDetailPage />
      </Layout>
      <Footer />
    </>
  );
};

export default MovieDetail;
