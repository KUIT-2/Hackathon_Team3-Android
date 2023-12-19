import React from "react";
import BookingCalender from "../../components/BookingCalender/BookingCalender";
import BookingCheck from "../../components/BookingCheck/BookingCheck";
import BookingFinalCheck from "../../components/BookingFinalCheck/BookingFinalCheck";
import BookingFinish from "../../components/BookingFinish/BookingFinish";

const Booking = ({ setIsBookingOpen }) => {
  return (
    <BookingCalender setIsBookingOpen={setIsBookingOpen}></BookingCalender>
    //<BookingCheck></BookingCheck>
    //<BookingFinalCheck></BookingFinalCheck>
    //<BookingFinish></BookingFinish>
  );
};

export default Booking;
