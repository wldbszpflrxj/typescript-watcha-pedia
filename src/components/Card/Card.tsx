import React from "react";
import * as Styled from "./Card.styled";
import { AiFillStar, AiOutlineFileImage } from "react-icons/ai";

interface Props {
  linkUrl: string;
  title: string;
  year: string;
  posterPath: string;
  voteAverage: number;
}

const Card: React.FC<Props> = ({
  linkUrl,
  posterPath,
  title,
  voteAverage,
  year,
}) => {
  return (
    <Styled.StyledLink to={linkUrl}>
      <Styled.Base>
        <Styled.ImageWrapper>
          {!posterPath ? (
            <Styled.NonImage>
              <AiOutlineFileImage />
            </Styled.NonImage>
          ) : (
            <Styled.Image
              src={`${process.env.REACT_APP_IMAGE_URL}${posterPath}`}
              alt={`${title}의 포스터`}
            />
          )}
        </Styled.ImageWrapper>
        <Styled.Info>
          <Styled.Title>{title}</Styled.Title>
          <Styled.FlexBox>
            <Styled.Keyword>{year}</Styled.Keyword>
            <Styled.Average>
              <AiFillStar />
              <span>{voteAverage}</span>
            </Styled.Average>
          </Styled.FlexBox>
        </Styled.Info>
      </Styled.Base>
    </Styled.StyledLink>
  );
};

export default Card;
