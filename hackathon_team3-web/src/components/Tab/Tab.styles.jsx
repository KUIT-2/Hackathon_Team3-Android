import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabMenusContainer = styled.div`
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
  .number {
    font-size: 13px;
    color: #989898;
  }
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;
