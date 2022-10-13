import React from "react";
import styled from "@emotion/styled";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import AiringTodaySection from "../features/tv/airingToday";
import OnTheAirSection from "../features/tv/onTheAir";
import PopularSection from "../features/tv/popular";
import TopRateSection from "../features/tv/topRate";

const ListPage = styled.div`
  max-width: 1200px;
  margin: 100px auto 80px;
`;

const TvPage: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <AiringTodaySection />
        <OnTheAirSection />
        <PopularSection />
        <TopRateSection />
      </Layout>
      <Footer />
    </>
  );
};

export default TvPage;
