import React from "react";
import styled from 'styled-components';

import { NavigationIcon } from "../assets/index";

const LocationContainer = styled.div`
  display: flex;
  margin: 24px 23px 14px 23px;
`;

const AroundMe = styled.div`
    width: 52px;
    height: 52px;
    fill: #D9D9D9;    
    border-radius: 24px;
`;

const LocationCategory = () => {
    return (
        <LocationContainer>
            <AroundMe>
                <NavigationIcon />
                <div>내주변</div>
            </AroundMe>
        </LocationContainer>
    )
}

export default LocationCategory;