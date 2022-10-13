import React from "react";
import Card from "../../../components/Card/Card";
import { ROUTES } from "../../../constants/route";
import * as Styled from "./latest.styled";
import useLatestMoive from "./useLatestMovie";

const LatestMovieSection: React.FC = () => {
  const { data, isLoading } = useLatestMoive();
  const movieList = data?.data;

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Styled.Base>
      <Styled.Title>최근 개봉작</Styled.Title>
      {isLoading || !movieList ? (
        <div>Loading...</div>
      ) : (
        <Card
          linkUrl={`${ROUTES.MOVIE}/${movieList.id}`}
          title={movieList.title}
          posterPath={movieList.poster_path}
          voteAverage={movieList.vote_average}
          year={getYear(movieList.release_date)}
        />
      )}
    </Styled.Base>
  );
};

export default LatestMovieSection;
