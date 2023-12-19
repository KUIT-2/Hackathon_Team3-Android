import React from 'react'

import * as S from './BookingCalender.styles'

const BookingMember = ({ text }) => {

  return (
    <S.BookingMember>{text}명</S.BookingMember>
  )
}

export default BookingMember