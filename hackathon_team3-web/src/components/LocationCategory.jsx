import React from "react";
import styled from 'styled-components';

import { NavigationIcon } from "../assets/index";
import ApgujeongImg from '../assets/0706apgujeong.jpg'
import ItaewonImg from '../assets/0706itaewon.jpg'
import BusanImg from '../assets/busan_.jpg'
import SungsooImg from '../assets/0706sungsoo.jpg'
import GwanghwamunImg from '../assets/0706gwanghwamun.jpg'
import GangnamImg from '../assets/0706gangnam.jpg'
import HapjeongImg from '../assets/0609_location_hapjeong,mangwon.png'

import HongdaeImg from '../assets/0706hongdae.jpg'
import YeouidoImg from '../assets/0706yeouido.jpg'
import BukchonImg from '../assets/0706bukchon_0331.jpg'
import EuljiroImg from '../assets/0706euljiro_0331.jpg'
import JejuImg from '../assets/jeju_.jpg'
import DaeguImg from '../assets/0307_location_daegu@2x.png'

const LocationContainer = styled.div`
    display: flex;
    padding: 14px 0px 14px 23px;
    overflow-x: auto;
`;

const AroundMeCircle = styled.div`
    width: 52px;
    height: 52px;
    background-color: #D9D9D9;    
    border-radius: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    flex-shrink: 0;
`;

const AroundMeText = styled.div`
    color: #222;
    text-align: center;
    font-family: SF Pro Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
`;

const LocationImg = styled.div`
    background-image: url(${props => props.imageurl});
    background-size: 52px;
    background-color: darkgray;
    width: 52px;
    height: 52px;
    background-color: #D9D9D9;    
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    flex-shrink: 0;
`;

const LocationText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: SF Pro Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
`;

const LocationCategory = () => {
    return (
        <LocationContainer>
            <AroundMeCircle>
                <NavigationIcon />
                <AroundMeText>내주변</AroundMeText>
            </AroundMeCircle>

            <LocationImg imageurl={ApgujeongImg}>
                <LocationText>압구정</LocationText>
                <LocationText>청담</LocationText>
            </LocationImg>
            
            <LocationImg imageurl={ItaewonImg}>
                <LocationText>이태원</LocationText>
                <LocationText>한남</LocationText>
            </LocationImg>

            <LocationImg imageurl={BusanImg}>
                <LocationText>부산</LocationText>
            </LocationImg>

            <LocationImg imageurl={SungsooImg}>
                <LocationText>성수</LocationText>
            </LocationImg>

            <LocationImg imageurl={GwanghwamunImg}>
                <LocationText>광화문</LocationText>
                <LocationText>종로</LocationText>
            </LocationImg>

            <LocationImg imageurl={GangnamImg}>
                <LocationText>강남</LocationText>
                <LocationText>역삼</LocationText>
            </LocationImg>

            <LocationImg imageurl={HapjeongImg}>
                <LocationText>합정</LocationText>
                <LocationText>망원</LocationText>
            </LocationImg>

            <LocationImg imageurl={HongdaeImg}>
                <LocationText>홍대</LocationText>
                <LocationText>신촌</LocationText>
            </LocationImg>

            <LocationImg imageurl={YeouidoImg}>
                <LocationText>여의도</LocationText>
            </LocationImg>

            <LocationImg imageurl={BukchonImg}>
                <LocationText>북촌</LocationText>
                <LocationText>삼청</LocationText>
            </LocationImg>

            <LocationImg imageurl={EuljiroImg}>
                <LocationText>을지로</LocationText>
            </LocationImg>

            <LocationImg imageurl={JejuImg}>
                <LocationText>제주</LocationText>
            </LocationImg>

            <LocationImg imageurl={DaeguImg}>
                <LocationText>대구</LocationText>
            </LocationImg>
        </LocationContainer>
    )
}

export default LocationCategory;