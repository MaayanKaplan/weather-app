import styled from "styled-components/macro";
import Logo from "../../Common/Logo";
import { deviceSize } from "../../Utils/constants";

export const HeaderWrapper = styled.header`
  height: 94px;
  padding: 0 70px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: #48bae4;
  display: flex;

  @media (max-width: ${deviceSize.tablet}) {
    padding: 0 50px;
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

export const HeaderLogo = styled(Logo)`
  margin: 100px;
  padding: 100px;
`;
