import React from 'react'

import * as S from "./BookingBar.styles"

const BookingBar = ({ children, leftBtn, rightBtn }) => {
  return (
    <S.BookingBarContainer>
      {children}
      <S.BookingBtns>
        <S.BookingCancel>{leftBtn}</S.BookingCancel>
        <S.BookingGo>{rightBtn}</S.BookingGo>
      </S.BookingBtns>
    </S.BookingBarContainer>
  )
}

export default BookingBar