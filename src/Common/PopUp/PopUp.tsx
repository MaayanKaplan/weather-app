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
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClick, true);
    return () => window.removeEventListener("click", handleClick, true);
  }, [setIsOpen]);

  return (
    <>
      <S.BlurWrapper />
      <div id="modal" ref={modalRef}>
        <S.Container className={className}>
          <S.Title>{title}</S.Title>
          <S.CloseIcon onClick={onClose} src={CloseIcon}></S.CloseIcon>
          {children}
        </S.Container>
      </div>
    </>
  );
};

export default PopUp;
