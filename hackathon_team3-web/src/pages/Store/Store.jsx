import React, { useState } from "react";
import * as S from "./Store.styles";
import { ArrowLeft, Home, BookMark, Share, Call } from "../../asset";
import Tab from "../../components/Tab/Tab";
import { useNavigate } from "react-router-dom";
import Booking from "../Booking/Booking";

const Store = () => {
  const menus = [
    { name: "철판쭈꾸미", price: 14000 },
    { name: "소금구이", price: 15000 },
    { name: "철판쭈꾸미삼겹", price: 16000 },
  ];
  const photos = ["1", "2", "3", "4", "5", "6", "7"];
  const [isAvailable, setIsAvailable] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingButtonClick = () => {
    if (isAvailable) {
      setIsBookingOpen(true);
    }
  };
  return (
    <>
      <S.Header>
        <div className="svg-container">
          <ArrowLeft />
          <Home />
        </div>
        <div className="svg-container">
          <BookMark />
          <Share />
        </div>
      </S.Header>
      <S.StoreImage></S.StoreImage>
      <S.StoreInfoBox>
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
      </S.StoreInfoBox>
      <S.AddBar>
        <p>레스토랑 함께 고르기</p>
        <button className="add-btn">+담기</button>
      </S.AddBar>
      <Tab menus={menus} photos={photos} />
      <S.Location>
        <h4>매장 위치</h4>
        <p>매장 주소</p>
      </S.Location>
      <S.DetailInfo>
        <h4>상세정보</h4>
        <p className="title">전화번호</p>
        <span className="call">
          <Call />
          <span className="phone-number">050-71409-6602</span>
        </span>
        <p className="title">매장 소개</p>
        <span className="info">안녕하세요</span>
        <p className="title">영업시간</p>
        <span className="info">11:30 - 23:00</span>
      </S.DetailInfo>
      <S.Footer>
        <BookMark />
        <S.BookingButton
          onClick={handleBookingButtonClick}
          isAvailable={isAvailable}
        >
          {isAvailable ? "웨이팅 등록하기" : "바로 입장 가능해요"}
        </S.BookingButton>
      </S.Footer>
      {isBookingOpen ? <Booking setIsBookingOpen={setIsBookingOpen} /> : null}
    </>
  );
};

export default Store;
