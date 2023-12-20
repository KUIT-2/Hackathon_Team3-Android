import React from 'react'
import BookingBar from '../BookingBar/BookingBar'

import * as O from "../BookingCheck/BookingCheck.styles"
import * as S from "./BookingFinish.styles"
import { useNavigate } from 'react-router-dom'

const BookingFinish = ({ store, nowDate, nowDay, selectedMember, times, setIsBookingOpen }) => {
  const navigate = useNavigate();

  return (
    <BookingBar leftBtn={"메인으로 가기"} rightBtn={"예약내역 확인"}
      setIsBookingOpen={setIsBookingOpen} 
      leftBtnOnClick={() =>  navigate('/')}
      >
        <O.BookingCheckHeading>예약이 완료되었습니다.</O.BookingCheckHeading>
        <S.BookingStoreContainer>
            <S.BookingStoreLabel>레스토랑 이름</S.BookingStoreLabel>
            <S.BookingStoreName>{store.name}</S.BookingStoreName>
        </S.BookingStoreContainer>
        <S.BookingDateContainer>
            <S.BookingDateLabel>예약일시</S.BookingDateLabel>
            <S.BookingDate>{nowDate} ({nowDay}) {times} {selectedMember}명</S.BookingDate>
        </S.BookingDateContainer>
    </BookingBar>
  )
}

export default BookingFinish