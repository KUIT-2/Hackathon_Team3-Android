import styled from "styled-components";

export const BookingStoreContainer = styled.div`
    display: flex;
    margin-left: 25px;
    margin-top: 33px;
`

export const BookingStoreLabel = styled.span`
    font-size: 14px;
    margin-right: 24px;
    color: #8C8C8C;
`

export const BookingStoreName = styled.span`
    font-size: 14px;
    color: #222;
`

export const BookingDateContainer = styled(BookingStoreContainer)`
    margin-top: 16px;
`

export const BookingDateLabel = styled(BookingStoreLabel)`
    margin-right: 58px;
`

export const BookingDate = styled(BookingStoreName)`
    color: #000dff;
`