import React from 'react'

import * as S from './BookingCalender.styles'

const BookingTime = ({ startTime, onClick }) => {
  return (
    <S.BookingTime onClick={onClick}>{startTime}</S.BookingTime>
  )
}

export default BookingTime