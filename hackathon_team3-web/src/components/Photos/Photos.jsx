import React from "react";
import * as S from "./Photos.styles";

const Photos = ({ photos }) => {
  return (
    <S.PhotosContainer>
      {photos.map((photo, index) => (
        <S.Photo key={index} src={photo} alt="사진" />
      ))}
    </S.PhotosContainer>
  );
};

export default Photos;
