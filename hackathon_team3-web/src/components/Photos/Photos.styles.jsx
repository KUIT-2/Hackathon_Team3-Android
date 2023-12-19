import styled from "styled-components";

export const PhotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;
export const Photo = styled.img`
  width: 128px;
  height: 128px;
`;
