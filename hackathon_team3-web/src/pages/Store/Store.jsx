import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../../asset/arrow-left.svg";
import { ReactComponent as Home } from "../../asset/home.svg";
import { ReactComponent as BookMark } from "../../asset/header-mark.svg";
import { ReactComponent as Share } from "../../asset/share.svg";
import Tab from "../../components/Tab";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  padding: 20px;
  .svg-container {
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

const StoreImage = styled.div`
  height: 250px;
  background-color: #d9d9d9;
`;

const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-bottom: 9px solid #d9d9d9;
  .info {
    display: flex;
    color: #989898;
    font-size: 12px;
    gap: 5px;
  }
  .rates {
    display: flex;
    gap: 5px;
    .star {
      color: #f5c654;
    }
    .rate {
      font-weight: bold;
    }
    .review {
      color: #989898;
    }
  }
`;

const AddBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 9px solid #d9d9d9;
  p {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .add-btn {
    border-radius: 20px;
    border: 2px solid #d9d9d9;
    background-color: white;
    font-size: 14px;
    padding: 7px 10px;
  }
`;

const Store = () => {
  return (
    <>
      <Header>
        <div className="svg-container">
          <ArrowLeft />
          <Home />
        </div>
        <div className="svg-container">
          <BookMark />
          <Share />
        </div>
      </Header>
      <StoreImage></StoreImage>
      <StoreInfoBox>
        <h3>음식점이름</h3>
        <p>음식점 소개</p>
        <span className="info">
          <p>음식 종류 </p> • <p>지역</p>
        </span>
        <span className="rates">
          <span className="star">★</span>
          <span className="rate">4.3</span>
          <span className="review">(333)</span>
        </span>
      </StoreInfoBox>
      <AddBar>
        <p>레스토랑 함께 고르기</p>
        <button className="add-btn">+담기</button>
      </AddBar>
      <Tab />
    </>
  );
};

export default Store;
