import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabMenusContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  .activeTab {
    border-bottom: 3px solid black;
    font-weight: bold;
  }
  .tab {
    border-bottom: 3px solid #d9d9d9;
    color: #989898;
  }
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

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
    <TabContainer>
      <TabMenusContainer>
        {["홈", "메뉴", "사진", "리뷰"].map((tab, index) => (
          <TabMenu
            key={index}
            onClick={() => handleTabClick(index)}
            className={index === activeTab ? "activeTab" : "tab"}
          >
            {tab}
          </TabMenu>
        ))}
      </TabMenusContainer>
      <div>{renderTabContent()}</div>
    </TabContainer>
  );
};

export default Tab;
