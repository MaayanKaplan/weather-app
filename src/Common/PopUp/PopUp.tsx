import React from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import Button from "../Button/Button";
import CloseIcon from "../../Icons/close-circle.svg";

const PopUp: React.FC<PopUpProps> = ({
  title,
  description,
  btnText,
  linkText,
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Icon src={CloseIcon}></S.Icon>
      <Button onClick={() => {}}>{btnText}</Button>
      <S.Link>{linkText}</S.Link>
    </S.Container>
  );
};

export default PopUp;
