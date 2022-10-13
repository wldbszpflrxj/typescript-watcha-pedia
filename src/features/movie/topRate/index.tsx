import React from "react";
import Slide from "../../../components/Slide/Slide";
import Card from "../../../components/Card/Card";
import * as Styled from "./topRate.styled";
import useTopRateMovie from "./useTopRateMovie";
import { ROUTES } from "../../../constants/route";

const TopRateMovieSection: React.FC = () => {
  const { data, isLoading } = useTopRateMovie();
  const movieList = data?.data.results;

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Styled.Base>
      <Styled.Title>최고 평점순</Styled.Title>
      {isLoading || !movieList ? (
        <div>Loading...</div>
      ) : (
        <Slide>
          {movieList.map((movie) => (
            <Card
              key={movie.id}
              linkUrl={`${ROUTES.MOVIE}/${movie.id}`}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              year={getYear(movie.release_date)}
            />
          ))}
        </Slide>
      )}
    </Styled.Base>
  );
};

export default TopRateMovieSection;
