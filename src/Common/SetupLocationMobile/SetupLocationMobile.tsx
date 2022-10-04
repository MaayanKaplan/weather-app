import Logo from "../../Images/logo.png";
import styled from "styled-components/macro";
import Button from "../Button/Button";

const SetupLocationMobile = () => {
  return (
    <>
      <LogoWrapper>
        <img src={Logo} alt="logo" />
      </LogoWrapper>
      <Title>Set up location</Title>
      <Description>
        We probably could not find your current location. Please turn on the
        location by phone or select a city in the search button
      </Description>
      <BtnsWrapper>
        <CostumedBtn variant="white" onClick={() => {}}>
          Open location services
        </CostumedBtn>
        <CostumedBtn variant="ghost" onClick={() => {}}>
          Search city
        </CostumedBtn>
      </BtnsWrapper>
    </>
  );
};

export default SetupLocationMobile;

const LogoWrapper = styled.div`
  display: flex;
  margin: 112px auto 67px auto;
  width: 182px;
  height: 119px;
`;

const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 125%;
  color: #fff;
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  color: #fff;

  display: flex;
  justify-content: center;
  margin: 16px 30px 40px 30px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 0 75px;
`;

const CostumedBtn = styled(Button)`
  padding: 16px 24px;
  width: 264px;
  margin: 0 auto;
`;
