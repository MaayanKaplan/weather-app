import React from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import Button from "../Button/Button";
import CloseIcon from "../../Common/Icon/Icons/close-circle.svg";

const PopUp: React.FC<PopUpProps> = ({
  title,
  description,
  btnText,
  linkText,
  icon,
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.CloseIcon src={CloseIcon}></S.CloseIcon>
      {/* <Button onClick={() => {}}>{btnText}</Button> */}
      <S.Link>
        {icon}
        {linkText}
      </S.Link>
    </S.Container>
  );
};

export default PopUp;
