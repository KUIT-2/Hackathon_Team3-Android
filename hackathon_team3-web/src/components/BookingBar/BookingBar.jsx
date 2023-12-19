import React from 'react'

import * as S from "./BookingBar.styles"

const BookingBar = ({ children }) => {
  return (
    <S.BookingBarContainer>
      {children}
    </S.BookingBarContainer>
  )
}

export default BookingBar