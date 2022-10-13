import React from "react";
import { Title } from "../detailPage.styled";
import * as Styled from "./defaultInfo.styled";

interface Props {
  title: string;
  year: string;
  genres: string;
  overview: string;
}
const DefaultInfo: React.FC<Props> = ({ title, year, genres, overview }) => {
  return (
    <Styled.Base>
      <Styled.HeaderWrapper>
        <Styled.Header>
          <Title></Title>
          <Styled.StyleLink to="/overview">
            <Styled.MoreSee>더보기</Styled.MoreSee>
          </Styled.StyleLink>
        </Styled.Header>
        <Styled.Summary>
          {title}
          <br />
          {year} | {genres}
          <br />
          {overview}
        </Styled.Summary>
      </Styled.HeaderWrapper>
    </Styled.Base>
  );
};

export default DefaultInfo;
