import React from "react";
import BookingCalender from "../../components/BookingCalender/BookingCalender";
import BookingCheck from "../../components/BookingCheck/BookingCheck";
import BookingFinalCheck from "../../components/BookingFinalCheck/BookingFinalCheck";
import BookingFinish from "../../components/BookingFinish/BookingFinish";

const Booking = ({ storeId, setIsBookingOpen }) => {
  return (
    <BookingCalender storeId={storeId} setIsBookingOpen={setIsBookingOpen}></BookingCalender>
  );
};

export default Booking;
