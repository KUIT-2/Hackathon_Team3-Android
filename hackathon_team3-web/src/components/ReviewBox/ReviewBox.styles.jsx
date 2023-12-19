import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-bottom: 1px solid #d9d9d9;
`;
export const UserBox = styled.div`
  display: flex;
  gap: 10px;
  .profile {
    width: 30px;
    height: 30px;
    background-color: #d9d9d9;
    border-radius: 50%;
  }
  .username {
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;

export const Rate = styled.div`
  display: flex;
  justify-content: space-between;
  .rate-wrapper {
    display: flex;
    gap: 5px;
    .star {
      color: #f5c654;
    }
    .number {
      font-weight: bold;
    }
  }
  .date {
    color: #989898;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
  }
`;

export const Photo = styled.img`
  width: 130px;
  height: 130px;
`;

export const Description = styled.div`
  font-size: 14px;
`;
