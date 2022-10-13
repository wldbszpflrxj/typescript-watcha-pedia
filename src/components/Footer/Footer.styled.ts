import styled from "@emotion/styled";

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;
const Section = styled.section`
  background: #1c1d1f;
`;
const Statistics = styled.section`
  background: #101113;
  width: 100%;
  height: 62px;
  line-height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Summary = styled.p`
  color: #d1d1d2;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;
const Emphasis = styled.b`
  color: #ff0558;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  margin: 0 10px;
  > svg {
    vertical-align: middle;
  }
`;
const Container = styled.section`
  background: #1c1d1f;
  padding: 20px 0 38px;
`;
const ContentWrapper = styled.div`
  display: flex;
  margin: 0 60px;
`;
const Left = styled.div``;
const Right = styled.div``;
const TermAndPolicy = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const TermAndPolicyItem = styled.li`
  display: inline-block;
  color: #a5a5a7;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 1px;
      height: 12px;
      margin: 5px 8px 0;
    }
  }
`;

export {
  Base,
  Container,
  ContentWrapper,
  Emphasis,
  Left,
  Right,
  Section,
  Statistics,
  Summary,
  TermAndPolicy,
  TermAndPolicyItem,
};
