import React from "react";
import BookingBar from "../BookingBar/BookingBar";

const BookingCalender = ({ setIsBookingOpen }) => {
  return (
    <BookingBar setIsBookingOpen={setIsBookingOpen}>
      <span>달력</span>
    </BookingBar>
  );
};

export default BookingCalender;
