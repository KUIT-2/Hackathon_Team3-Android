import React from "react";
import BookingCalender from "../../components/BookingCalender/BookingCalender";
import BookingCheck from "../../components/BookingCheck/BookingCheck";
import BookingFinalCheck from "../../components/BookingFinalCheck/BookingFinalCheck";
import BookingFinish from "../../components/BookingFinish/BookingFinish";

const Booking = ({ store, storeId, setIsBookingOpen }) => {
  return (
    <BookingCalender store={store} storeId={storeId} setIsBookingOpen={setIsBookingOpen}></BookingCalender>
  );
};

export default Booking;
