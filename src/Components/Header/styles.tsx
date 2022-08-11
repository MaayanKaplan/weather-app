import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";

export const HeaderWrapper = styled.header`
  height: 94px;
  padding-left: 70px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  display: flex;

  @media (max-width: ${deviceSize.tablet}) {
    padding: 0 50px;
  }
`;

export const Logo = styled.img`
  padding: 11px 190px 11px 0;

  @media ${deviceSize.tablet} {
    padding: 19px 28px 19px 0;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 63px;
  margin-right: 139px;

  @media ${deviceSize.tablet} {
    margin-right: 56px;
    gap: 32px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  margin-left: 124px;

  @media ${deviceSize.tablet} {
    margin-left: 40px;
  }
`;

export const SwitchesWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin: 27px 68px 27px 81px;

  @media ${deviceSize.tablet} {
    order: -1;
    margin: 27px 96px 27px 0;
  }
`;

export const LastLinkWrapper = styled.div`
  display: flex;
  @media ${deviceSize.tablet} {
    margin-left: 32px;
  }
`;
