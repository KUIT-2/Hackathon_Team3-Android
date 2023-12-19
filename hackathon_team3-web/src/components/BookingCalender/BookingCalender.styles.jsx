import styled, { css } from "styled-components";

export const BookingCalenderHeader = styled.div`
  display: flex;
`;

export const BookingCalenderToday = styled.div`
  position: absolute;
  margin-top: 32px;
  margin-left: 32px;
  color: #ff3d00;
  font-size: 14px;
  text-decoration: underline;
`;

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;

  .calendar {
    margin-top: 16px;
    line-height: 2rem;

        .react-calendar__navigation {
            display: flex;
            margin-left: 65px;
            height: 44px;
            margin-bottom: 1em;
            width: 60%;
            justify-content: center;
          }
        .react-calendar__navigation__label > span {
            font-size: 16px;
            font-weight: 500;
            color: #000;
        }
        .react-calendar__month-view__weekdays__weekday abbr {
            text-decoration: none;
        }
        .react-calendar__tile--active {
            width: 15px;
            height: 50px;
            color: #fff;
            background: #ff3d00;
            border-radius: 100%;
        }
    }
`

export const BookingMemberContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 20px;
  margin-left: 24px;
  margin-right: 24px;
  gap: 12px;
`;

export const BookingTimeContainer = styled.div`
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 32px;
    margin-left: 24px;
    margin-right: 24px;
    gap: 12px;
`

export const BookingMember = styled.div`
    display: flex;
    padding: 20px;
    width: 50px;
    height: 45px;
    border-radius: 100%;
    border: 1px solid #D9D9D9;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    color: #222;

    ${(props) =>
      props.isSelected &&
      css`
        background-color: #ff3d00; /* Set the background color when isSelected is true */
        color: #ffffff; /* Set the text color when isSelected is true */
      `}
`

export const BookingTime = styled.div`
    display: flex;
    padding: 10px;
    width: 160px;
    height: 39px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    color: #fff;
    background: #ff3d00;

`
