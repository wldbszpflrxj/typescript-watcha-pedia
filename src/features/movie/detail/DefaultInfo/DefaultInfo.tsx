import React from "react";
import * as Styled from "./defaultInfo.styled";

interface Props {
  title: string;
  year: string;
  genres: string;
  runtime: number;
  overview: string;
}
const DefaultInfo: React.FC<Props> = ({
  title,
  year,
  genres,
  runtime,
  overview,
}) => {
  const hour = Math.ceil(runtime / 60);
  const minute = runtime % 60;
  return (
    <Styled.Base>
      <Styled.HeaderWrapper>
        <Styled.Header>
          <Styled.Title>기본 정보</Styled.Title>
        </Styled.Header>
        <Styled.Summary>
          {title}
          <br />
          {year} | {genres}
          <br />
          {hour}시간 {minute}분
          <br />
          {overview}
        </Styled.Summary>
      </Styled.HeaderWrapper>
    </Styled.Base>
  );
};

export default DefaultInfo;
