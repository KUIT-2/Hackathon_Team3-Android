import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./StorePhotoSlider.styles";

const StorePhotoSlider = ({ photos }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <S.StoreImage key={index}>
          <img src={photo} alt={`Photo ${index + 1}`} />
        </S.StoreImage>
      ))}
    </Slider>
  );
};

export default StorePhotoSlider;
