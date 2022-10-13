import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import NowPlayingMovieSection from "../features/movie/nowPlaying";
import PopularMovieSection from "../features/movie/popular";
import TopRateMovieSection from "../features/movie/topRate";
import UpcomingMovieSection from "../features/movie/upcoming";

const ListPage = styled.div`
  max-width: 1200px;
  margin: 100px auto 80px;
`;

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <ListPage>
          <NowPlayingMovieSection />
          <PopularMovieSection />
          <TopRateMovieSection />
          <UpcomingMovieSection />
        </ListPage>
      </Layout>
      <Footer />
    </>
  );
};

export default MainPage;
