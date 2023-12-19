import React from "react";
import styled from 'styled-components';

import HomeBottomBar from "../../components/HomeBottomBar";
import HomeTop from "../../components/HomeTop";
import LocationCategory from "../../components/LocationCategory";
import HotPlaceList from "../../components/HotPlaceList";
import BannerImage from "../../components/BannerImage";

import BestIcon from '../../assets/Best.png'
import OnlineWaitingIcon from '../../assets/OnlineWaiting.png'
import HiddenPlaceIcon from '../../assets/HiddenPlace.png'
import CakeIcon from '../../assets/Cake.png'
import DeliciousSpotIcon from '../../assets/DeliciousSpot.png'
import YearEndBookingIcon from '../../assets/YearEndBooking.png'
import GroupBookingIcon from '../../assets/GroupBooking.png'
import WineDeliveryIcon from '../../assets/WineDelivery.png'
import MonthBestIcon from '../../assets/MonthBest.png'
import WaitingTopIcon from '../../assets/WaitingTop.png'
import OmakaseIcon from '../../assets/Omakase.png'
import CowmakaseIcon from '../../assets/Cowmakase.png'
import HotelDiningIcon from '../../assets/HotelDining.png'
import SaveTopIcon from '../../assets/SaveTop.png'

import { ArrowRightIcon } from "../../assets/index";

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 24px 21px 17px 22px;
  gap: 14px 18px;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryItem = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

const CategoryText = styled.div`
  font-size: 10px;
`;

const BorderGray = styled.div`
  height: 21px;
  background: #F9F8F8;
`;

const Where = styled.div`
  color: #222;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 14px;
  margin-left: 23px;
`;

const HotPlace = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: 23px;
  margin-right: 10px;
  justify-content: space-between;
`;

const HotPlaceBest = styled.div`

`;

const WaitingHotPlaceBest = styled.div`
  color: #222;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
`;

const HotPlaceDescription = styled.div`
  color: #838383;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
`;

const BottemPadding = styled.div`
  height: 100px;
`;

const MoreText = styled.div`
    font-size: 6px;
    font-weight: 600;
    line-height: 150%;
    flex-shrink: 0;
    color: #222;
    padding-top: 1px;
`;

const More = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <div>
      <HomeTop />
      <BannerImage />

      <Categories>
        <Category>
          <CategoryItem src={BestIcon} />
          <CategoryText>23년베스트</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={OnlineWaitingIcon} />
          <CategoryText>온라인웨이팅</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={HiddenPlaceIcon} />
          <CategoryText>히든플레이스</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={CakeIcon} />
          <CategoryText>케이크</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={DeliciousSpotIcon} />
          <CategoryText>미식스팟</CategoryText>
        </Category>

        <Category>
          <CategoryItem src={YearEndBookingIcon} />
          <CategoryText>연말예약</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={GroupBookingIcon} />
          <CategoryText>모임예약</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={WineDeliveryIcon} />
          <CategoryText>와인배송</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={MonthBestIcon} />
          <CategoryText>이달의맛집</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={HiddenPlaceIcon} />
          <CategoryText>밀키트</CategoryText>
        </Category>

        <Category>
          <CategoryItem src={WaitingTopIcon} />
          <CategoryText>웨이팅TOP</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={OmakaseIcon} />
          <CategoryText>오마카세</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={CowmakaseIcon} />
          <CategoryText>우마카세</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={HotelDiningIcon} />
          <CategoryText>호텔다이닝</CategoryText>
        </Category>
        <Category>
          <CategoryItem src={SaveTopIcon} />
          <CategoryText>저장TOP</CategoryText>
        </Category>
      </Categories>
      <BorderGray />
      <Where>어디로 가시나요?</Where>
      <LocationCategory />
      <HotPlace>
        <HotPlaceBest>
          <WaitingHotPlaceBest>웨이팅 핫플레이스 BEST</WaitingHotPlaceBest>
          <HotPlaceDescription>핫 한 웨이팅 라인업, 이제 캐치테이블에서!</HotPlaceDescription>
        </HotPlaceBest>
        <More>
          <MoreText>전체보기</MoreText>
          <ArrowRightIcon />
        </More>
      </HotPlace>
      <HotPlaceList />
      <BottemPadding></BottemPadding>
      <HomeBottomBar />
    </div>
  )
};

export default Home;