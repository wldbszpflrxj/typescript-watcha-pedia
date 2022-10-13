import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import TvDetailPage from "../features/tv/detail";

const TvDetail: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <TvDetailPage />
      </Layout>
      <Footer />
    </>
  );
};

export default TvDetail;
