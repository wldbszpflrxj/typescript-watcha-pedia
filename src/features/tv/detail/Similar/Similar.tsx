import React from "react";
import { ROUTES } from "../../../../constants/route";
import * as Styled from "./similar.styled";
import useTvSimilar from "./useTvSimilar";

interface Props {
  id: string;
}
interface SimilarTvProps {
  id: number;
  posterPath: string;
  title: string;
  voteAverage: number;
}
const SimilarTv: React.FC<SimilarTvProps> = ({
  id,
  posterPath,
  title,
  voteAverage,
}) => {
  return (
    <Styled.Link href={`${ROUTES.MOVIE}/${id}`}>
      <Styled.CardContainer>
        <Styled.PosterWrapper>
          <Styled.Poster
            src={`${process.env.REACT_APP_IMAGE_URL}/${posterPath}`}
            alt={`${title}의 포스터`}
          />
        </Styled.PosterWrapper>
        <Styled.Info>
          <Styled.CardTitle>{title}</Styled.CardTitle>
          <Styled.VoteAverage>{voteAverage}</Styled.VoteAverage>
        </Styled.Info>
      </Styled.CardContainer>
    </Styled.Link>
  );
};

const Similar: React.FC<Props> = ({ id }) => {
  const { isLoading, data } = useTvSimilar(id);
  const similarList = data?.data.results;
  return (
    <Styled.Base>
      <Styled.Header>
        <Styled.Title>비슷한 작품</Styled.Title>
      </Styled.Header>
      <Styled.ContentsWrapper>
        {isLoading || !similarList ? (
          <div>Loading</div>
        ) : (
          similarList.map((tv) => (
            <SimilarTv
              key={tv.id}
              id={tv.id}
              posterPath={tv.poster_path}
              title={tv.name}
              voteAverage={tv.vote_average}
            />
          ))
        )}
      </Styled.ContentsWrapper>
    </Styled.Base>
  );
};

export default Similar;
