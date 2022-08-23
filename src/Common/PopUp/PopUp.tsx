import React from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import Button from "../Button/Button";
import CloseIcon from "../../Common/Icon/Icons/close-circle.svg";
import { useNavigate } from "react-router-dom";

const PopUp: React.FC<PopUpProps> = ({
  title,
  description,
  btnText,
  linkText,
  icon,
  modeSwitch,
  degreesSwitch,
  degreesTitle,
  modeTitle,
  className,
  menuMobile,
  regularPopUp,
  onClose,
}) => {
  const navigate = useNavigate();
  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>
      <S.CloseIcon onClick={onClose} src={CloseIcon}></S.CloseIcon>
      {menuMobile && (
        <>
          <S.SwitchesContainer>
            <S.ChangeWrapper>
              <S.ChangeTitle>{modeTitle}</S.ChangeTitle>
              <S.SwitchWrapper>{modeSwitch}</S.SwitchWrapper>
            </S.ChangeWrapper>
            <S.ChangeWrapper>
              <S.ChangeTitle>{degreesTitle}</S.ChangeTitle>
              <S.SwitchWrapper>{degreesSwitch}</S.SwitchWrapper>
            </S.ChangeWrapper>
          </S.SwitchesContainer>

          <S.ButtonWrapper>
            {icon}
            {linkText}
          </S.ButtonWrapper>
        </>
      )}
      {regularPopUp && (
        <>
          <S.Description>{description}</S.Description>
          <S.ButtonsWrapper>
            <S.Link>{linkText}</S.Link>
            <S.PopUpButton onClick={() => navigate("/login")}>
              {btnText}
            </S.PopUpButton>
          </S.ButtonsWrapper>
        </>
      )}
    </S.Container>
  );
};

export default PopUp;
