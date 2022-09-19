import React from "react";
import * as S from "./styles";
import { NotificationProps } from "./types";
import IconSuccess from "./Icons/check-v.svg";
import IconError from "./Icons/info-circle.svg";

const NotificationBox: React.FC<NotificationProps> = ({
  severity,
  children,
  className,
}) => {
  return (
    <S.NotificationBoxWrapper className={className} severity={severity}>
      {severity === "success" ? (
        <S.Icon src={IconSuccess} />
      ) : (
        <S.Icon src={IconError} />
      )}

      <S.StyledDescription>{children}</S.StyledDescription>
    </S.NotificationBoxWrapper>
  );
};

export default NotificationBox;
