import React from "react";
import styled from 'styled-components';

import Store1Image from '../assets/1c5bc5b1-c8cb-46c3-92e4-938f2f3a9d3a.png'
import Store2Image from '../assets/1fc346c5-ca37-4e02-bcac-bdf1aeb50abc.png'
import Store3Image from '../assets/4yhp5rhj7-thstnywzk1gq_2352514371653746.jpg'
import Store4Image from '../assets/05bd388ab81d491884b4114cce95a0ae.jpeg'
import Store5Image from '../assets/8b7059b9-035d-454e-853c-2f74d0078662.png'
import Store6Image from '../assets/8sbiubnuq7hywejbm33fja_235817270580771.jpg'
import Store7Image from '../assets/67ce22748153432697d2352e8177ca48.jpeg'
import Store8Image from '../assets/246dd332-98db-4ff6-b665-db4edc33a04e.png'

import { StarIcon, BookmarkIcon2, MoreIcon } from "../assets/index";

const StoreContainer = styled.div`
    display: flex;
    padding: 14px 40px 14px 23px;
    overflow-x: auto;
    gap: 10px;

`;

const StoreItem = styled.div`


`;

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

const StoreName = styled.div`

`;

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

const More = styled.div`
    height: 45px;
    width: 45px;
    background-color: #FFF;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoreText = styled.div`
    font-size: 6px;
    font-weight: 600;
    line-height: 150%;
    flex-shrink: 0;
    color: #222;
`;

const SeeMore = styled.div`
    display: flex;
    flex-direction: column;
    margin: 65px 0px 50px 50px;
    align-items: center;
    gap: 7px;
`;

const HotPlaceList = () => {
    return (
        <StoreContainer>
            <StoreItem>
                <StoreImage src={Store1Image}/>
                <BookmarkInfo>
                    <StoreInfo>
                        <StoreName>하이탓치 본점</StoreName>
                        <RateInfo>
                            <StarIcon />
                            <Rate>4.6</Rate>
                            <StoreCategory>이자카야, 부천</StoreCategory>
                        </RateInfo>
                    </StoreInfo>
                    <BookmarkIcon2 />
                </BookmarkInfo>
            </StoreItem>
            <StoreItem>
                <StoreImage src={Store1Image}/>
                <BookmarkInfo>
                    <StoreInfo>
                        <StoreName>하이탓치 본점</StoreName>
                        <RateInfo>
                            <StarIcon />
                            <Rate>4.6</Rate>
                            <StoreCategory>이자카야, 부천</StoreCategory>
                        </RateInfo>
                    </StoreInfo>
                    <BookmarkIcon2 />
                </BookmarkInfo>
            </StoreItem>
            <StoreItem>
                <StoreImage src={Store1Image}/>
                <BookmarkInfo>
                    <StoreInfo>
                        <StoreName>하이탓치 본점</StoreName>
                        <RateInfo>
                            <StarIcon />
                            <Rate>4.6</Rate>
                            <StoreCategory>이자카야, 부천</StoreCategory>
                        </RateInfo>
                    </StoreInfo>
                    <BookmarkIcon2 />
                </BookmarkInfo>
            </StoreItem>
            <StoreItem>
                <StoreImage src={Store1Image}/>
                <BookmarkInfo>
                    <StoreInfo>
                        <StoreName>하이탓치 본점</StoreName>
                        <RateInfo>
                            <StarIcon />
                            <Rate>4.6</Rate>
                            <StoreCategory>이자카야, 부천</StoreCategory>
                        </RateInfo>
                    </StoreInfo>
                    <BookmarkIcon2 />
                </BookmarkInfo>
            </StoreItem>
            <StoreItem>
                <StoreImage src={Store1Image}/>
                <BookmarkInfo>
                    <StoreInfo>
                        <StoreName>하이탓치 본점</StoreName>
                        <RateInfo>
                            <StarIcon />
                            <Rate>4.6</Rate>
                            <StoreCategory>이자카야, 부천</StoreCategory>
                        </RateInfo>
                    </StoreInfo>
                    <BookmarkIcon2 />
                </BookmarkInfo>
            </StoreItem>
            <SeeMore>
                <More>
                    <MoreIcon />
                </More>
                <MoreText>전체보기</MoreText>
            </SeeMore>

        </StoreContainer>
        
    );
}

export default HotPlaceList;