import React from "react";
import * as S from "./MenuBox.styles";

const MenuBox = ({ menus }) => {
  return (
    <>
      {menus.map((menu, index) => (
        <S.Menu key={index}>
          <p className="name">{menu.name}</p>
          <p className="price">{menu.price.toLocaleString()}</p>
        </S.Menu>
      ))}
      <S.Description>
        *메뉴와 가격은 레스토랑 사정에 따라 달라질 수 있습니다.
      </S.Description>
    </>
  );
};

export default MenuBox;
