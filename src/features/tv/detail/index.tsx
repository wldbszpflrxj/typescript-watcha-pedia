import React, { useMemo } from "react";
import * as Styled from "./detailPage.styled";
import { useParams } from "react-router-dom";
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
import useTvDetail from "./useTvDetail";

type Params = {
  tvId: string;
};

const TvDetailPage = () => {
  const { tvId } = useParams<Params>();
  const { isLoading, data } = useTvDetail(tvId!);
  const tv = data?.data;
  console.log(tv);

  const year = useMemo(() => {
    return tv?.first_air_date.split("-")[0] || "";
  }, [tv]);
  const genres = useMemo(() => {
    return tv?.genres.map((genre) => genre.name).join("/") || "";
  }, [tv]);

  return (
    <Styled.Base>
      {isLoading || !tv ? (
        <div>Loading</div>
      ) : (
        <>
          <Styled.TopInfo>
            <Styled.PosterContainer>
              <Styled.Backdrop>
                <Styled.LeftBlur />
                <Styled.BackdropImage
                  imageUrl={`${process.env.REACT_APP_IMAGE_URL}${tv.backdrop_path}`}
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
                    src={`${process.env.REACT_APP_IMAGE_URL}/${tv.poster_path}`}
                  />
                </Styled.PosterWrapper>
                <Styled.Title>{tv.name}</Styled.Title>
                <Styled.Keyword>
                  {year} | {genres}
                </Styled.Keyword>
                <Styled.AverageRate>
                  평균 <AiFillStar />
                  {tv.vote_average}({tv.vote_count})
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
                title={tv.name}
                year={year}
                genres={genres}
                overview={tv.overview}
              />
              <Similar id={String(tv.id)} />
            </Styled.ContentSectionContainer>
          </Styled.BottomInfo>
        </>
      )}
    </Styled.Base>
  );
};

export default TvDetailPage;
