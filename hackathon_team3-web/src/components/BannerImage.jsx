import React, { useState } from "react";
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from '../assets/9ce5cba9-b3e9-4e01-b20c-1026e565fa53.png'
import Image2 from '../assets/25ac03fa-6039-435c-83f6-713cc7588cf3.png'
import Image3 from '../assets/863a52c8-8868-488b-8a5f-2a5d9e680fa3.png'
import Image5 from '../assets/561947da-dbd2-454e-bd8e-23f9f8e7aff3.png'
import Image6 from '../assets/2302411a-9bc1-4e5e-9654-8748aefe0134.png'
import Image7 from '../assets/96956292-29fc-4cc2-8d3e-4377f73bff3d.png'
import Image8 from '../assets/b4cba62a-0e0a-46c3-b51c-93b4fb21f7cb.png'
import Image9 from '../assets/c3275a3c-f328-4a8f-9003-78a05a6462c6.png'
import Image10 from '../assets/f7adcb51-dba5-4741-8d84-0b42b238a29b.png'
import Image11 from '../assets/f145ce95-3c0c-45fa-b070-69a47a7b5991.png'
import Image12 from '../assets/9b3557d7-9827-4de2-8628-ad57b8bb460a.png'
import Image13 from '../assets/41fa49a8-1cb1-4730-aead-12bedb029f82.png'
import Image14 from '../assets/9b009b5b-a59b-4917-8645-4e933a27f305.png'

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
  top: 250px;
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


const BannerImage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    Image1, 
    Image2,
    Image3,
    Image5, 
    Image6,
    Image7, 
    Image8,
    Image9, 
    // Image10,
    // Image11, 
    // Image12,
    // Image13,
    // Image14
  ]

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoPlay: true,
    autoplaySpeed: 300,
    fade: true,
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

export default BannerImage;