import React, { useState } from "react";
import * as S from "./Tab.styles";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const renderTabContent = () => {
    const tabContents = ["Home", "Menu", "Photo", "Review"];

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
