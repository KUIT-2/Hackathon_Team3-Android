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
              <p className="number">{review.rating.toFixed(1)}</p>
            </div>
            <span className="date">{review.date.slice(0, 10)}</span>
          </S.Rate>
          <S.Photo key={index} src={review.imageUrl} alt="사진" />
          <S.Description>{review.contents}</S.Description>
        </S.Container>
      ))}
    </>
  );
};

export default ReviewBox;
