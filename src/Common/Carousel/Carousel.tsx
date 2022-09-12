import * as React from "react";
import * as S from "./styles";
import LeftArrow from "./Icons/arrow-square-left.svg";
import RightArrow from "./Icons/arrow-square-right.svg";

const Carousel = (props: any) => {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [length, setLength] = React.useState(children?.length);

  // Set the length to match current children from props
  React.useEffect(() => {
    setLength(children?.length);
  }, [children]);

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  return (
    <S.Container
      className={`show-${show}`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.ArrowWrapper>
        <S.LeftArrow src={LeftArrow} onClick={prev} />
        <S.RightArrow src={RightArrow} onClick={next} />
      </S.ArrowWrapper>
    </S.Container>
  );
};

export default Carousel;
