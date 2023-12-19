import React from 'react'
import BookingBar from '../BookingBar/BookingBar'

import * as O from "../BookingCheck/BookingCheck.styles"
import * as S from "./BookingFinish.styles"
import { useNavigate } from 'react-router-dom'

const BookingFinish = ({ setIsBookingOpen }) => {
  const navigate = useNavigate();

  return (
    <BookingBar leftBtn={"메인으로 가기"} rightBtn={"예약내역 확인"}
      setIsBookingOpen={setIsBookingOpen} 
      leftBtnOnClick={() =>  navigate('/')}
      >
        <O.BookingCheckHeading>예약이 완료되었습니다.</O.BookingCheckHeading>
        <S.BookingStoreContainer>
            <S.BookingStoreLabel>레스토랑 이름</S.BookingStoreLabel>
            <S.BookingStoreName>센시티브서울</S.BookingStoreName>
        </S.BookingStoreContainer>
        <S.BookingDateContainer>
            <S.BookingDateLabel>예약일시</S.BookingDateLabel>
            <S.BookingDate>11.11 (목) 오후 6:30 2명</S.BookingDate>
        </S.BookingDateContainer>
    </BookingBar>
  )
}

export default BookingFinish