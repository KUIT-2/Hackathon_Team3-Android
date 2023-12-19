import React from "react";
import * as S from "./ReviewBox.styles";

const ReviewBox = ({ reviews }) => {
  return (
    <>
      {reviews.map((review, index) => (
        <S.Container>
          <S.UserBox key={index}>
            <div className="profile"></div>
            <p className="username">{review.user}</p>
          </S.UserBox>
          <S.Rate>
            <div className="rate-wrapper">
              <span className="star">★</span>
              <p className="number">{review.rate.toFixed(1)}</p>
            </div>
            <span className="date">{review.date}</span>
          </S.Rate>
          <S.Photo key={index} src={review.photo} alt="사진" />
          <S.Description>{review.description}</S.Description>
        </S.Container>
      ))}
    </>
  );
};

export default ReviewBox;
