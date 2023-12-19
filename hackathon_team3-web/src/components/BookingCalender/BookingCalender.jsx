import React, { useEffect, useState } from 'react'
import BookingBar from '../BookingBar/BookingBar'
import BookingMember from './BookingMember'
import Calendar from 'react-calendar'
import './Calendar.css'
import moment from "moment"

import * as S from "./BookingCalender.styles"
import BookingTime from './BookingTime';
import { getTime } from '../../apis/bookingApi'

const BookingCalender = ({ setIsBookingOpen }) => {

  const numberOfMembers = 80;
  const [selectedMember, setSelectedMember] = useState(0);

  const setMembers = ( member ) => {
    setSelectedMember(member)
  }

  const memberComponents = Array.from({ length: numberOfMembers }, (_, index) => (
    <BookingMember
      key={index}
      text={`${index + 1}`}
      onClick={() => setMembers(index + 1)}
    />
  ));

  const timeComponents = Array.from({ length: 10 }, (_, index) => (
    <BookingTime
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

  const setToday = () => {
    const today = new Date();
    onChange(today)
  };

  useEffect(() => {
    getTime()
  })

  return (
    <BookingBar leftBtn={"취소"} rightBtn={"확인"} setIsBookingOpen={setIsBookingOpen} >
      <S.BookingCalenderHeader>
        <S.BookingCalenderToday onClick={() => setToday()}>오늘</S.BookingCalenderToday>
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
        display: 'flex',
        background: '#D9D9D9',
        height: '2px',
        width: '90%',
        marginTop: '20px',
        marginLeft: '20px'
      }}></div>
    <S.BookingMemberContainer>
      {memberComponents}
    </S.BookingMemberContainer>
    <S.BookingTimeContainer>
      {timeComponents}
    </S.BookingTimeContainer>
    </BookingBar>
  );
};

export default BookingCalender