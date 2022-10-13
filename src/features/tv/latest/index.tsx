import React from "react";
import Card from "../../../components/Card/Card";
import { ROUTES } from "../../../constants/route";
import * as Styled from "./latest.styled";
import useLatestTv from "./useLatestTv";

const LatestTvSection: React.FC = () => {
  const { data, isLoading } = useLatestTv();
  const tvList = data?.data;

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Styled.Base>
      <Styled.Title>최근 방송된 프로그램</Styled.Title>
      {isLoading || !tvList ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`${ROUTES.TV}/${tvList.id}`}
          title={tvList.name}
          posterPath={tvList.poster_path}
          voteAverage={tvList.vote_average}
          year={getYear(tvList.first_air_date)}
        />
      )}
    </Styled.Base>
  );
};

export default LatestTvSection;
