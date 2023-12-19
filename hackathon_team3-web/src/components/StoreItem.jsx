import React from "react";
import styled from "styled-components";

import { StarIcon, BookmarkIcon2 } from "../assets/index";

import { useNavigate } from "react-router-dom";

const StoreImage = styled.img`
  width: 180px;
  height: 180px;
  margin-bottom: 8px;
  border-radius: 10px;
`;

const BookmarkInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StoreName = styled.div``;

const RateInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

const Rate = styled.div`
  padding-top: 4px;
`;

const StoreCategory = styled.div`
  color: #838383;
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  padding-top: 3px;
`;

const StoreItem = ({ store }) => {
  const navigate = useNavigate();
  const handleEnterStore = () => {
    navigate(`${store.restaurantId}`);
  };

  return (
    <div onClick={handleEnterStore} type="button">
      <StoreImage src={store.imageUrl} />
      <BookmarkInfo>
        <StoreInfo>
          <StoreName>{store.restaurantName}</StoreName>
          <RateInfo>
            <StarIcon />
            <Rate>{store.starCount.toFixed(1)}</Rate>
            <StoreCategory>
              {store.category}, {store.region}
            </StoreCategory>
          </RateInfo>
        </StoreInfo>
        <BookmarkIcon2 />
      </BookmarkInfo>
    </div>
  );
};

export default StoreItem;
