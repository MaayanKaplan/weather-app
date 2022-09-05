import React from "react";
import * as S from "./styles";
import { QuestionProps } from "./types";

const QuestionPopUp: React.FC<QuestionProps> = ({
  description,
  linkText,
  onClose,
  yesClick,
  btnText,
}) => {
  return (
    <>
      <S.Description>{description}</S.Description>
      <S.ButtonsWrapper>
        <S.Link onClick={onClose}>{linkText}</S.Link>
        <S.PopUpButton onClick={() => yesClick()}>{btnText}</S.PopUpButton>
      </S.ButtonsWrapper>
    </>
  );
};

export default QuestionPopUp;
