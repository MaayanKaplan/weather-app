import { useEffect, useRef } from "react";
import { PopUpProps } from "./types";
import * as S from "./styles";
import CloseIcon from "../../Common/Icon/Icons/close-circle.svg";
// import { useOnClickOutsideRef } from "../../hooks/useOnClickOutsideRef";

const PopUp: React.FC<PopUpProps> = ({
  title,
  className,
  children,
  onClose,
  isOpen,
  setIsOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!modalRef.current?.contains(event.target as Node)) {
        setIsOpen(true);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [setIsOpen]);

  return (
    <>
      <S.BlurWrapper onClick={onClose} />
      <S.Container className={className}>
        <S.Title>{title}</S.Title>
        <S.CloseIcon onClick={onClose} src={CloseIcon}></S.CloseIcon>
        {children}
      </S.Container>
    </>
  );
};

export default PopUp;
