import styled from "styled-components";

export const Header = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.isScrolled ? "white" : "none")};
  width: 100%;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  padding: 20px;
  .svg-container {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  transition: background-color 0.5s ease;
`;

export const StoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-bottom: 9px solid #d9d9d9;
  .info {
    display: flex;
    color: #989898;
    font-size: 12px;
    gap: 5px;
  }
  .rates {
    display: flex;
    gap: 5px;
    .star {
      color: #f5c654;
    }
    .rate {
      font-weight: bold;
    }
    .review {
      color: #989898;
    }
  }
  .price {
    font-size: 14px;
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-top: 7px solid #d9d9d9;
  p {
    font-size: 14px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 7px solid #d9d9d9;
  gap: 10px;
  margin-bottom: 60px;
  h4 {
    font-size: 18px;
  }
  .title {
    font-weight: bold;
    margin: 10px 0;
  }
  .call {
    display: flex;
    gap: 5px;
    color: #0091ff;
    font-size: 13px;
  }
  .info {
    color: #989898;
    font-size: 13px;
  }
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 60px;
  display: flex;
  padding: 10px;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-top: 1px solid #d9d9d9;
`;

export const BookingButton = styled.button`
  border: none;
  flex-grow: 1;
  border-radius: 5px;
  height: 40px;
  background-color: ${(props) => (props.isAvailable ? "#FF3D00" : "#d9d9d9")};
  color: ${(props) => (props.isAvailable ? "white" : "#989898")};
`;
