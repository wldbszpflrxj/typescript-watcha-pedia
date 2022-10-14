import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  margin-inline: 10px;
`;
const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 330px;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
const NonImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  color: #666;
  font-size: 30px;
  justify-content: center;
  border: 1px solid #ededed;
`;
const Info = styled.div`
  text-align: left;
  width: 100%;
`;
const Title = styled.h4`
  color: #292a32;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  margin-bottom: 3px;
  white-space: nowrap;
  max-width: 200px; ;
`;
const Keyword = styled.div`
  color: #292a32;
  padding-bottom: 1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
const Average = styled.div`
  color: #74747b;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  Average,
  Base,
  Image,
  ImageWrapper,
  Info,
  Keyword,
  Link,
  StyledLink,
  Title,
  FlexBox,
  NonImage,
};
