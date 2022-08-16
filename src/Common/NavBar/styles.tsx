import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

export const NavBarWrapper = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;

  gap: 15px;
  gap: 63px;
`;

export const NavBarItemWrapper = styled.div`
  display: flex;
  gap: 8px;

  position: relative;
`;

export const NavBarButton = styled(Button)`
  padding: 0;
  border: none;
`;

export const Text = styled(NavLink)`
  line-height: 1.2;
  color: #fff;
  text-decoration: none;

  display: flex;
  align-items: center;
  gap: 8px;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
    font-weight: normal;
    margin-top: 4px;
    text-align: center;
  }
`;

export const IconWrapper = styled(NavLink)``;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActiveItem = styled.div`
  height: 5px;
  width: 125%;
  background-color: #fff;
  position: absolute;
  bottom: 0;
`;
