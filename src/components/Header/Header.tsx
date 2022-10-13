import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/route";
import useSearch from "../../features/useSearch";
import * as Styled from "./Header.styled";

const Header: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchKeyword(e.target.value);
  };
  const { data: searchResult } = useSearch(searchKeyword);
  const searchList = searchResult?.data.results;

  return (
    <Styled.Base>
      <Styled.Navigation>
        <Styled.MenuListWrapper>
          <Styled.MenuList>
            <Styled.Menu>
              <Styled.Link href={ROUTES.HOME}>
                <Styled.TextLogo>
                  <span className="primary">WATCHOUT</span>
                  <span>PEDIA</span>
                </Styled.TextLogo>
              </Styled.Link>
            </Styled.Menu>
            <Styled.Menu>
              <Styled.Link href="/">
                <Styled.MenuButton>영화</Styled.MenuButton>
              </Styled.Link>
            </Styled.Menu>
            <Styled.Menu>
              <Styled.Link href="/TV">
                <Styled.MenuButton>TV 프로그램</Styled.MenuButton>
              </Styled.Link>
            </Styled.Menu>
            <Styled.SearchMenu>
              <Styled.SearchContainer>
                <Styled.SearchForm>
                  <Styled.SearchLabel>
                    <AiOutlineSearch />
                    <Styled.SearchInput
                      placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. "
                      onChange={handleKeyword}
                    />
                  </Styled.SearchLabel>
                </Styled.SearchForm>
              </Styled.SearchContainer>
              <Styled.SearchResultWrapper>
                <Styled.SearchResultList>
                  {searchList?.map((list) => (
                    <Styled.SearchResultListItem key={list.id}>
                      <Link to={`${ROUTES.MOVIE}/${list.id}`}>
                        {list.title}
                      </Link>
                    </Styled.SearchResultListItem>
                  ))}
                </Styled.SearchResultList>
              </Styled.SearchResultWrapper>
            </Styled.SearchMenu>
            <Styled.Menu>
              <Styled.SignIn>로그인</Styled.SignIn>
            </Styled.Menu>
            <Styled.Menu>
              <Styled.SignUp>회원가입</Styled.SignUp>
            </Styled.Menu>
          </Styled.MenuList>
        </Styled.MenuListWrapper>
      </Styled.Navigation>
    </Styled.Base>
  );
};

export default Header;
