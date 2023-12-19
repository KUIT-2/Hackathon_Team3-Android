import React, { useState } from 'react'
import BookingBar from '../BookingBar/BookingBar'
import BookingMember from './BookingMember'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from "moment"

import * as S from "./BookingCalender.styles"


const BookingCalender = ({ setIsBookingOpen }) => {
  const numberOfMembers = 80;
  const [isSelected, setIsSelected] = useState(false);

  const memberComponents = Array.from({ length: numberOfMembers }, (_, index) => (
    <BookingMember
      key={index}
      text={`${index + 1}`}
      isSelected={false}
      onClick={memberSelect()}
    />
  ));

  const [value, onChange] = useState(new Date())
  const [nowDate, setNowDate] = useState("날짜");

  const handlerDateChange = (selectedDate) => {
    onChange(selectedDate);
    setNowDate(moment(selectedDate).format("MM월 DD일"))
  }

  const memberSelect = () => {
  }

  return (
    <BookingBar leftBtn={"취소"} rightBtn={"확인"} setIsBookingOpen={setIsBookingOpen} >
      <S.BookingCalenderHeader>
        <S.BookingCalenderToday>오늘</S.BookingCalenderToday>
      </S.BookingCalenderHeader>
      <S.CalendarContainer>
        <Calendar
          className={"calendar"}
          onChange={handlerDateChange}
          value={value}></Calendar>
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
  );
};

export default BookingCalender

// 서현이 넘 예뻐~ 귀여엉 정답 경은언니
