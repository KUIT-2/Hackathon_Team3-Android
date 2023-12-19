import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./Store.styles";
import { ArrowLeft, Home, BookMark, Share, Call } from "../../asset";
import Tab from "../../components/Tab/Tab";
import Booking from "../Booking/Booking";
import StorePhotoSlider from "../../components/StorePhotoSlider/StorePhotoSlider";

const Store = () => {
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const [reviews, setReviews] = useState();
  const [menus, setMenus] = useState();
  const [storePhotos, setStorePhotos] = useState();
  const [photos, setPhotos] = useState();
  const navigate = useNavigate();

  const fetchStore = async () => {
    try {
      const res = await fetch(
        `http://192.168.107.231:8080/restaurants/${storeId}`
      );
      const result = await res.json();
      setStore(result.result);
      setMenus(result.result.menuList);
      setStorePhotos(result.result.restaurantImages);
      console.log(store);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(
        `http://192.168.107.231:8080/restaurants/${storeId}/reviews`
      );
      const result = await res.json();
      setReviews(result.result);
      console.log(reviews);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  const fetchPhotos = async () => {
    try {
      const res = await fetch(
        `http://192.168.107.231:8080/restaurants/${storeId}/images`
      );
      const result = await res.json();
      setPhotos(result.result);
      console.log(reviews);
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  };

  useEffect(() => {
    fetchStore();
    console.log("Store: ", store);
    fetchReviews();
    console.log("Reviews :", reviews);
    fetchPhotos();
    console.log("Photos :", photos);
  }, []);

  const [isAvailable, setIsAvailable] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBookingButtonClick = () => {
    if (isAvailable) {
      setIsBookingOpen(true);
    }
  };
  if (!store || !photos || !reviews) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }
  return (
    <>
      <S.Header>
        <div className="svg-container">
          <ArrowLeft onClick={() => navigate(-1)} />
          <Home onClick={() => navigate("/")} />
        </div>
        <div className="svg-container">
          <BookMark />
          <Share />
        </div>
      </S.Header>
      <StorePhotoSlider photos={storePhotos} />
      <S.StoreInfoBox>
        <h3>{store.name}</h3>
        <p>{store.briefInfo}</p>
        <span className="info">
          <p>{store?.category} </p> • <p>{store.region}</p>
        </span>
        <span className="rates">
          <span className="star">★</span>
          <span className="rate">{store.rating.toFixed(1)}</span>
          <span className="review">({reviews.length})</span>
        </span>
      </S.StoreInfoBox>
      <Tab menus={menus} photos={photos} reviews={reviews} />
      <S.Location>
        <h4>매장 위치</h4>
        <p>{store.address}</p>
      </S.Location>
      <S.DetailInfo>
        <h4>상세정보</h4>
        <p className="title">전화번호</p>
        <span className="call">
          <Call />
          <span className="phone-number">{store.phoneNumber}</span>
        </span>
        <p className="title">매장 소개</p>
        <span className="info">{store.description}</span>
        <p className="title">영업시간</p>
        <span className="info">{store.operatingHour}</span>
      </S.DetailInfo>
      <S.Footer>
        <BookMark />
        <S.BookingButton
          onClick={handleBookingButtonClick}
          isAvailable={isAvailable}
        >
          {isAvailable ? "웨이팅 등록하기" : "바로 입장 가능해요"}
        </S.BookingButton>
      </S.Footer>
      {isBookingOpen ? (
        <Booking storeId={storeId} setIsBookingOpen={setIsBookingOpen} />
      ) : null}
    </>
  );
};

export default Store;
