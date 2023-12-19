import React from 'react'
import BookingBar from '../BookingBar/BookingBar'

import * as O from "../BookingCheck/BookingCheck.styles"
import * as S from "./BookingFinalCheck.styles"

import { IconCalender, IconClock, IconUsers, IconUncheck } from "../../assets/index"
import { useState } from 'react';
import BookingFinish from '../BookingFinish/BookingFinish'

const BookingFinalCheck = ({ setIsBookingOpen }) => {

  const [isNext, setIsNext] = useState(false);

  const handleRightBtnClick = () => {
    setIsNext(true);
    console.log(isNext)
  }

  return (
    !isNext ? (
        <BookingBar leftBtn={"취소"} rightBtn={"예약 확정"} setIsBookingOpen={setIsBookingOpen} rightBtnOnClick={() => handleRightBtnClick()}>
        <O.BookingCheckHeading>예약을 최종 확정하시겠어요?</O.BookingCheckHeading>
        <div style={{background: '#D9D9D9', height: '3px',}}></div>
        <O.BookingCheckName>센시티브서울</O.BookingCheckName>
        <O.BookingCheckLabel>한남동 · 이탈리아 음식</O.BookingCheckLabel>
        <O.BookingCheckContainer>
            <O.Icon>
                <IconCalender></IconCalender>
                <O.IconLabel>1.06(금)</O.IconLabel>
            </O.Icon>
            <O.Icon>
                <IconClock></IconClock>
                <O.IconLabel>오후 6:30</O.IconLabel>
            </O.Icon>
            <O.Icon style={{'marginRight': '0px'}}>
                <IconUsers></IconUsers>
                <O.IconLabel>2명</O.IconLabel>
            </O.Icon>
        </O.BookingCheckContainer>
        <O.BookingCheckWarning>
            예약 확정 버튼을 누르면 예약이 최종 확정되며,
            레스토랑에 고객님의 예약이 자동으로등록됩니다.
        </O.BookingCheckWarning>
        <S.BookingCheckSublabel>계속 진행하시겠어요?</S.BookingCheckSublabel>
        <S.BookingCheckInput>
            <IconUncheck></IconUncheck>
            <S.BookingCheckInputLabel>다시 보지 않기</S.BookingCheckInputLabel>
        </S.BookingCheckInput>
    </BookingBar>
    ) : (<BookingFinish></BookingFinish>)
    
  )
}

export default BookingFinalCheck