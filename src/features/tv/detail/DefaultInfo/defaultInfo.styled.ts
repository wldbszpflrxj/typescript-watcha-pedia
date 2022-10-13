import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
const StyleLink = styled(Link)`
  > a {
    text-decoration: none;
    color: #ff2f6e;
  }
`;
const Title = styled.h2`
  color: #000;
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
`;
const Summary = styled.div`
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
`;
const MoreSee = styled.div``;

export {
  Base,
  Header,
  HeaderWrapper,
  Link,
  MoreSee,
  StyleLink,
  Summary,
  Title,
};
