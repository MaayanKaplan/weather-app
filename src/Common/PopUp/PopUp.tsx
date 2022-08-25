import React from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import CloseIcon from "../../Common/Icon/Icons/close-circle.svg";

const PopUp: React.FC<PopUpProps> = ({
  title,
  className,
  children,
  onClose,
}) => {
  return (
    <S.BlurWrapper onClick={onClose}>
      <S.Container className={className}>
        <S.Title>{title}</S.Title>
        <S.CloseIcon onClick={onClose} src={CloseIcon}></S.CloseIcon>
        {children}
      </S.Container>
    </S.BlurWrapper>
  );
};

export default PopUp;
