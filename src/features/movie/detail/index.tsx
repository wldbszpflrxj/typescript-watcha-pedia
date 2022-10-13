import React, { useMemo } from "react";
import * as Styled from "./detailPage.styled";
import { useParams } from "react-router-dom";
import useMovieDetail from "./useMovieDetail";
import {
  AiFillStar,
  AiFillHeart,
  AiOutlineComment,
  AiFillEye,
  AiOutlinePlus,
} from "react-icons/ai";
import { Rating } from "@mui/material";
import DefaultInfo from "./DefaultInfo/DefaultInfo";
import Similar from "./Similar/Similar";

type Params = {
  movieId: string;
};

const MovieDetailPage = () => {
  const { movieId } = useParams<Params>();
  const { isLoading, data } = useMovieDetail(movieId!);
  const movie = data?.data;

  const year = useMemo(() => {
    return movie?.release_date.split("-")[0] || "";
  }, [movie]);
  const genres = useMemo(() => {
    return movie?.genres.map((genre) => genre.name).join("/") || "";
  }, [movie]);

  return (
    <Styled.Base>
      {isLoading || !movie ? (
        <div>Loading</div>
      ) : (
        <>
          <Styled.TopInfo>
            <Styled.PosterContainer>
              <Styled.Backdrop>
                <Styled.LeftBlur />
                <Styled.BackdropImage
                  imageUrl={`${process.env.REACT_APP_IMAGE_URL}${movie.backdrop_path}`}
                >
                  <Styled.LeftGradient />
                  <Styled.RightGradient />
                </Styled.BackdropImage>
                <Styled.RightBlur />
              </Styled.Backdrop>
            </Styled.PosterContainer>
            <Styled.Main>
              <Styled.Container>
                <Styled.PosterWrapper>
                  <Styled.Poster
                    src={`${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`}
                  />
                </Styled.PosterWrapper>
                <Styled.Title>{movie.title}</Styled.Title>
                <Styled.Keyword>
                  {year} | {genres}
                </Styled.Keyword>
                <Styled.AverageRate>
                  평균 <AiFillStar />
                  {movie.vote_average}({movie.vote_count})
                </Styled.AverageRate>
                <Styled.Action>
                  <Styled.StarRate>
                    <Styled.StarRateText>평가하기</Styled.StarRateText>
                    <Styled.RatingWrapper>
                      <Rating />
                    </Styled.RatingWrapper>
                  </Styled.StarRate>
                  <Styled.Divider />
                  <Styled.ActionButtonContainer>
                    <Styled.ActionButton>
                      <AiFillHeart />
                      보고싶어요
                    </Styled.ActionButton>
                    <Styled.ActionButton>
                      <AiOutlineComment />
                      코멘트
                    </Styled.ActionButton>
                    <Styled.ActionButton>
                      <AiFillEye />
                      보는중
                    </Styled.ActionButton>
                    <Styled.ActionButton>
                      <AiOutlinePlus />
                      더보기
                    </Styled.ActionButton>
                  </Styled.ActionButtonContainer>
                </Styled.Action>
              </Styled.Container>
            </Styled.Main>
          </Styled.TopInfo>
          <Styled.BottomInfo>
            <Styled.ContentSectionContainer>
              <DefaultInfo
                title={movie.title}
                year={year}
                genres={genres}
                runtime={movie.runtime}
                overview={movie.overview}
              />
              <Similar id={String(movie.id)} />
            </Styled.ContentSectionContainer>
          </Styled.BottomInfo>
        </>
      )}
    </Styled.Base>
  );
};

export default MovieDetailPage;
