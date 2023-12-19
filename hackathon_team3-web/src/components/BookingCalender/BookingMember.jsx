import React from 'react'

import * as S from './BookingCalender.styles'

const BookingMember = ({ text, onClick }) => {

  return (
    <S.BookingMember onClick={onClick}>{text}명</S.BookingMember>
  )
}

export default BookingMember