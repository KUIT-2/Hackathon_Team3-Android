import styled from "styled-components";

export const Outer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #909090;
  opacity: 0.5;
`;

export const BookingBarContainer = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0px;
    border-radius: 24px;
    background: #fff;
`

export const BookingBtns = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export const BookingCancel = styled.div`
  display: flex;
  width: 160px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
  margin-right: 16px;
  justify-content: center;
  align-items: center;

  color: #222;
  font-size: 14px;
  font-weight: 600;
`;

export const BookingGo = styled.div`
  display: flex;
  width: 160px;
  height: 44px;
  border-radius: 4px;
  border: 1px solid;
  justify-content: center;
  align-items: center;

  color: #222;
  font-size: 14px;
  font-weight: 600;
  background-color: #ff3d00;
  color: #fff;
`;
