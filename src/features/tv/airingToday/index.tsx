import React from "react";
import Slide from "../../../components/Slide/Slide";
import Card from "../../../components/Card/Card";
import * as Styled from "./airingToday.styled";
import useAiringTodayTv from "./useAiringTodayTv";
import { ROUTES } from "../../../constants/route";

const AiringTodaySection: React.FC = () => {
  const { data, isLoading } = useAiringTodayTv();
  const tvList = data?.data.results;

  const getYear = (date: string) => date.split("-")[0];

  return (
    <Styled.Base>
      <Styled.Title>오늘 방송되는 프로그램</Styled.Title>
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

export default AiringTodaySection;
