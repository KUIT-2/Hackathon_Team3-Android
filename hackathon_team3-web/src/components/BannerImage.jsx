import React, { useState } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from '../assets/9ce5cba9-b3e9-4e01-b20c-1026e565fa53.png'

const Banner = styled.div`
    width: 375px;
    height: 260px;
    background: #D9D9D9;
    margin-top: 10px;
`;

const IndexBox = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 200px;
  right: 20px;
  border-radius: 20px;
  background-color: #0f0a04;
  border: 2px solid white;
  color: white;
  padding: 5px 10px;
`;

const StoreImage = styled.div`
  height: 250px;
  background-color: #d9d9d9;
  position: relative;
`;

const Images = styled.img`
  width: 375px;
  height: 260px;
`;


const StorePhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    Image
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <Banner>
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <StoreImage key={index}>
            <Images src={photo} alt={`Photo ${index + 1}`} />
          </StoreImage>
        ))}
      </Slider>
      <IndexBox>
        {currentSlide + 1}/{photos.length}
      </IndexBox>
    </Banner>
  );
};

export default StorePhotoSlider;