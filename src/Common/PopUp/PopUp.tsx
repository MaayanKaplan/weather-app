import React from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import CloseIcon from "../../Common/Icon/Icons/close-circle.svg";

import MenuMobile from "../../Components/PopUpVarients/MenuMobile/MenuMobile";
import QuestionPopUp from "../../Components/PopUpVarients/QuestionPopUp/QuestionPopUp";

const PopUp: React.FC<PopUpProps> = ({
  title,
  className,
  menuMobile,
  questionPopUp,
  description,
  btnText,
  linkText,

  onClose,
  yesClick,
  buttonAction,
}) => {
  return (
    <S.Container className={className}>
      <S.Title>{title}</S.Title>
      <S.CloseIcon onClick={onClose} src={CloseIcon}></S.CloseIcon>

      {menuMobile && <MenuMobile buttonAction={buttonAction} />}

      {questionPopUp && (
        <QuestionPopUp
          description={description}
          btnText={btnText}
          linkText={linkText}
          onClose={onClose}
          yesClick={yesClick}
        />
      )}
    </S.Container>
  );
};

export default PopUp;
