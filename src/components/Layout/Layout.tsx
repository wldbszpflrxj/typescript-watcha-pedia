import React from "react";
import * as Styled from "./Layout.styled";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Layout;
