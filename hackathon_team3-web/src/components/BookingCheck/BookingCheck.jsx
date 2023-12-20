import React from "react";
import BookingBar from "../BookingBar/BookingBar";
import BookingFinalCheck from "../BookingFinalCheck/BookingFinalCheck";

import * as S from "./BookingCheck.styles";
import { IconCalender, IconClock, IconUsers } from "../../assets/index";
import { useState } from "react";

const BookingCheck = ({ store, nowDate, nowDay, setIsBookingOpen, selectedMember, times }) => {
  const [isNext, setIsNext] = useState(false);

  const handleRightBtnClick = () => {
    setIsNext(true);
    console.log(isNext)
  }
  
  return (
    !isNext ? (
        <BookingBar leftBtn={"취소"} rightBtn={"확인"} setIsBookingOpen={setIsBookingOpen} rightBtnOnClick={() => handleRightBtnClick()}
        leftBtnOnClick={() => setIsBookingOpen(false)}>
        <S.BookingCheckHeading>{nowDate} 방문이 맞으신가요?</S.BookingCheckHeading>
        <div style={{background: '#D9D9D9', height: '3px',}}></div>
        <S.BookingCheckSubheading>방문 일정을 다시 한 번 확인해 주세요.</S.BookingCheckSubheading>
        <S.BookingCheckName>{store.name}</S.BookingCheckName>
        <S.BookingCheckLabel>{store.region} · {store.category}</S.BookingCheckLabel>
        <S.BookingCheckContainer>
            <S.Icon>
                <IconCalender></IconCalender>
                <S.IconLabel>{nowDate} ({nowDay})</S.IconLabel>
            </S.Icon>
            <S.Icon>
                <IconClock></IconClock>
                <S.IconLabel>13 : 30</S.IconLabel>
            </S.Icon>
            <S.Icon style={{'marginRight': '0px'}}>
                <IconUsers></IconUsers>
                <S.IconLabel>{selectedMember}명</S.IconLabel>
            </S.Icon>
        </S.BookingCheckContainer>
        <S.BookingCheckWarning>당일취소 및 노쇼는 레스토랑 뿐만 아니라
            다른 고객님께도 피해가 될 수 있으므로 신중히 예약 부탁드립니다 :)
        </S.BookingCheckWarning>
    </BookingBar>
    ): (<BookingFinalCheck store={store} nowDate={nowDate} nowDay={nowDay} selectedMember={selectedMember} time={times} setIsBookingOpen={setIsBookingOpen}></BookingFinalCheck>)
  )
};

export default BookingCheck;
