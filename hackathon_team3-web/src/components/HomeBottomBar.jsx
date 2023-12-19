import React from "react";
import styled from "styled-components";

import {
  HomeIcon,
  SearchIcon,
  CalendarIcon,
  MessageIcon,
  UserIcon,
} from "../assets/index";

const Bottom = styled.div`
  height: 64px;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 16px 27px 16px 28px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;

const Btn = styled.div`
  width: 32px;
  height: 32px;
`;

const BottomBar = () => {
  return (
    <Bottom>
      <Btn>
        <HomeIcon />
      </Btn>
      <Btn>
        <SearchIcon />
      </Btn>
      <Btn>
        <MessageIcon />
      </Btn>
      <Btn>
        <CalendarIcon />
      </Btn>
      <Btn>
        <UserIcon />
      </Btn>
    </Bottom>
  );
};

export default BottomBar;
