import styled from "@emotion/styled";

const ArrowButton = styled.button`
  padding: 16px;
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  &.slick-next {
    left: auto;
    right: -20px;
    transform: translate(50%, -50%);
  }
  &.slick-prev {
    left: -20px;
    transform: translate(-50%, -50%);
  }
  &:before {
    content: initial;
  }
  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: auto;
    color: #222;
  }
`;

export { ArrowButton };
