import styled from "@emotion/styled";

const Base = styled.section`
  padding: 10px 15px;
  border-bottom: 1px solid #ededed;
`;

const HeaderWrapper = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
  margin: 8px 0;
`;
const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 15px;
  row-gap: 24px;
`;
const Link = styled.a`
  text-decoration: none;
`;
const CardContainer = styled.div`
  max-width: 140px;
`;
const PosterWrapper = styled.div`
  width: 140px;
  height: 204px;
  border: 1px solid rgb(234, 233, 232);
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  vertical-align: top;
`;
const Info = styled.div`
  margin: 5px 10px 0 0;
`;
const CardTitle = styled.h3`
  color: rgb(41, 42, 50);
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VoteAverage = styled.div`
  margin-top: 2px;
  color: rgb(120, 120, 120);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  ContentsWrapper,
  Base,
  Header,
  HeaderWrapper,
  CardTitle,
  Link,
  CardContainer,
  Info,
  Poster,
  PosterWrapper,
  VoteAverage,
  Title,
};
