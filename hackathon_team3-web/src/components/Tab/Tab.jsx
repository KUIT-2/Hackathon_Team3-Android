import React, { useState } from "react";
import * as S from "./Tab.styles";
import MenuBox from "../MenuBox/MenuBox";
import Photos from "../Photos/Photos";
import ReviewBox from "../ReviewBox/ReviewBox";

const Tab = ({ menus, photos, reviews }) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const renderTabContent = () => {
    const tabContents = [
      "",
      <MenuBox menus={menus} />,
      <Photos photos={photos} />,
      <ReviewBox reviews={reviews} />,
    ];

    return tabContents[activeTab];
  };
  return (
    <S.TabContainer>
      <S.TabMenusContainer>
        {["홈", "메뉴", "사진", "리뷰"].map((tab, index) => (
          <S.TabMenu
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "activeTab" : "tab"}
          >
            {tab}
          </S.TabMenu>
        ))}
      </S.TabMenusContainer>
      <div>{renderTabContent()}</div>
    </S.TabContainer>
  );
};

export default Tab;
