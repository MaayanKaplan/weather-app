import styled from "styled-components/macro";
import Button from "../../Common/Button/Button";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  height: 80px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px 30px 0 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  /* min-width: 414px; */
  z-index: 1;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const NavButton = styled(Button)`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: normal;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled(NavLink)`
  width: 30px;
  height: 30px;
`;
export const Text = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  text-align: center;
`;

export const Separator = styled.div`
  width: 1px;
  height: 46px;
  background-color: #fff;
`;
