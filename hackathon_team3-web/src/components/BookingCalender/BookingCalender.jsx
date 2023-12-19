import React, { useState } from 'react'
import BookingBar from '../BookingBar/BookingBar'
import BookingMember from './BookingMember'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from "moment"

import * as S from "./BookingCalender.styles"

const BookingCalender = () => {
  const numberOfMembers = 80;
  const [selectedMember, setSelectedMember] = useState(0);

  const setMembers = ( member ) => {
    setSelectedMember(member)
    console.log(selectedMember)
  }

  const memberComponents = Array.from({ length: numberOfMembers }, (_, index) => (
    <BookingMember
      key={index}
      text={`${index + 1}`}
      onClick={() => setMembers(index + 1)}
    />
  ));

  const [value, onChange] = useState(new Date())
  const [nowDate, setNowDate] = useState("날짜");

  const handlerDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("MM월 DD일"))
  }

  return (
    <BookingBar leftBtn={"취소"} rightBtn={"확인"}>
      <S.BookingCalenderHeader>
        <S.BookingCalenderToday>오늘</S.BookingCalenderToday>
      </S.BookingCalenderHeader>
      <S.CalendarContainer>
        <Calendar
          className={"calendar"}
          onChange={handlerDateChange}
          value={value}
          formatDay={(locale, date) => date.getDate()}
          next2Label={null}
          prev2Label={null}
        >
        /</Calendar>
      </S.CalendarContainer>
      <div style={{
        background: '#D9D9D9',
        height: '1px',
        width: '80%',
        marginTop: '20px',
      }}></div>
    <S.BookingMemberContainer>
      {memberComponents}
    </S.BookingMemberContainer>
    </BookingBar>
  )
}

export default BookingCalender

// 서현이 넘 예뻐~ 귀여엉 정답 경은언니