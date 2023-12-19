import React from 'react'

import * as S from './BookingCalender.styles'

const BookingMember = ({ text, isSelected }) => {
  // 선택 안됐을 때
  if(!isSelected) {
    
  }else {

  }

  return (
    <S.BookingMember>{text}명</S.BookingMember>
  )
}

export default BookingMember