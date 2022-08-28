import React from "react";
import * as S from "./styles";
import { QuestionProps } from "./types";
import { Logout } from "../../../hooks/Logout";

const QuestionPopUp: React.FC<QuestionProps> = ({
  description,
  linkText,
  onClose,
  logout,
  removeFromFavotires,
}) => {
  return (
    <>
      <S.Description>{description}</S.Description>
      <S.ButtonsWrapper>
        <S.Link onClick={onClose}>{linkText}</S.Link>
        {logout && <S.PopUpButton onClick={Logout}>Yes, log out</S.PopUpButton>}
        {removeFromFavotires && (
          <S.PopUpButton onClick={() => {}}>Yes, remove</S.PopUpButton>
        )}
      </S.ButtonsWrapper>
    </>
  );
};

export default QuestionPopUp;
