import styled from "styled-components/macro";
import { deviceSize } from "../../Utils/constants";

export const HeaderWrapper = styled.header`
  /* width: 1920px; */
  height: 94px;
  /* margin: 121px 0 200px; */
  padding: 0 70px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  display: flex;

  @media (max-width: ${deviceSize.tablet}) {
    padding: 0 50px;
  }
`;

export const LogoWrapper = styled.div`
  /* width: 110px; */
  height: 71.8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 11px 190px 11px 0;

  @media (max-width: ${deviceSize.tablet}) {
    margin: 19px 18px 19px 0;
  }
`;

export const Logo = styled.img`
  width: 48px;
  height: 51px;
  display: flex;
  margin: 0 31px;

  @media (max-width: ${deviceSize.tablet}) {
    width: 36px;
    height: 36px;
  }
`;

export const LogoText = styled.h1`
  color: #fff;

  @media (max-width: ${deviceSize.tablet}) {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
export const NavWrapper = styled.nav`
  display: flex;
  gap: 63px;
  margin-right: 139px;

  @media (max-width: ${deviceSize.tablet}) {
    margin-right: 56px;
    gap: 32px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  margin-left: 124px;

  @media (max-width: ${deviceSize.tablet}) {
    margin-left: 40px;

    :last-child {
      margin-left: 32px;
    }
  }
`;

export const SwitchesWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 27px 68px 27px 81px;

  @media (max-width: ${deviceSize.tablet}) {
    order: -1;
    margin: 27px 96px 27px 0;
  }
`;
