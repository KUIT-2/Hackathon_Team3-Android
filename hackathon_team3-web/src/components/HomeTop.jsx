import React from "react";
import styled from "styled-components";

import LogoImg from "../assets/Logo.png";
import { SearchSmallIcon, BookmarkIcon, BellIcon } from "../assets/index";

const Top = styled.div`
  margin-left: 21px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 14px;
`;

const SearchBar = styled.div`
  width: 214px;
  height: 40px;
  background: #e9e9e9;
  display: flex;
  align-items: center;
  margin-right: 14px;
  border-radius: 24px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Search = styled.div`
  width: 24px;
  height: 24px;
  margin-left: 12px;
  margin-right: 10px;
`;

const SearchText = styled.div`
  width: 135px;
  height: 14px;
  color: #838383;
  text-align: center;
  font-size: 10px;
`;

const Icon = styled.div`
  height: 24px;
  margin-right: 12px;
`;

const HomeTop = () => {
  return (
    <Top>
      <Logo src={LogoImg} />
      <SearchBar>
        <Search>
          <SearchSmallIcon />
        </Search>
        <SearchText>지역, 음식, 레스토랑명 검색</SearchText>
      </SearchBar>
      <Icon>
        <BellIcon />
      </Icon>
      <Icon>
        <BookmarkIcon />
      </Icon>
    </Top>
  );
};

export default HomeTop;
