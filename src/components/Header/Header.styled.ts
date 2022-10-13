import styled from "@emotion/styled";

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  text-align: center;
  box-shadow: rgb(0 0 0 / 0%) 0px 1px 0px 0px;
  width: 100%;
  z-index: 100;
`;
const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;
const MenuListWrapper = styled.div``;
const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;

  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;
const MenuButton = styled.button<{ active?: boolean }>`
  font-size: 15px;
  color: ${({ active }) => (active ? "rgba(53,53,53" : "rgb(126, 126, 126)")};
  cursor: pointer;
  border: none;
  background: none;
`;
const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  /* flex-shrink: 1; */
  margin: 0 0 0 auto;
  position: relative;
`;
const Link = styled.a`
  text-decoration: none;
`;
const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class="primary"] {
    color: rgb(255, 47, 110);
  }
  > span:not(.primary) {
    color: #222;
  }
`;
const SearchContainer = styled.div`
  width: 100%;
`;
const SearchForm = styled.form``;
const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;
const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;
const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;
const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;
const SearchResultWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 999;
  background: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  max-height: 480px;
  overflow-y: scroll;
`;
const SearchResultListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background: #eee;
  }
  > a {
    display: block;
    color: #222;
    font-size: 14px;
    padding: 4px 8px;
    text-decoration: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const SearchResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export {
  Base,
  Navigation,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuListWrapper,
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchLabel,
  SearchMenu,
  SignIn,
  SignUp,
  TextLogo,
  SearchResultList,
  SearchResultListItem,
  SearchResultWrapper,
};
