import React from 'react'

import * as S from './BookingCalender.styles'

const BookingTime = ({ startTime }) => {
  return (
    <S.BookingTime>{startTime}</S.BookingTime>
  )
}

export default BookingTime