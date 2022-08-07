import React from "react";
import * as S from "./styles";
import { NotificationProps } from "./types";
import IconError from "./Icons/info-circle.svg";
import IconSuccess from "./Icons/check-v.svg";

const NotificationBox: React.FC<NotificationProps> = ({
  severity,
  children,
}) => {
  return (
    <S.NotificationBoxWrapper severity={severity}>
      <S.IconWrapper>
        {severity === "success" ? <IconSuccess /> : <IconError />}
      </S.IconWrapper>
      <S.StyledDescription>{children}</S.StyledDescription>
    </S.NotificationBoxWrapper>
  );
};

export default NotificationBox;
