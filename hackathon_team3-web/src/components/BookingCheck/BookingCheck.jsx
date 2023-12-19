import React from 'react'
import BookingBar from '../BookingBar/BookingBar'

import * as S from './BookingCheck.styles'

const BookingCheck = () => {
  return (
    <BookingBar>
        <S.BookingCheckHeading>내일 방문이 맞으신가요?</S.BookingCheckHeading>
        <div style={{background: '#D9D9D9', height: '3px',}}></div>
        <S.BookingCheckSubheading>방문 일정을 다시 한 번 확인해 주세요.</S.BookingCheckSubheading>
        <S.BookingCheckName>음식점 이름</S.BookingCheckName>
        <S.BookingCheckLabel>지역, 음식 종류</S.BookingCheckLabel>
        <S.BookingCheckContainer>
            
        </S.BookingCheckContainer>
    </BookingBar>
  )
}

export default BookingCheck