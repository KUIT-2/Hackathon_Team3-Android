import React from 'react'

import * as S from "./BookingBar.styles"

const BookingBar = ({ children }) => {
  return (
    <S.BookingBarContainer>
      {children}
      <S.BookingBtns>
        <S.BookingCancel>취소</S.BookingCancel>
        <S.BookingGo>확인</S.BookingGo>
      </S.BookingBtns>
    </S.BookingBarContainer>
  )
}

export default BookingBar