import styled from "styled-components";

export const BookingCalenderHeader = styled.div`
    display: flex;
`

export const BookingCalenderToday = styled.div`
    width: wrap-content;
    margin-top: 32px;
    margin-left: 32px;
    color: #ff3d00;
    text-size: 14px;
    text-decoration: underline;
`

export const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;

    .calendar {
        margin-top: 32px;
        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
            width: 30px;
            height: 30px;
            color: #fff;
            background: #ff3d00;
            border-radius: 100%;
        }
`
export const BookingMemberContainer = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 20px;
    margin-left: 24px;
    gap: 12px;
`

export const BookingMember = styled.div`
    display: flex;
    padding: 10px;
    width: 44px;
    height: 44px;
    border-radius: 100%;
    border: 1px solid #D9D9D9;
    justify-content: center;
    align-items: center;

    text-size: 14px;
    color: #222;

    ${({ isSelected }) =>
    isSelected &&
    `
      color: #fff; /* Text color when selected */
      background-color: #3498db; /* Background color when selected */
    `}
`
