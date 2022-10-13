import styled from "@emotion/styled";

const Base = styled.div`
  position: relative;
  background: #f8f8f8;
`;
const TopInfo = styled.div`
  border-bottom: 1px solid rgba(227, 227, 227);
  background: rgb(255, 255, 255);
`;
const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Backdrop = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0.35) 2%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  overflow: hidden;
`;
const LeftBlur = styled.div`
  flex: 1 1 0%;
  background: rgb(178, 196, 229);
`;
const RightBlur = styled.div`
  flex: 1 1 0;
  background: rgb(184, 184, 184);
`;
const LeftGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    -90deg,
    rgba(178, 196, 229, 0) 0%,
    rgb(178, 196, 229) 100%
  );
`;
const RightGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(
    90deg,
    rgba(184, 184, 184, 0) 0%,
    rgb(184, 184, 184) 100%
  );
`;
const BackdropImage = styled.div<{ imageUrl: string }>`
  background: url(${({ imageUrl }) => imageUrl}) center center / cover no-repeat;
  width: 1024px;
  position: relative;
  top: auto;
  left: auto;
  height: 100%;
  filter: none;
`;
const PosterWrapper = styled.div`
  position: absolute;
  width: 166px;
  height: 238px;
  border-bottom: 1px solid #fff;
  top: -48px;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 0 2px rgb(0 0 0 / 30%);
  background: #fff;
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Main = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;
const Container = styled.div`
  margin-left: 191px;
  text-align: left;
`;
const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  line-height: 40px;
`;
const Keyword = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
`;
const AverageRate = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
  margin-top: 14px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  > svg {
    vertical-align: middle;
  }
`;
const Action = styled.div`
  margin-top: 20px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StarRate = styled.div`
  width: 200px;
  height: 57px;
  margin: 0;
  text-align: center;
`;
const StarRateText = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: #787878;
`;
const RatingWrapper = styled.div`
  margin-top: 8px;
`;
const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #ededed;
  float: left;
`;
const ActionButtonContainer = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ActionButton = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    margin-right: 7px;
    width: 20px;
    height: 20px;
  }
  &:hover {
    color: #ff0558;
  }
`;
const BottomInfo = styled.div`
  padding: 28px 0 48px;
  max-width: 960px;
  margin: 0 auto;
`;
const ContentSectionContainer = styled.div`
  border: 1px solid #e3e3e3;
  border-bottom: none;
  border-radius: 6px 6px 0 0;
  background: #fff;
`;

export {
  Action,
  ActionButton,
  ActionButtonContainer,
  AverageRate,
  Backdrop,
  BackdropImage,
  BottomInfo,
  Container,
  ContentSectionContainer,
  Divider,
  Keyword,
  LeftBlur,
  Main,
  Poster,
  PosterContainer,
  PosterWrapper,
  RatingWrapper,
  RightBlur,
  StarRate,
  StarRateText,
  Title,
  TopInfo,
  LeftGradient,
  RightGradient,
  Base,
};
