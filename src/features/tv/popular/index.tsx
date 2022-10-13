import React from "react";
import Slide from "../../../components/Slide/Slide";
import Card from "../../../components/Card/Card";
import * as Styled from "./popular.styled";
import usePopularTv from "./usePopularTv";
import { ROUTES } from "../../../constants/route";

const PopularSection: React.FC = () => {
  const { data, isLoading } = usePopularTv();
  const tvList = data?.data.results;

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Styled.Base>
      <Styled.Title>인기있는 프로그램</Styled.Title>
      {isLoading || !tvList ? (
        <div>Loading...</div>
      ) : (
        <Slide>
          {tvList.map((tv) => (
            <Card
              key={tv.id}
              linkUrl={`${ROUTES.TV}/${tv.id}`}
              title={tv.name}
              posterPath={tv.poster_path}
              voteAverage={tv.vote_average}
              year={getYear(tv.first_air_date)}
            />
          ))}
        </Slide>
      )}
    </Styled.Base>
  );
};

export default PopularSection;
